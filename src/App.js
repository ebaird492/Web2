import React, { Component } from 'react'
import { ApolloProvider } from 'react-apollo'
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import './index.css'
import theme from './theme'
import client from './client'
import Home from './containers/Home/'
import Ethan from './containers/Ethan/'

class App extends Component {
  render() {
    return (
      <Router>
        <ThemeProvider theme={theme}>
          <ApolloProvider client={client}>
            <div className="App">
              <div className="NavBar">
                <a href="/">Home</a>
                <a href="/Ethan-Baird">Ethan</a>
              </div>
              <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/Ethan-Baird" component={Ethan} />
              </Switch>
            </div>
          </ApolloProvider>
        </ThemeProvider>
      </Router>
    )
  }
}

export default App
