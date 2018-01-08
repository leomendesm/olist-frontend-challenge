import React from 'react'
import './Input.css';

class Input extends React.Component {
    render(){
        return (
            <div className='form-control'>
                <label className='label' htmlFor={this.props.inputName}>{this.props.inputName}</label>
                <input className='input' id={this.props.inputName} type={this.props.type} name={this.props.inputName}/>
            </div>
        )
    }
} 
Input.defaultProps = {
    inputName: '',
    type: 'text'
}
export default Input
