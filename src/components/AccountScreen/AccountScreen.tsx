import classes from './AccountScreen.module.css'

function AccountScreen() {
  return (
    <div className={classes.container}>
      <h1>Tela da Conta</h1>
      <div className={classes.container_grid}>
        <button
          type="button"
          className={`${classes.card} ${classes.cardBgGreen}`}
        >
          Transações
        </button>
        <button
          type="button"
          className={`${classes.card} ${classes.cardBgBlue}`}
        >
          Sacar
        </button>
        <button
          type="button"
          className={`${classes.card} ${classes.cardBgRed}`}
        >
          Depositar
        </button>
      </div>
    </div>
  )
}

export default AccountScreen
