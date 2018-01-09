import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import Input from './../components/input/Input';
import Button from './../components/button/Button';
import PasswordStrength from './../components/passwordStrength/PasswordStrength';

import './../components/form/Form.css';

storiesOf('Input', module)
  .add('without params', () => <Input />)
  .add('with inputName test as params', () => <Input inputName='test'/>)
  .add('with type password as params', () => <Input type='password'/>)
  .add('with type password and inputName test as params', () => <Input inputName='test' type='password'/>)
  .add('with inputName test and changeHandler console.log as params', () => <Input inputName='test' changeHandler={action('changed')}/>)

storiesOf('Button', module)
  .add('without params', () => <Button />)
  .add('with inputName test as params', () => <Button text='test'/>)
  .add('with some emoji', () => <Button text='😀 😎 👍 💯'/>)

storiesOf('PasswordStrength', module)
  .add('without params', () => <PasswordStrength />)
  .add('without any rules accepted', () => <PasswordStrength length={false} upper={false} number={false} size={1}/>)
  .add('with only one rule accepted', () => <PasswordStrength length={true} upper={false} number={false} size={1}/>)
  .add('with two rules accepted', () => <PasswordStrength length={true} upper={true} number={false} size={1}/>)
  .add('with three rules accepted', () => <PasswordStrength length={true} upper={true} number={true} size={1}/>)
