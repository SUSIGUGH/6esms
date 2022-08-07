import './App.css';
import React from 'react'
import Footer from './components/Footer'
import Header from './components/Header'
import AddMomo from './components/AddMomo';
import ListMomo from './components/ListMomo';


function App() {
  const momolist = [
    {
    id: "1",
    momoname: "Chicken Steam",
    momodescription: "Normal Steam Chicken Momo with Soup and Sauce"
    },
    {
      id: "2",
      momoname: "Chicken Fried",
      momodescription: "Normal Deep Fried Chicken Momo with Sauce"
      },
  ]
  return (
    <div className="App-main">
      <div className="App-header">
        <Header />        
      </div>
      <div className="App-body">
        <div className="App-middle">
          <AddMomo />
        </div>
        <div className="App-middle">
          <ListMomo momolist={momolist}/>
        </div>
      </div>
      <div className="App-footer">
        <Footer />
      </div>
    </div>
 
  );
}

export default App;
