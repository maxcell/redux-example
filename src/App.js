import React, { Component } from 'react';

class App extends Component {

  state = {
    likes: 0,
    text: ''
  }

  like = () => {
    this.setState((prevState) => ({
      likes: prevState.likes + 1
    }))
  }

  dislike = () => {
    this.setState((prevState) => ({
      likes: prevState.likes - 1
    }))
  }

  handleChange = (event) => {
    this.setState({
      text: event.target.value
    })
  }


  render(){
    return (
      <div className="App">
        <h4>{this.state.likes} likes!</h4>
        <button onClick={this.like}><span role="img" aria-label="thumbs up">👍</span></button>
        <button onClick={this.dislike}><span role="img" aria-label="thumbs down">👎</span></button>`
        <input type="text" value={this.state.text} onChange={this.handleChange} />
        <p>{this.state.text}</p>
      </div>
    )

  }
}

export default App;
