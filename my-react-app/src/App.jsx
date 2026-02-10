import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from "./header.jsx"
import Footer from "./footer.jsx"
import Food from "./food.jsx"
function App() {
  return (
    <div>
      <>
      <Header/>
      <Food/>
      <Footer/>
      </>
    </div>
  );  
}

export default App
