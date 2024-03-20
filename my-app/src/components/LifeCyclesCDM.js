import React, { Component } from 'react'

export class LifeCyclesCDM extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         data: 'loading..'
      }
    }

  getData(){
    setTimeout(()=>{
        
    })
  }

  render() {
    return (
      <div>
        <h1>L{this.state.data}</h1>
      </div>
    )
  }
}

export default LifeCyclesCDM