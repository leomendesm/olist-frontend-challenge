import React, {Component} from 'react'
import './Input.css';

class Input extends Component {
    render(){
        return (
            <div className='form-control'>
                <label className='label' htmlFor={this.props.inputName}>{this.props.inputName}</label>
                <input className='input' id={this.props.inputName} onChange={this.props.changeHandler} type={this.props.type} name={this.props.inputName}/>
            </div>
        )
    }
} 
Input.defaultProps = {
    inputName: '',
    type: 'text'
}
export default Input
