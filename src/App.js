import './App.css';
import React from 'react'
import Footer from './components/Footer'
import Header from './components/Header'
import AddMomo from './components/AddMomo';


function App() {
  return (
    <div className="App-main">
      <div className="App-header">
        <Header />        
      </div>
      <div className="App-body">
        <div className="App-middle">
          <AddMomo />
        </div>
      </div>
      <div className="App-footer">
        <Footer />
      </div>
    </div>
 
  );
}

export default App;
