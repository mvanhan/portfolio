import './App.css';
import MyLinkedin from './components/li_button';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from './pages/About';
import Projects from './pages/Projects';
import NavBar from './components/NavBar';
import Home from './components/Home';

function App() {
  return (
    <>
        <Router> 
            <NavBar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/projects" element={<Projects />} />
            </Routes>
        </Router>
    </>
  );

}

export default App;
