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

import { Route, Routes } from 'react-router-dom';
import Content from './Components/Content';
import LayoutPage from './pages/Layout';
import BlogsPage from './pages/Blogs';
import ContactPage from './pages/Contact';
import HomePage from './pages/Home';
import NoPage from './pages/NoPage';

function App() {

    return (
        <Routes>
            <Route path='/' element= {<LayoutPage />}>
                <Route index element= {<HomePage />} />
                <Route path="blogs"  element= {<BlogsPage />} />
                <Route path="contact"  element= {<ContactPage />} />
                <Route path="*"  element= {<NoPage />} />
            </Route>
        </Routes>
    )
   
}

export default App;
