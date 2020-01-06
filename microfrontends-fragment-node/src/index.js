import React, { Fragment, Component, useEffect } from 'react';
import Container from './components/Container';
import Headline from './components/Headline';
import Button from './components/Button';
import Label from './components/Label';

class Root extends React.PureComponent {
  state = {
    count: 2
  }

  componentDidMount() {
    console.log('didmount fragment')
  }

  componentDidUpdate() {
    console.log('didupdate fragment')
  }

  render() {
    const { counter, onIncrementCounter, theme } = this.props
    return (
      <Container theme={theme}>
        <h1>{this.state.count}</h1>
        <Button theme={theme} onClick={() => this.setState({ count: Math.round(Math.random() * 100) })}>
          random
        </Button>
        <Label theme={theme}>fragment</Label>
        <Headline theme={theme}>Hello Guys!</Headline>
        <h2>
          Count: <strong>{counter}</strong>
        </h2>
        <Button theme={theme} onClick={onIncrementCounter}>
          Increment
        </Button>
      </Container>
    );
  }
};

window.HomeComponent = Root;
