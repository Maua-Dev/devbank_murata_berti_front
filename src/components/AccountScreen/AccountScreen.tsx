import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import classes from './AccountScreen.module.css'

function AccountScreen() {
  const navigate = useNavigate()
  const api = localStorage.getItem('apiUrl')

  useEffect(() => {
    const regex = /^(http|https):\/\/[^ "]+$/
    if (!api || !regex.test(api)) {
      navigate('/home')
    }
  }, [api, navigate])

  return (
    <div className={classes.container}>
      <h1>
        Tela da Conta <br />
        <span className={classes.api}>{api}</span>
      </h1>
      <div className={classes.container_grid}>
        <button
          type="button"
          id="transactions"
          className={`${classes.card} ${classes.transactions}`}
        >
          Transações
        </button>
        <button
          type="button"
          id="withdraw"
          className={`${classes.card} ${classes.withdraw}`}
        >
          Sacar
        </button>
        <button
          type="button"
          id="deposit"
          className={`${classes.card} ${classes.deposit}`}
        >
          Depositar
        </button>
      </div>
    </div>
  )
}

export default AccountScreen
