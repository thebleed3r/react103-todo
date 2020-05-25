import React from 'react';
import './App.css';

import Body from './components/Body'
import Header from './components/Header'
import Counter from './components/Counter'
import Slider from './components/Slider'
import Form from './components/Form'


class App extends React.Component{
  state = {
    visible: true
  }

  render() {

    const buttonText = this.state.visible ? "hide" : "show"
    const slider = this.state.visible ? <Slider /> : <p>Slider hidden</p>

    return (
      <div className="App">
        {/* <Header 
        title="Hello from the depths of React !" 
        />
        <Body text="Hello from the other side !"/>
        <Counter initialCount={0}/>
        {slider}
        <button
          onClick={() => {
            this.setState({ visible: !this.state.visible })
          }}>
          {buttonText}
        </button> */}

        <Form />
      </div>
    );
  }
  }

export default App;
