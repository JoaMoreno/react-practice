import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class Contador extends Component {

  constructor(props) {
    super(props)
    this.state = {
      contador: this.props.contadorInicial ? this.props.contadorInicial : 0
    }
    setInterval(() => {
      this.setState({ contador: this.state.contador + 1 })
    }, 1000)
  }

  render() {
    const contador = 0
    return (
      <div>
        <ContadorNumero numero={this.state.contador}></ContadorNumero>
      </div>
    )
  }
}

class ContadorNumero extends Component {
  render() {
    return <span>{this.props.numero}</span>
  }
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Contador contadorInicial={5}></Contador>
      </header>
    </div>
  );
}

export default App;
