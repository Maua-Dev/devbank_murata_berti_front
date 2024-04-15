import Lottie, { LottieRefCurrentProps } from 'lottie-react'
import { FormEvent, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Flip, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import animationData from '../../assets/pigAnimation.json'
import useAuthStore from '../../store'
import classes from './HomeScreen.module.css'

function Homescreen() {
  const [api, setApi] = useState<string>('')
  const pigAnimation = useRef<LottieRefCurrentProps>(null)
  const { setApiUrl, authApi } = useAuthStore()

  const navigate = useNavigate()

  const submitHandler = (e: FormEvent) => {
    e.preventDefault()
    authApi()
    if (localStorage.getItem('apiUrl')) {
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
    </div>
  )
}
export default Homescreen
