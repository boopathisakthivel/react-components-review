import React, { Component } from 'react';
import Container from './Container';
import logo from './logo.svg';
import './App.css';
import PureContainer from './PureContainer';
import FunctionalContainer from './FunctionalContainer';
import FunctionalMemoContainer from './FunctionalMemoContainer';

class App extends Component {
  constructor(props) {
    super(props);
    console.log('App::constructor');

    this.state = {
      'count': 0
    };

    this.updateCount = this.updateCount.bind(this);
  }

  updateCount() {
    const { count } = this.state;
    this.setState({ 'count': (count + 1) });
  }

  componentWillUpdate(nextProps) {
    console.log('App::componentWillUpdate');
  }
  shouldComponentUpdate(nextProps, nextState) {
    console.log('App::shouldComponentUpdate');
    return true;
  }
  componentDidUpdate(prevProps, prevStats) {
    console.log('App::componentDidUpdate');
  }
  componentWillReceiveProps(nextProps) {
    console.log('App::componentWillReceiveProps');
  }
  componentWillMount() {
    console.log('App::componentWillMount');
  }
  componentDidMount() {
    console.log('App::componentDidMount');
  }
  componentWillUnmount() {
    console.log('App::componentWillUnmount');
  }
  componentDidCatch() {
    console.log('App::componentDidCatch');
  }
  render() {
    console.log('App::render');
    const { count } = this.state;

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <section>
          App Counter
          {count}
          <button onClick={this.updateCount}>Increase</button>
        </section>
        <section>
          <Container />
        </section>
        <section>
          <PureContainer />
        </section>
        <section>
          <FunctionalContainer />
        </section>
        <section>
          <FunctionalMemoContainer />
        </section>
      </div>
    );
  }
}

export default App;
