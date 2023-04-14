import Header from "./Components/Header";
import logo from './assets/logo.svg';
import './App.css';
import Profile from './pages/Profile';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Header logo={logo}/>
                <Routes>
                    <Route
                        path='/'
                        element={<Profile userName='pengibot'/>}
                    />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
