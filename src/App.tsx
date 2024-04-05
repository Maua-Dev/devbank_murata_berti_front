import { Outlet } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import './App.css'
import Homescreen from './screens/Homescreen.tsx'

function App() {
  return (
    <>
      <Homescreen />
      <ToastContainer />
      <Outlet />
    </>
  )
}

export default App
