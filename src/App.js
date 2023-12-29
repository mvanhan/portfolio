import './App.css';
import MyLinkedin from './components/li_button';

function App() {
  return (
    <>
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
                    <a href="https://directory-social.vercel.app/" style={{ fontSize: '25px' }}>Directory-Social</a>
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
