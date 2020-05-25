import React, { Component } from 'react'

export class Form extends Component {

    state = {
        name: ''
    }

    handleChange = (event) => {
        console.log(event.target.value)
        this.setState({
            name: event.target.value
        })
    }

    render() {
        return (
            <div>
                <p>Form 101</p>
                <input 
                value={this.state.name}
                onChange={this.handleChange}
                />
            </div>
        )
    }
}

export default Form
