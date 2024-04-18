import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import Accountscreen from './components/AccountScreen/AccountScreen'
import Homescreen from './components/HomeScreen/Homescreen'
import Depositscreen from './components/DepositScreen/DepositScreen'
import './App.css'
import Withdrawal from './components/WithdrawalScreen/WithdrawalScreen'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/home" element={<Homescreen />} />
        <Route path="/account" element={<Accountscreen />} />
        <Route path="/withdrawal" element={<Withdrawal />} />
        <Route path="/deposit" element={<Depositscreen />} />
      </Routes>
    </Router>
  )
}

export default App
