import { useState } from 'react'
import './App.css'
import db from "./db/db.json"
import ContainerInfo from './components/ContainerInfo'
import "./components/styles/ContainerInfo.css"
import "./components/styles/Button.css"



const images = ["img1", "img2", "img3", "img4"]

function App() {

  const getRandomItem = (listItems) => {
    const randomIndex = Math.floor(Math.random() * listItems.length)
    return listItems[randomIndex]
  }

  const [quote, setQuote] = useState(getRandomItem(db))

  const [bgImage, setBgImage] = useState(getRandomItem(images))

  const handleNewQuote = () => {
    setQuote(getRandomItem(db))
    setBgImage(getRandomItem(images))
  }



  return (
    <div className={`App ${bgImage}`}>

      <ContainerInfo quote={quote} handleNewQuote={handleNewQuote} />


    </div>
  )
}

export default App
