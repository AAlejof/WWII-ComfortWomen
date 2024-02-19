import { Route, Routes, useLocation } from 'react-router-dom';
import Home from './components/Home/Home';
import Footer from './components/Footer/Footer';
import Dashboard from './components/Dashboard/Dashboard';
import Navbar from './components/Navbar/Navbar';
import Blog from './components/Blog/Blog'
import './App.css';
import axios, { all } from "axios";

axios.defaults.baseURL = "http://localhost:3001";

function App() {
  const location = useLocation();
  const { pathname } = location;

  const boolAddComponent =
    pathname === '/' ||
    pathname === '/blog' ||
    pathname === '/admin';


  return (
    <>
      <div className="App">

        {boolAddComponent && <Navbar />}

        <Routes>
          <Route path={'/'} element={<Home />}/>
          <Route path={'/blog'} element={<Blog />}/>
          <Route path={'/admin'} element={<Dashboard />}/>
        </Routes>

        {boolAddComponent && <Footer />}
      </div>

    </>
  )
}

export default App;