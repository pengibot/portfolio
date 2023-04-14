import Header from "./Components/Header";
import logo from './assets/logo.svg';
import './App.css';
import Profile from './pages/Profile';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Projects from './pages/Projects';
import ProjectDetail from './pages/ProjectDetail';

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
                    <Route
                        path='/projects'
                        element={<Projects userName='pengibot'/>}
                    />
                    <Route
                        path='/projects/:name'
                        element={<ProjectDetail userName='pengibot'/>}
                    />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
