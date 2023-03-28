
import { useState } from 'react'
import './App.css'

import ContainerInfo from './components/containerInfo'
import db from "./db/db.json"

const images = ["bg1", "bg2", "bg3", "bg4"]

function App() {
 
  const getRamdomItem = (listItems) => {
    const randomIndex = Math.floor (Math.random() * listItems.length)
    return listItems[randomIndex]
  }

const [quote, setQuote] = useState(getRamdomItem(db))
const [bgImage, setBgImage] = useState(getRamdomItem(images))

const handleNewQuote = () => {
  setQuote(getRamdomItem(db))
  setBgImage(getRamdomItem(images))
}

  return (
    <div className={`App ${bgImage}`}>
  

    <ContainerInfo quote={quote} handleNewQuote ={handleNewQuote} />

     

    </div>
  )
}

export default App
