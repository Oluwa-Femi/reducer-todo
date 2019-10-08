import React, {useReducer} from 'react';
import './App.css';

//reducer
import {initialState, reducer} from "./reducers/reducer"

function App() {
  const [state, dispatch] = useReducer(reducer, initialState)
  return (
    <div className="App">
      {state.map(item => {
        return <p>{item.item}</p>
      })}
    </div>
  );
}

export default App;
