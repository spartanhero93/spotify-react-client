import React, { Component } from 'react'
import axios from 'axios'

class App extends Component {
  state = {
    dataRendered: false,
  }

  handleRequest = async () => {
    try {
      const { data } = await axios.get(`http://localhost:3001/api`)
      console.log(data)
    } catch (error) {
      console.error(error)
    }
  }

  render() {
    console.log(this.state.dataRendered)
    return (
      <div className='App'>
        <h1>Spotify App</h1>
        <a href='http://localhost:3001'>Log in</a>
      </div>
    )
  }
}

export default App
