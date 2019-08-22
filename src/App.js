import React, { Component } from 'react';
import { connect } from 'react-redux'

import './App.css'

class App extends Component {

  render(){
    return (
      <div className={"App" + (this.props.darkMode ? " dark" : "")}>
        <button onClick={() => this.props.dispatch({type: "DARK_MODE"})}>Dark mode</button>
        <h4>{this.props.likes} likes!</h4>
        <button onClick={() => this.props.dispatch({type: "LIKE"})}><span role="img" aria-label="thumbs up">👍</span></button>
        <button onClick={() => this.props.dispatch({type: "DISLIKE"})}><span role="img" aria-label="thumbs down">👎</span></button>`
        <input type="text" value={this.props.text} onChange={(e) => this.props.dispatch({type: "INPUT_CHANGE", payload: e.target.value})} />
        <h3>{this.props.text}</h3>
      </div>
    )

  }
}

const mapStateToProps = (state) => {
  return state
}

// Because it needs to know what data to bring back
// To this component
export default connect(mapStateToProps)(App);
