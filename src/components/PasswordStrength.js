import React, { Component } from 'react'

import './PasswordStrength.css'

class PasswordStrength extends Component {
    render(){
        return (
            <div>
                <div className='bars'>
                    <div className='bar bar-red'></div>
                    <div className='bar'></div>
                    <div className='bar'></div>
                </div>
                <ul className='rules'>
                    <li className='rule rule-red'>Pelo menos 6 caracteres</li>
                    <li className='rule'>Pelo menos 1 letra maiúscula</li>
                    <li className='rule'>Pelo menos 1 número</li>
                </ul>
            </div>
        );
    }
}

export default PasswordStrength;