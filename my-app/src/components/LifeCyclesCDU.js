import React, { Component } from 'react'
import LifeCyclesCDUChild from './LifeCyclesCDUChild'

export class LifeCyclesCDU extends Component {
    constructor(props) {
        console.log('constructor called')
      super(props)
    
      this.state = {
         greeting: 'hello'
      }
    }

updateGreeting = () => {
    console.log('UPDATEgreeting called')
    this.setState(prevState => {
        return {
            greeting: prevState.greeting === 'hello' ? 'Goodbye' : 'hello'
        }
    })
}

componentDidUpdate() {
    console.log('component updated')
}

  render() {
    console.log('render method called')
    return (
      <div>
        <h1>{this.state.greeting}</h1>
        <button onClick={this.updateGreeting}>Update Greeting</button>
        <LifeCyclesCDUChild parentGreeting={this.state.greeting} />
      </div>
    )
  }
}

export default LifeCyclesCDU