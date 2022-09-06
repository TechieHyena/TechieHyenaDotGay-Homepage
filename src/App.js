import './App.css';
import NavBar from './components/NavBar';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import About from './pages/about';
import Projects from './pages/projects';
import Sitemap from './pages/sitemap';
import styled from 'styled-components';

function App() {
  return (
    <Router>
      <div className="App">
      <div id="background"></div>
      <div id="foreground">
        <div id="content">
          <NavBar />
          <Columns>
            <Routes>
              <Route path='/' element={<About/>}></Route>
              <Route path='/projects' element={<Projects/>}></Route>
              <Route path='/sitemap' element={<Sitemap/>}></Route>
            </Routes>
            <div style={{width: '100%', aspectRatio: '1'}}>
              <img className='prevent-select' style={{width: '100%', borderRadius: '50%'}} src="TechieHyena.png" alt="" />
            </div>
          </Columns>
        </div>
      </div>
    </div>
    </Router>
  );
}

const Columns = styled.div`
  display: grid;
  grid-template-columns: 3fr 1fr;

  & > div {
    padding: 10px;
  }
`

export default App;
