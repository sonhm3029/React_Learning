import logo from './logo.svg';
import './App.css';

import {useState} from 'react'

function App() {
    const [counter, setCounter] = useState(1);

    const handleIncreasing = () => {
        setCounter(preCounter => preCounter +1);
        setCounter(preCounter => preCounter +1);
        setCounter(preCounter => preCounter +1);
    }

    return (
        <div className="App" style={{padding: 20}}>
            <h1>{counter}</h1>
            <button onClick={handleIncreasing}>Increase</button>
        </div>
    );
}



export default App;
