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
import ProtectedRoute from '../src/utils/ProtectedRout';
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
      <Route path="/login" element={<AuthCheck><LoginPage /></AuthCheck>} />
      <Route path="/register" element={<AuthCheck><Registration/></AuthCheck>} />
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='/home' element={<Home />} />
          <Route path='/product' element={<ProtectedRoute><Product /></ProtectedRoute>} />
          <Route path="/about" element={<ProtectedRoute><About /></ProtectedRoute>} />
          <Route path="/news" element={<ProtectedRoute><News /></ProtectedRoute>} />
          <Route path="/flightdetails" element={<ProtectedRoute><FlightDetails /></ProtectedRoute>} />
          <Route path='/one' element={<ProtectedRoute><One/></ProtectedRoute>}/>
          <Route path='/two' element={<ProtectedRoute><Two/></ProtectedRoute>}/>
          <Route path='/three' element={<ProtectedRoute><Three/></ProtectedRoute>}/>
          <Route path='/four' element={<ProtectedRoute><Four/></ProtectedRoute>}/>
          <Route path='/five' element={<ProtectedRoute><Five/></ProtectedRoute>}/>
          <Route path='/six' element={<ProtectedRoute><Six/></ProtectedRoute>}/>
          <Route path='/seven' element={<ProtectedRoute><Seven/></ProtectedRoute>}/>
          <Route path='/eight' element={<ProtectedRoute><Eight/></ProtectedRoute>}/>
          <Route path='/nine' element={<ProtectedRoute><Nine/></ProtectedRoute>}/>
          <Route path='/ten' element={<ProtectedRoute><Ten/></ProtectedRoute>}/>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;