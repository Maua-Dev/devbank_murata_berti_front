import classes from './WithdrawalScreen.module.css'

export default function Withdrawal() {
  return (
    <main className={classes.container}>
      <section>
        <h1>Tela de Saque</h1>
        <div className={classes.square}>
          <div className={classes.info}>
            <p>R$0,00</p>
          </div>
        </div>
        <div className={classes.buttoncontainer1}>
          <button className={classes.button2} type="submit">
            Depositar
          </button>
          <button className={classes.button3} type="submit">
            Limpar
          </button>
        </div>
      </section>
      <section className={classes.buttoncontainer2}>
        <button className={classes.button1p} type="submit">
          R$2,00
        </button>
        <button className={classes.button1p} type="submit">
          R$5,00
        </button>
        <button className={classes.button1p} type="submit">
          R$10,00
        </button>
        <button className={classes.button1q} type="submit">
          R$20,00
        </button>
        <button className={classes.button1q} type="submit">
          R$50,00
        </button>
        <button className={classes.button1q} type="submit">
          R$100,00
        </button>
        <button className={classes.button1t} type="submit">
          R$200,00
        </button>
      </section>
    </main>
  )
}
