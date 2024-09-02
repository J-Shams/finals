import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from './layout/layout';
import Home from './pages/home/home';
import About from './pages/about/about';
import News from './pages/news/news';
import Product from './pages/product/product';
import FlightDetails from './pages/FlightDetails/FlightDetails';
import LoginPage from './LoginPage';
import AuthCheck from './utils/AuthCheck';
import Protectedroute from '../src/utils/ProtectedRout';
import Registration from './registerPage';
import One from './pages/one/one';
import Two from './pages/two/two';
import Three from './pages/three/three';
import Four from './pages/four/four';
import Five from './pages/five/five';
import Six from './pages/six/six';
import Seven from './pages/seven/seven';
import Eight from './pages/eight/eight';
import Nine from './pages/nine/nine';
import Ten from './pages/ten/ten';

const App = () => {
  return (
    <Router>
      <Routes>
      {/* <Route path="/login" element={<AuthCheck><LoginPage /></AuthCheck>} /> */}
      {/* <Route path="/register" element={<AuthCheck><Registration/></AuthCheck>} /> */}
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='/home' element={<Home />} />
          <Route path='/product' element={<Product />} />
          <Route path="/about" element={<About />} />
          <Route path="/news" element={<News />} />
          <Route path="/flightdetails" element={<FlightDetails />} />
          <Route path='/one' element={<One/>}/>
          <Route path='/two' element={<Two/>}/>
          <Route path='/three' element={<Three/>}/>
          <Route path='/four' element={<Four/>}/>
          <Route path='/five' element={<Five/>}/>
          <Route path='/six' element={<Six/>}/>
          <Route path='/seven' element={<Seven/>}/>
          <Route path='/eight' element={<Eight/>}/>
          <Route path='/nine' element={<Nine/>}/>
          <Route path='/ten' element={<Ten/>}/>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;