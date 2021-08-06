import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Navbars} from "./components"
import { Routes } from './config'

const App = () => {
  return (
    <div>
      <Navbars />
      <Routes />
    </div>
  )
}

export default App
