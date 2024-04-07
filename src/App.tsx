import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import { Flip, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import './App.css'
import Accountscreen from './components/AccountScreen/AccountScreen'
import Homescreen from './components/HomeScreen/Homescreen'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/home" element={<Homescreen />} />
        <Route path="/" element={<Accountscreen />} />
      </Routes>
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
    </Router>
  )
}

export default App
