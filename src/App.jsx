import { useState } from 'react'

import './App.css'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import Goods from './components/Goods/Goods'
import About from './components/About/About'
import Partners from './components/Partners/Partners'
import Video from './components/ Video/Video'
import Stall from './components/Stall/Stall'
import Join from './components/Join/Join'
import Detail from './components/Detail/Detail'
import Counter from './components/Counter/Counter'
import Book from './components/Book/Book'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar/>

    <About/>
    <Video/>
    <Goods/>
    <Detail/>
  
    <Book/>
    <Stall/>
    <Counter/>
    <Partners/>
    <Footer/>
    </>
  )
}

export default App
