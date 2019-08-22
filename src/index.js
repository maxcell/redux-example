import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import { Provider } from 'react-redux'

import { store } from './reducer'

// Provider
//  - HOC (Higher-Order Component)
// - The provider needs to know what the value of the store is

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
