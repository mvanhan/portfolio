import './App.css';
import MyLinkedin from './components/li_button';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import About from './pages/About';
import Projects from './pages/Projects';

function App() {
  return (
    <>
        {/* <BrowserRouter> */}
            {/* <Routes>
                <Route index element = {<App/>} />
                <Route path="/about" element= {<About/>}/> 
                <Route path="/projects" element= {<Projects/>}/>
            </Routes> */}
        {/* </BrowserRouter> */}
        <div style={{ color: 'white', textAlign: 'right', fontSize: '22px'}}>
            Walter Miller Van Hanken
            <br></br>
            Tulsa, Oklahoma
            <br></br>
            UNC Chapel Hill, 2nd-Year
            <br></br>
            email: mvanhanken@gmail.com
            <br></br>
            mobile: (918) 703-3547
        </div> 
        <div className='flex' style={{ color: 'white', textAlign: 'right', fontSize: '22px', justifyContent: 'right' }}>
          Linkedin: <MyLinkedin/>
        </div>
        <div className="box">
            <div className="pad">
                <div className="center">
                    <div className="text-box">
                        <h1>PROJECTS</h1>
                    </div>
                </div>
                <br />
                <div className="center">
                    <a href="https://directory-social-git-main-mvanhans-projects.vercel.app/" style={{ fontSize: '25px' }}>Directory-Social</a>
                </div>
                <br />
                <div className="center">
                    <div className="text-box">
                        <h1>ABOUT ME</h1>
                    </div>
                </div>
            </div>
        </div>
    </>
  );
}

export default App;
