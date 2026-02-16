import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from "./header.jsx"
import Footer from "./footer.jsx"
import Food from "./food.jsx"
import Card from "./card.jsx"
import Button from './button.jsx'
import Student from './Student.jsx'
import Login from "./LoginModule.jsx"
import Fruits from "./Fruits.jsx"
import Profile from './profilepicture.jsx'
import MyComponent  from './mycomponent.jsx'  
import Counter from './counter.jsx'
import OnChangeDemo from './onchange.jsx'
import ColorPicker from './ColorPicker.jsx'
import UpdaterDemo from './reactUpdater.jsx'
import Update from './ObjectUpdateUseState.jsx'
import FoodList from './ArrayUpdateUseState.jsx'
function App() {
  return (
    <div>
      <FoodList/>
    </div>
  );  
}

export default App