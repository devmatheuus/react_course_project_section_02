import './App.css';

import { Component } from 'react';

import logo from './logo.svg';

//stateful component
class App extends Component {
  state = {
    name: 'Matheus Silva',
    counter: 0,
  };

  handleParagraphClick = () => {
    this.setState({ name: 'Matheus Lima' });
  };

  handleAnchorClick = (event) => {
    event.preventDefault();

    const { counter } = this.state;

    this.setState({ counter: counter + 1 });
  };

  render() {
    const { name, counter } = this.state;

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p onClick={this.handleParagraphClick}>
            {name} {counter}
          </p>
          <a
            onClick={this.handleAnchorClick}
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
