/* eslint-disable no-unused-vars */
import './App-useContext.css';
import { useState, useContext, createContext } from 'react';

const globalState = {
  title: 'O titulo do contexto',
  body: 'O body do contexto',
  counter: 0,
};

const GlobalContext = createContext();

// eslint-disable-next-line
const Div = ({ children }) => {
  return (
    <>
      <H1>Oi</H1>
      <P />
    </>
  );
};

const H1 = () => {
  const theContext = useContext(GlobalContext);
  return <h1>{theContext.title}</h1>;
};

const P = () => {
  const theContext = useContext(GlobalContext);
  return <p>{theContext.body}</p>;
};

function App() {
  return (
    <GlobalContext.Provider value={globalState}>
      <Div />
    </GlobalContext.Provider>
  );
}

export default App;
