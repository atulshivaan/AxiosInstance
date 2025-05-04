
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import Products from './pages/Products'
import User from './pages/User'
import Home from './pages/Home'

function App() {
  

  return (
    <>
     <Navbar/>
     <Routes>
            <Route path="/" element={<h1 className="text-3xl font-bold"><Home/></h1>} />
            <Route path="/products" element={<h1 className="text-3xl font-bold"><Products/></h1>} />
            <Route path="/users" element={<h1 className="text-3xl font-bold"><User/></h1>} />
           
        </Routes>
    </>
  )
}

export default App
