import { createStore } from 'redux'


const initialState = {
  darkMode: false,
  likes: 0,
  text: ''
}

// Type will represent what action we want to perform
const reducer = (state = initialState, action) => {

  let newState;

  // Tell my newState variable to be the new values of state
  // Then at the end call setState
  switch(action.type) {
    case "DARK_MODE":
      // we're going to tell our app how to change state
      newState = {
        ...state,
        darkMode: !state.darkMode 
      }
    break;
    case "LIKE":
      newState = {
        ...state,
        likes: state.likes + 1
      }
      break;
    case "DISLIKE":
        newState = {
          ...state,
          likes: state.likes - 1
        }
      break;
    case "INPUT_CHANGE":
      // We need to change our state but only one part of it
      // just the text
      newState = {
        ...state,
        text: action.payload
      }
      break;
    default:
      newState = state
      break;
  }


  return newState
}

export const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())