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
        <div className="Navbar">
          <a className="Ethan-Link" href='/Ethan-Baird'>Link 1</a>
          <a className="Ethan-Link" href='/Ethan-Baird'>Link 2</a>
        </div>
        <img src={colorado} className="Main-Colorado" alt="Colorado"></img>
      </div>
    )
  }
}

export default Home
