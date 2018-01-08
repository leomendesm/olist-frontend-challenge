import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Input from './components/Input';
import Button from './components/button/Button';
import PasswordStrength from './components/PasswordStrength';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <img src={logo} className='logo' alt='logo' />
        <p className='title'>Crie sua conta</p>
        <Input inputName={'Nome Completo'}/>
        <Input inputName={'E-mail'}/>
        <Input inputName={'Senha'} type={'password'}/>
        <PasswordStrength />
        <Input inputName={'Confirme sua senha'} type={'password'}/>
        <Button text='Criar conta' />
      </div>
    );
  }
}

export default App;
