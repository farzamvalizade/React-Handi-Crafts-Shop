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
import ForgetPassword from './components/Forget';
import PasswordResetConfirmation from './components/PasswordResetConfrimation';
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
import ProductCheckout from './components/CheckOut';
function AppContent() {
  const location = useLocation();
  const hideNavAndFooter1 = location.pathname === '/login';
  const hideNavAndFooter2 = location.pathname === '/signup';
  const hideNavAndFooter3 = location.pathname === '/forget';
  const hideNavAndFooter4 = location.pathname === '/confrim';

  return (
    <>
      {!hideNavAndFooter1 && !hideNavAndFooter2 && !hideNavAndFooter3 && !hideNavAndFooter4 && <Nav />}
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
        <Route path='/forget' element={<ForgetPassword />}></Route>
        <Route path='/confrim' element={<PasswordResetConfirmation />}></Route>
        <Route path='/checkout' element={<ProductCheckout />}></Route>
        
      </Routes>
      {!hideNavAndFooter1 && !hideNavAndFooter2 && !hideNavAndFooter3 && !hideNavAndFooter4 && <Footer />}
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



