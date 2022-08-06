import './App.css';
import React from 'react'
import Footer from './components/Footer'
import Header from './components/Header'
import Middle from './components/Middle';


function App() {
  return (
    <div className="App-main">
      <div className="App-header">
        <Header />        
      </div>
      <div className="App-body">
        <div className="App-middle">
          <Middle />
        </div>
      </div>
      <div className="App-footer">
        <Footer />
      </div>
    </div>
 
  );
}

export default App;
