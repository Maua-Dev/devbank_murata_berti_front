import { useRef } from 'react'
import Lottie, { LottieRefCurrentProps } from 'lottie-react'

import animationData from '../assets/pigAnimation.json'

function Homescreen() {
  const pigAnimation = useRef<LottieRefCurrentProps>(null)
  return (
    <>
    <div className='container'>
        <div>
            <h1>Bem Vindo ao MUVI Bank</h1>
            <form>
                <div className='form'>
                    <input type="text" placeholder="Insira o URL da sua API aqui" />
                </div>
                <button type="submit">Enviar</button>
            </form>
        </div>
        <div className='animation'>
                <Lottie
                    lottieRef={pigAnimation}
                    animationData={animationData}
                    loop
                    autoplay
                />
        </div>
    </div>
    </>
  )
}
export default Homescreen
