import React, { useReducer } from "react";
import "./App.css";

//reducer
import { initialState, reducer } from "./reducers/reducer";
//form
import Form from "./components/Form";
//Import item
import Item from "./components/Item";

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div className="App">
      <Form dispatch={dispatch} />
      {state.map(item => {
        return <Item key={item.id} item={item} dispatch={dispatch} />;
      })}
    </div>
  );
}

export default App;
