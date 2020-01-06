import React, { Component } from 'react';

export default function asyncComponent({ prefix, loadManifest }) {
  return class AsyncComponent extends Component {
    static Component = null;
    state = { Component: AsyncComponent.Component };

    componentDidMount() {
      if (!this.state.Component) {
        loadManifest().then(({ bundle, metadata }) => {
          const { js } = bundle
          const { componentName } = metadata

          const script = document.createElement('script')
          script.src = `${prefix}${js}`
          script.type = 'text/javascript'
          script.onload = () => {
            AsyncComponent.Component = window[componentName]
            this.setState({ Component: AsyncComponent.Component })
          }
          document.body.appendChild(script)
        })
      }
    }

    render() {
      const { Component } = this.state;

      return Component && <Component {...this.props} />
    }
  }
}
