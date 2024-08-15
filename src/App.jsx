import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Newsboard from './components/Newsboard'

function App() {

  const [category, setCategory] = useState("general");

  return (
    <>
     <Navbar setCategory={setCategory}></Navbar>
     <div className="content">
      
     <Newsboard category={category}></Newsboard>
     </div>
    </>
  )
}

export default App
