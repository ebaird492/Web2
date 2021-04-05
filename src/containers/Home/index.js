import React, { Component } from 'react'
import './index.css'
import colorado from './colorado.png'

class Home extends Component {
  render() {
    return (
      <div className="Main-Page">
        <h className="Main-Header">
          Hello World!
        </h>
        <img src={colorado} className="Main-Colorado" alt="Colorado"></img>
      </div>
    )
  }
}

export default Home
