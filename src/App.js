import './App.css';
import React from 'react'
import Header from './components/Header'
import OrderMomo from './components/OrderMomo'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ListMomo from './components/ListMomo';
import AddMomo from './components/AddMomo';
import Footer from './components/Footer';
import RegisterUser from './components/RegisterUser'


function App() {
 
  return (
    <div>
      <Router>
      <Header /> 
      <Routes>
      <Route path="/ordermomo" element={ <OrderMomo /> } momos={'ABC'}/>
      <Route path="/listmomo" element={ <ListMomo /> } />
      <Route path="/" element={ <OrderMomo /> } />
      <Route path="/addmomo" element={ <AddMomo />} />
      <Route path="/register" element={ <RegisterUser />} />
        
        </Routes>
        </Router>
      <Footer />
    </div>
 
  );
}

export default App;
