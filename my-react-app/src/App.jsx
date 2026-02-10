import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from "./header.jsx"
import Footer from "./footer.jsx"
import Food from "./food.jsx"
import Card from "./card.jsx"
import Button from './Button/button.jsx'
import Student from './Student.jsx'
import Login from "./LoginModule.jsx"
function App() {
  return (
    <div>
      <>
        <Login isLoggedIn={false} user="Sameer"/>
      </>
    </div>
  );  
}

export default App