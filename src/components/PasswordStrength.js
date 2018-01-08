import React, { Component } from 'react'

import './PasswordStrength.css'

var classNames = require('classnames')

class PasswordStrength extends Component {
    render(){
        const {length, upper, number, size} = this.props

        const sum = number+upper+length;

        //Add style according to filters
        const rule = (rule, size) => classNames(
            'rule',
            {'rule-red': (rule === false && size > 0)},
            {'rule-green': rule === true},
        )
        
        const bar = (sum, position) => classNames(
            'bar',
            {'bar-red': (sum === 1 && position <= 1)? true:false},
            {'bar-yellow': (sum === 2 && position <= 2)? true:false},
            {'bar-green': (sum === 3)? true:false}
        )

        const bar1 = bar(sum, 1)
        const bar2 = bar(sum, 2)
        const bar3 = bar(sum, 3)

        const ruleLength = rule(length, size)
        const ruleUpper = rule(upper, size)
        const ruleNumber = rule(number, size)

        return (
            <div>
                <div className='bars'>
                    <div className={bar1}></div>
                    <div className={bar2}></div>
                    <div className={bar3}></div>
                </div>
                <ul className='rules'>
                    <li className={ruleLength}>Pelo menos 6 caracteres</li>
                    <li className={ruleUpper}>Pelo menos 1 letra maiúscula</li>
                    <li className={ruleNumber}>Pelo menos 1 número</li>
                </ul>
            </div>
        );
    }
}

export default PasswordStrength
