import React from 'react'
import './Input.css';

const Input = ({inputName,changeHandler, type}) => (
    <div className='form-control'>
        <label className='label' htmlFor={inputName}>{inputName}</label>
        <input className='input' id={inputName} onChange={changeHandler} type={type} name={inputName} />
    </div>
)


Input.defaultProps = {
    inputName: '',
    type: 'text'
}

export default Input
