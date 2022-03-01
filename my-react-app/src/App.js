import logo from './logo.svg';
import './App.css';
import {
    useState,
    useCallback,
    useMemo,
    useReducer,
    useRef,
    useContext,
    createContext,
    useEffect
} from 'react'

import { Route, Routes } from 'react-router-dom';
import Content from './Components/Content';
import LayoutPage from './pages/Layout';
import BlogsPage from './pages/Blogs.jsx';
import ContactPage from './pages/Contact';
import HomePage from './pages/Home';
import NoPage from './pages/NoPage';

function App() {
    const [number, setNumber] = useState(0);

    useEffect(()=> {
        setInterval(()=> {
            console.log(number);
            setNumber(pre => pre +1);
        },1000)
    },[]);

    return (
        // <Routes>
        //     <Route path='/' element= {<LayoutPage />}>
        //         <Route index element= {<HomePage />} />
        //         <Route path="blogs"  element= {<BlogsPage />} />
        //         <Route path="contact"  element= {<ContactPage />} />
        //         <Route path="*"  element= {<NoPage />} />
        //     </Route>
        // </Routes>
        // <Content />
        <div style={{
            fontSize: 100
        }}>
            {number}
        </div>
    )
   
}

export default App;
