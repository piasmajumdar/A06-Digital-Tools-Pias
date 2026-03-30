

import { toast, ToastContainer } from 'react-toastify'
import './App.css'

function App() {


  return (
    <>
    <h2 className='text-red-500 font-bold text-center text-3xl'>PIAS GGgggG</h2>
    <button className='btn' onClick={()=>toast.success("Successsfully clicked")}>Click Me</button>

    <ToastContainer/>
    </>
  )
}

export default App
