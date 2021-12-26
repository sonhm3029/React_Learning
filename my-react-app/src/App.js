import logo from './logo.svg';
import './App.css';

import {useState} from 'react'

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

    const [work, setWork] = useState('');
    const [listWorks, setListWorks] = useState(()=>{
        return JSON.parse(localStorage.getItem('works')) ??[];
    });


    const addWork = () => {
        setListWorks( pre => {
            const newListWorks = [...pre, work]
            localStorage.setItem('works', JSON.stringify(newListWorks));
            return newListWorks;
        });
        setWork('');
    }

    return (
        <div id='App' style={{padding:32}}>
            <input
                value={work}
                onChange={e => setWork(e.target.value)}
            />
            <button onClick={addWork}>Thêm</button>
            <ul>
                {listWorks.map( (item,index) => {
                    return (
                        <li key={index}>{item}</li>
                    )
                })}
            </ul>
        </div>
    )
}



export default App;
