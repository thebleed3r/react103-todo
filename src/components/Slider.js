import React, { Component } from 'react'

export class Slider extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             images: [
                 "https://picsum.photos/200/300",
                 "https://picsum.photos/200/300",
                 "https://picsum.photos/200/300",
                 "https://picsum.photos/200/300"
             ],
             idx: 0
        }
    }
    
    handleNext = () => {
        this.setState({
            idx: this.state.idx + 1
        },
        () => {
            console.log(this.state)
        }
        )
    }


    render() {
        return (
            <div>
                <button onClick={() => {
                    this.setState({
                        idx: this.state.idx - 1
                    })
                }}>Previous</button>
                <img 
                style={{borderRadius: 10, marginTop: 100}}
                src={this.state.images[this.state.idx]} />
                <button onClick={this.handleNext}>Next</button>
            </div>
        )
    }
}

export default Slider
