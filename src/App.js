import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Input from './components/input/Input';
import Button from './components/button/Button';
import PasswordStrength from './components/passwordStrength/PasswordStrength';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      length: false,
      upper: false,
      number: false,
      size: 0,
    }
  }

  passwordChanged(e){
    const str = e.target.value
    const size = str.length
    const length = size >= 6
    const upper = str.search(/[A-Z]/g) !== -1
    const number = str.search(/[0-9]/g) !== -1
    this.setState({length, upper, number, size})
  }
  
  render() {
    return (
      <div className='App'>
        <img src={logo} className='logo' alt='logo' />
        <p className='title'>Crie sua conta</p>
        <Input inputName={'Nome Completo'}/>
        <Input inputName={'E-mail'}/>
        <Input inputName={'Senha'} type={'password'} changeHandler={e => this.passwordChanged(e)}/>
        <PasswordStrength length={this.state.length} size={this.state.size} upper={this.state.upper} number={this.state.number} />
        <Input inputName={'Confirme sua senha'} type={'password'}/>
        <Button text='Criar conta' />
      </div>
    );
  }
}

export default App;
