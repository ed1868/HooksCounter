import logo from './logo.svg';
import './App.css';

import React from 'react';
// Don't modify this line. It is here to make React
// work correctly in this exercise environment.
const useState = React.useState;

// don't change the Component name "App"
export default function App() {
  
  const [counter,setCounter] = useState(null);

    const onButtonClick = () => {
   console.log('entro')
      setCounter(counter + 1);      
    };
    
    return (
        <div>
            <button onClick={onButtonClick}>Click Me!</button>
            
            <h1>Current Count: {counter}</h1>
        </div>
    );
}
