import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import { Flip, ToastContainer } from 'react-toastify'
import './App.css'
import Accountscreen from './screens/AccountScreen/AccountScreen'
import Depositscreen from './screens/DepositScreen/DepositScreen'
import Homescreen from './screens/HomeScreen/HomeScreen'
import TransactionScreen from './screens/TransactionScreen/TransactionScreen'
import Withdraw from './screens/WithdrawScreen/WithdrawScreen'

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/home" element={<Homescreen />} />
          <Route path="/" element={<Accountscreen />} />
          <Route path="/withdraw" element={<Withdraw />} />
          <Route path="/deposit" element={<Depositscreen />} />
          <Route path="/history" element={<TransactionScreen />} />
        </Routes>{' '}
      </Router>
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
    </>
  )
}

export default App
