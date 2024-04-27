import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import useAuthStore from '../../store'
import classes from './AccountScreen.module.css'

function AccountScreen() {
  const navigate = useNavigate()
  const { apiUrl } = useAuthStore()

  const BASE_URL = apiUrl

  useEffect(() => {
    const regex = /^(http|https):\/\/[^ "]+$/
    if (!apiUrl || !regex.test(apiUrl)) {
      navigate('/home')
    }

    const fetchData = async () => {
      try {
        const response = await fetch(`${BASE_URL}`)
        if (response.status === 401) {
          navigate('/login')
        }
        const transactions = await response.json()
      } catch (error) {
        navigate('/home')
      }
    }
  }, [apiUrl, navigate])

  return (
    <div className={classes.container}>
      <h1>
        Tela da Conta <br />
        <span className={classes.api}>{apiUrl}</span>
      </h1>
      <div className={classes.container_grid}>
        <button
          type="button"
          id="transactions"
          onClick={() => navigate('/history')}
          className={`${classes.card} ${classes.transactions}`}
        >
          Transações
        </button>
        <button
          type="button"
          id="withdraw"
          onClick={() => navigate('/withdraw')}
          className={`${classes.card} ${classes.withdraw}`}
        >
          Sacar
        </button>
        <button
          type="button"
          id="deposit"
          onClick={() => navigate('/deposit')}
          className={`${classes.card} ${classes.deposit}`}
        >
          Depositar
        </button>
      </div>
    </div>
  )
}

export default AccountScreen
