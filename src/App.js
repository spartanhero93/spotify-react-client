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
      this.setState({ dataRendered: true })
      this.renderHTML(await data)
    } catch (error) {
      console.error(error)
    }
  }

  renderHTML = html => {
    if (html) {
      return html
    } else {
      return <h1>Loading...</h1>
    }
  }

  render() {
    console.log(this.state.dataRendered)
    return (
      <div className='App'>
        <h1>Spotify App</h1>
        {this.state.dataRendered ? <h1>Data loaded</h1> : <h1>Data loading</h1>}
        <div>
          <button onClick={this.handleRequest}>Authorize</button>
        </div>

        {this.renderHTML()}
      </div>
    )
  }
}

export default App
