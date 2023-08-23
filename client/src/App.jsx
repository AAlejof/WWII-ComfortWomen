import { Route, Routes, useLocation } from 'react-router-dom';
import Home from './components/Home/Home';
import Footer from './components/Footer/Footer';
import Dashboard from './components/Dashboard/Dashboard';
import Navbar from './components/Navbar/Navbar';
import './App.css';

function App() {
  const location = useLocation();
  const { pathname } = location;

  const boolAddComponent =
    pathname === '/' ||
    pathname === '/inicio';

  return (
    <>
      <div className="App">

        {boolAddComponent && <Navbar />}

        <Routes>
          <Route path={'/'} element={<Home />}/>
          <Route path={'/admin'} element={<Dashboard />}/>
        </Routes>

        {boolAddComponent && <Footer />}
      </div>

    </>
  )
}

export default App;