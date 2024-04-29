import Lottie, { LottieRefCurrentProps } from 'lottie-react'
import { FormEvent, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import 'react-toastify/dist/ReactToastify.css'

import animationData from '../../assets/pigAnimation.json'
import useBoundStore from '../../store'
import classes from './HomeScreen.module.css'

function Homescreen() {
  const pigAnimation = useRef<LottieRefCurrentProps>(null)
  const { setApiUrl, authApi } = useBoundStore()

  const navigate = useNavigate()

  const submitHandler = (e: FormEvent) => {
    e.preventDefault()
    if (authApi()) {
      navigate('/')
    }
  }

  return (
    <div className={classes.container}>
      <div>
        <h1>
          Bem Vindo ao <span>MUVI</span> Bank
        </h1>
        <form onSubmit={submitHandler}>
          <div className={classes.form}>
            <input
              type="text"
              onChange={(e) => setApiUrl(e.target.value)}
              placeholder="Insira o URL da sua API aqui"
            />
          </div>
          <button type="submit">Enviar</button>
        </form>
      </div>
      <div className={classes.animation} />
      <Lottie
        lottieRef={pigAnimation}
        animationData={animationData}
        loop
        style={{ width: 500, height: 500 }} // Increase the width and height values
      />
    </div>
  )
}
export default Homescreen
