import React, { PureComponent } from 'react';

class PureContainer extends PureComponent {
  constructor(props) {
    super(props);
    console.log('PureContainer::constructor');
  }
  componentWillUpdate(nextProps) {
    console.log('PureContainer::componentWillUpdate');
  }
  componentDidUpdate(prevProps, prevStats) {
    console.log('PureContainer::componentDidUpdate');
  }
  componentWillReceiveProps(nextProps) {
    console.log('PureContainer::componentWillReceiveProps');
  }
  componentWillMount() {
    console.log('PureContainer::componentWillMount');
  }
  componentDidMount() {
    console.log('PureContainer::componentDidMount');
  }
  componentWillUnmount() {
    console.log('PureContainer::componentWillUnmount');
  }
  componentDidCatch() {
    console.log('PureContainer::componentDidCatch');
  }
  render() {
    console.log('PureContainer::render');

    return (
      <div className="PureContainer">
          This is the PureContainer
      </div>
    );
  }
}

export default PureContainer;
