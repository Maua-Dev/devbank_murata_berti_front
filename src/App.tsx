import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import './App.css'
import Accountscreen from './components/AccountScreen/AccountScreen'
import Depositscreen from './components/DepositScreen/DepositScreen'
import Homescreen from './components/HomeScreen/Homescreen'
import Withdrawal from './components/WithdrawalScreen/WithdrawalScreen'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/home" element={<Homescreen />} />
        <Route path="/" element={<Accountscreen />} />
        <Route path="/withdraw" element={<Withdrawal />} />
        <Route path="/deposit" element={<Depositscreen />} />
      </Routes>
    </Router>
  )
}

export default App
