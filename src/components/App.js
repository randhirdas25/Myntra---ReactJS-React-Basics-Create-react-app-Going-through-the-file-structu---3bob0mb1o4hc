import React from 'react'
import '../styles/App.css';
import Navbar from '../components/Navbar';
import Filter from '../components/Filter'
const App = () => {

  return (
    <div id="main">
      <Navbar/>
      <Filter/>
    </div>
  )
}


export default App;
