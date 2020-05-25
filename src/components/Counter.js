import React, { Component } from 'react'

export class Counter extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             count: props.initialCount
        }
    }
    
    clickHandle = () => {
        this.setState({
            count: this.state.count + 1
        })
    }

    clickHandle2 = () => {
        this.setState({
            count: this.state.count - 1
        })
    }

    render() {
        return (
            <div>
                <div>Count: {this.state.count}</div>
                <button onClick={this.clickHandle}>Increment</button>
                <button onClick={this.clickHandle2}>Decrement</button>
            </div>
        )
    }
}

export default Counter
