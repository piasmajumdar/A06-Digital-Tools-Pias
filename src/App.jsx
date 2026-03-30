import { ToastContainer } from 'react-toastify'
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import Banner from './Components/HomePage/Banner/Banner'

function App() {


  return (
    <>
    <Navbar></Navbar>
    <Banner></Banner>

    

    <ToastContainer/>
    </>
  )
}

export default App
