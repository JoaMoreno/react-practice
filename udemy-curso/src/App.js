import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class Hello extends Component {
  render() {
    return <h1>{this.props.title}</h1>
  }

}

class Text extends Component {
  render() {
    /* Se recomienda hacer la destructuracion alfabeticamente
    Las props se consideran inmutables, ya que se trata como una funcion pura
    */
    const {
      title,
      isActivated,
      arrayofNumber,
      multiply,
      objectWhithInfo
    } = this.props

    //const textoSegunBool = isActivated ? 'On' : 'Off'
    const mappedNumbers = arrayofNumber.map(multiply)

    return (
      <div>
        {title}
        <p>{mappedNumbers.join(', ')}</p>
        <p>{objectWhithInfo.key} </p>
      </div>
    )
  }
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Hello title='Props' />
        {/* Se recomienda utilizar los props alfabeticamente */}
        <Text
        title={<h1>Hello</h1>}
          objectWhithInfo={{ key: 'First value', key2: 'othervalue' }}
          arrayofNumber={[2, 3, 10]}
          multiply={(number) => number * 2}
          text='Text lorem'
          number={2}
          isActivated />
      </header>
    </div>
  );
}

export default App;
