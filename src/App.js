// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;


import React from 'react';
import { BrowserRouter as Router, Route,Link, Routes, useLocation } from 'react-router-dom';
import Home from './components/Home';
import Nav from './components/Nav';
import About from './components/About';
import Contact from './components/Contact';
import AllProduct from './components/All';
import Shop from './components/Shop';
import UserProfile from './components/Profile';
import SignUp from './components/Register';
import Footer from "./components/Footer";
import Login from './components/Login';
import ImageList from './components/Ostans';
function AppContent() {
  const location = useLocation();
  const hideNavAndFooter1 = location.pathname === '/login';
  const hideNavAndFooter2 = location.pathname === '/signup';

  return (
    <>
      {!hideNavAndFooter1 && !hideNavAndFooter2 && <Nav />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path='/ostans' element={<ImageList />} />
        <Route path="/products" element={< AllProduct/>} />
        <Route path='/shop' element={<Shop />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/profile' element={<UserProfile />}></Route>
      </Routes>
      {!hideNavAndFooter1 && !hideNavAndFooter2 && <Footer />}
    </>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
};
export default App;



