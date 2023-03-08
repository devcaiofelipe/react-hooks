/* eslint-disable no-unused-vars */
import './App-useReducerEuseContext.css';
import { useReducer, createContext, useContext } from 'react';
import P from 'prop-types';

const globalState = {
  title: 'O titulo do contexto',
  body: 'O body do contexto',
  counter: 0,
};

const actions = {
  CHANGE_TITLE: 'CHANGE_TITLE',
};

export const reducer = (state, action) => {
  switch (action.type) {
    case actions.CHANGE_TITLE:
      return { ...state, title: action.payload.newTitle };
  }
  return { ...state };
};

export const Context = createContext();
export const AppContext = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, globalState);
  const changeTitle = (newTitle) => {
    dispatch({ type: actions.CHANGE_TITLE, payload: { newTitle: newTitle } });
  };
  return <Context.Provider value={{ state, changeTitle }}>{children}</Context.Provider>;
};

AppContext.propTypes = {
  children: P.node,
};

export const H1 = () => {
  const context = useContext(Context);
  return <h1 onClick={() => context.changeTitle('titulo 2')}>{context.state.title}</h1>;
};

function App() {
  return (
    <AppContext>
      <div>
        <H1></H1>
      </div>
    </AppContext>
  );
}

export default App;
