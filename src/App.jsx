import { ToastContainer } from 'react-toastify'
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import Banner from './Components/HomePage/Banner/Banner'
import Stats from './Components/HomePage/Stats/Stats'
import DigitalTools from './Components/HomePage/DigitalTools/DigitalTools'
import { Suspense } from 'react'

const getPromiseProduct = async () => {
  const res = await fetch("toolsData.json");
  return res.json();
}

function App() {

  const promiseProduct = getPromiseProduct();
  // console.log(promiseProduct)

  return (
    <>
      <Navbar></Navbar>
      <Banner></Banner>
      <Stats></Stats>

      <Suspense
        fallback={<div className='max-w-300 h-[50vh] mx-auto flex justify-center items-center'>
          <span className="loading loading-infinity loading-xl w-50"></span>
        </div>}>

        <DigitalTools promiseProduct={promiseProduct}></DigitalTools>
      </Suspense>



      <ToastContainer />
    </>
  )
}

export default App
