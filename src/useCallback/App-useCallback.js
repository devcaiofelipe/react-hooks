import './App-useCallback.css';
import React, { useState, useCallback } from 'react';
import P from 'prop-types';

const Button = React.memo(function Button({ incrementButton }) {
  console.log('b');
  return <button onClick={() => incrementButton(10)}>+</button>;
});

Button.propTypes = {
  incrementButton: P.func,
};

function App() {
  const [counter, setCounter] = useState(0);

  const incrementCounter = useCallback((num) => {
    setCounter((counter) => {
      console.log(counter);
      return counter + num;
    });
  }, []);

  console.log('a');
  return (
    <div className="App">
      <p>Teste 3</p>
      <h1>C1: {counter.caio}</h1>
      <Button incrementButton={incrementCounter}>+</Button>
    </div>
  );
}

export default App;
