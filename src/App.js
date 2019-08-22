import React, { Component } from 'react';

import './App.css'

class App extends Component {

  state = {
    darkMode: false,
    likes: 0,
    text: ''
  }

  dispatch = (type, data) => {
    // Dispatch an action and tell our app how to change
    const newState = this.reducer(type, data)
    this.setState(newState)
  }

  // Type will represent what action we want to perform
  reducer = (type, payload) => {

    let newState;

    // Tell my newState variable to be the new values of state
    // Then at the end call setState
    switch(type) {
      case "DARK_MODE":
        // we're going to tell our app how to change state
        newState = {
          ...this.state,
          darkMode: !this.state.darkMode 
        }
      break;
      case "LIKE":
        newState = {
          ...this.state,
          likes: this.state.likes + 1
        }
        break;
      case "DISLIKE":
          newState = {
            ...this.state,
            likes: this.state.likes - 1
          }
        break;
      case "INPUT_CHANGE":
        // We need to change our state but only one part of it
        // just the text
        newState = {
          ...this.state,
          text: payload
        }
        break;
      default:
        newState = this.state
        break;
    }


    return newState
  }

  // darkness = () => {
  //   this.setState((prevState) => ({
  //     darkMode: !prevState.darkMode
  //   }))
  // }

  // like = () => {
    // this.setState((prevState) => ({
    //   likes: prevState.likes + 1
    // }))
  // }

  // dislike = () => {
    // this.setState((prevState) => ({
    //   likes: prevState.likes - 1
    // }))
  // }

  // handleChange = (event) => {
  //   // this.setState({
  //   //   text: event.target.value
  //   // })
  // }


  render(){
    return (
      <div className={"App" + (this.state.darkMode ? " dark" : "")}>
        <button onClick={() => this.dispatch("DARK_MODE")}>Dark mode</button>
        <h4>{this.state.likes} likes!</h4>
        <button onClick={() => this.dispatch("LIKE")}><span role="img" aria-label="thumbs up">👍</span></button>
        <button onClick={() => this.dispatch("DISLIKE")}><span role="img" aria-label="thumbs down">👎</span></button>`
        <input type="text" value={this.state.text} onChange={(e) => this.dispatch("INPUT_CHANGE", e.target.value)} />
        <h3>{this.state.text}</h3>
      </div>
    )

  }
}

export default App;
