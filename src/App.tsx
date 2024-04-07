import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import Accountscreen from './components/AccountScreen/AccountScreen'
import Homescreen from './components/HomeScreen/Homescreen'
import './App.css'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/home" element={<Homescreen />} />
        <Route path="/" element={<Accountscreen />} />
      </Routes>
    </Router>
  )
}

export default App
