import { ToastContainer } from 'react-toastify'
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import Banner from './Components/HomePage/Banner/Banner'
import Stats from './Components/HomePage/Stats/Stats'
import DigitalTools from './Components/HomePage/DigitalTools/DigitalTools'

function App() {


  return (
    <>
    <Navbar></Navbar>
    <Banner></Banner>
    <Stats></Stats>

    <DigitalTools></DigitalTools>

    

    <ToastContainer/>
    </>
  )
}

export default App
