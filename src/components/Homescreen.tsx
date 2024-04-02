import { useRef } from 'react'
import Lottie, { LottieRefCurrentProps } from 'lottie-react'

import animationData from '../assets/pigAnimation.json'

function Homescreen() {
  const pigAnimation = useRef<LottieRefCurrentProps>(null)
  return (
    <>
      <h1>Bem Vindo ao MUVI Bank</h1>
      <Lottie lottieRef={pigAnimation} animationData={animationData} />
      <br />
      <form>
        <div className="form-control">
          <input type="text" placeholder="Insira o URL da sua API aqui" />
        </div>
        <button type="submit">Submit</button>
      </form>
    </>
  )
}
export default Homescreen
