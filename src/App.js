import React, { Component } from 'react'
import './App.css';
import Footer from './Components/Footer/Footer.jsx';


class App extends Component {
  
  render(){
  return (
    <div className="App">
      <h1>this is a react footer template</h1> {/* remove this line to use footer */}
      <Footer />
    </div>
  );
}
}

export default App;
