import logo from './logo.svg';
import './App.css';
import {
    useState,
    useCallback,
    useMemo,
    useReducer,
    useRef,
    useContext,
    createContext
} from 'react'
import Content from './Content'

// function App() {
//     const [counter, setCounter] = useState(1);

//     const handleIncreasing = () => {
//         setCounter(preCounter => preCounter +1);
//         setCounter(preCounter => preCounter +1);
//         setCounter(preCounter => preCounter +1);
//     }

//     return (
//         <div className="App" style={{padding: 20}}>
//             <h1>{counter}</h1>
//             <button onClick={handleIncreasing}>Increase</button>
//         </div>
//     );
// }
function App() {

    const [show, setShow] = useState(false);

    return (
        <div id='App' style={{padding: 40}}>
            <button onClick={() => setShow(!show)}>Show/Hide</button>
            {show && <Content />}
        </div>
    )
   
}

export default App;
