import { useEffect } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import { Flip, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import './App.css'

function App() {
  const navigate = useNavigate()

  useEffect(() => {
    navigate('/home')
  }, [navigate])
  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={2000}
        limit={3}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        transition={Flip}
        draggable={false}
        pauseOnHover={false}
        theme="colored"
      />
      <Outlet />
    </>
  )
}

export default App
