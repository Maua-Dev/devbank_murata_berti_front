import { useRef, useState } from 'react'
import Lottie, { LottieRefCurrentProps } from 'lottie-react'
import animationData from '../assets/pigAnimation.json'
import '../styles/Homescreen.styled.css'

function Homescreen() {
  const pigAnimation = useRef<LottieRefCurrentProps>(null)
  const [api, setApi] = useState('')

  const submitHandler = async (e: { preventDefault: () => void }) => {
    e.preventDefault()
  }

  return (
    <div className="container">
      <div>
        <h1>
          Bem Vindo ao <span>MUVI</span> Bank
        </h1>
        <form onSubmit={submitHandler}>
          <div className="form">
            <input
              type="text"
              onChange={(e) => setApi(e.target.value)}
              placeholder="Insira o URL da sua API aqui"
            />
          </div>
          <button type="submit">Enviar</button>
        </form>
      </div>
      <div className="animation" />
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
