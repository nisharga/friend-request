import React, { } from 'react';
import './App.css';  
import Breadcrumb from './Component/BreadCramb';
// import Nav from './Component/Nav';
import Carousel from './Component/Carousels';



function App() {
  return (
    <div className="App">
      <h1 className='display-3'>React Boostrap</h1>
      <Breadcrumb></Breadcrumb>
      <hr></hr>
      <Carousel></Carousel>
      <hr></hr>
    
    </div>
  );
}

export default App;
