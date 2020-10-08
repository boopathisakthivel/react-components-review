import React, { Component } from 'react';

class Container extends Component {
  constructor(props) {
    super(props);
    console.log('Container::constructor');
  }
  componentWillUpdate(nextProps) {
    console.log('Container::componentWillUpdate');
  }
  shouldComponentUpdate(nextProps, nextState) {
    console.log('Container::shouldComponentUpdate');
    return true;
  }
  componentDidUpdate(prevProps, prevStats) {
    console.log('Container::componentDidUpdate');
  }
  componentWillReceiveProps(nextProps) {
    console.log('Container::componentWillReceiveProps');
  }
  componentWillMount() {
    console.log('Container::componentWillMount');
  }
  componentDidMount() {
    console.log('Container::componentDidMount');
  }
  componentWillUnmount() {
    console.log('Container::componentWillUnmount');
  }
  componentDidCatch() {
    console.log('Container::componentDidCatch');
  }
  render() {
    console.log('Container::render');

    return (
      <div className="Container">
          This is the container
      </div>
    );
  }
}

export default Container;
