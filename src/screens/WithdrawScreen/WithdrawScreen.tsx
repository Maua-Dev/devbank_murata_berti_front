import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import classes from './WithdrawScreen.module.css'

export default function Withdrawal() {
  const navigate = useNavigate()
  const [sum, setSum] = useState(0)

  return (
    <main className={classes.container}>
      <section>
        <h1 className={classes.title}>Tela de Saque</h1>
        <div className={`${classes.square} ${classes.marginBottom40}`}>
          <div className={classes.info}>
            <p className={classes.amount}>R${sum}</p>
          </div>
        </div>
        <div className={classes.buttoncontainer1}>
          <button
            className={`${classes.button} ${classes.button2}`}
            type="submit"
            onClick={() => navigate('/')}
          >
            Sacar
          </button>
          <button
            className={`${classes.button} ${classes.button3}`}
            type="submit"
            onClick={() => {
              setSum(0)
            }}
          >
            Limpar
          </button>
        </div>
      </section>
      <section className={classes.buttoncontainer2}>
        <button
          className={`${classes.button} ${classes.button1p}`}
          type="submit"
          onClick={() => {
            setSum(sum + 2.0)
          }}
        >
          R$2,00
        </button>
        <button
          className={`${classes.button} ${classes.button1p}`}
          type="submit"
          onClick={() => {
            setSum(sum + 5.0)
          }}
        >
          R$5,00
        </button>
        <button
          className={`${classes.button} ${classes.button1p}`}
          type="submit"
          onClick={() => {
            setSum(sum + 10.0)
          }}
        >
          R$10,00
        </button>
        <button
          className={`${classes.button} ${classes.button1q}`}
          type="submit"
          onClick={() => {
            setSum(sum + 20.0)
          }}
        >
          R$20,00
        </button>
        <button
          className={`${classes.button} ${classes.button1q}`}
          type="submit"
          onClick={() => {
            setSum(sum + 50.0)
          }}
        >
          R$50,00
        </button>
        <button
          className={`${classes.button} ${classes.button1q}`}
          type="submit"
          onClick={() => {
            setSum(sum + 100.0)
          }}
        >
          R$100,00
        </button>
        <button
          className={`${classes.button} ${classes.button1t}`}
          type="submit"
          onClick={() => {
            setSum(sum + 200.0)
          }}
        >
          R$200,00
        </button>
      </section>
    </main>
  )
}
