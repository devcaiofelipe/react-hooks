/* eslint-disable no-unused-vars */
import './App-useReducer.css';
import { useReducer } from 'react';

const globalState = {
  title: 'O titulo do contexto',
  body: 'O body do contexto',
  counter: 0,
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'muda': {
      console.log('chamou acao muda');
      return { ...state, title: action.payload };
    }
    case 'invert': {
      console.log('chamou acao invert');
      const { title } = state;
      return { ...state, title: title.split('').reverse().join('') };
    }
  }
  console.log('Nenhuma action found');
  return { ...state };
};

function App() {
  const [state, dispatch] = useReducer(reducer, globalState);
  const { counter, title, body } = state;
  return (
    <div>
      <h1>
        {title} {counter} {body}
      </h1>
      <button onClick={() => dispatch({ type: 'muda', payload: new Date().toLocaleDateString('pt-BR') })}>Click</button>
      <button onClick={() => dispatch({ type: 'invert' })}>Invert</button>
      <button onClick={() => dispatch({ type: '' })}>No action</button>
    </div>
  );
}

export default App;
