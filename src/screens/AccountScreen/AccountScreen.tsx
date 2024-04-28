import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useProfile } from '../../services/queries'
import useBoundStore from '../../store'
import classes from './AccountScreen.module.css'

function AccountScreen() {
  const navigate = useNavigate()
  const { apiUrl } = useBoundStore()
  const profile = useProfile()

  useEffect(() => {
    const regex = /^(http|https):\/\/[^ "]+$/
    if (!apiUrl || !regex.test(apiUrl)) {
      navigate('/home')
    }
  }, [apiUrl, navigate])

  if (profile.isLoading) {
    return <div>Loading...</div>
  }

  if (profile.isError) {
    return <div>Error: {profile.error.message}</div>
  }

  return (
    <div className={classes.container}>
      <div>
        <h3>Nome: {profile.data?.name}</h3>
        <h3>Agência: {profile.data?.agency}</h3>
        <h3>Saldo: {profile.data?.current_balance}</h3>
        <h3>Conta: {profile.data?.account}</h3>
      </div>
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
