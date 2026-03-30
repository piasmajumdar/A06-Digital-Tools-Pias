import { ToastContainer } from 'react-toastify'
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import Banner from './Components/HomePage/Banner/Banner'
import Stats from './Components/HomePage/Stats/Stats'

function App() {


  return (
    <>
    <Navbar></Navbar>
    <Banner></Banner>
    <Stats></Stats>

    

    <ToastContainer/>
    </>
  )
}

export default App
