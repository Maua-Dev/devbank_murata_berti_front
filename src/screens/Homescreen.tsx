import Lottie, { LottieRefCurrentProps } from 'lottie-react'
import { useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import animationData from '../assets/pigAnimation.json'
import useAuthStore from '../store.ts'
import '../styles/Homescreen.styled.css'

function Homescreen() {
  const pigAnimation = useRef<LottieRefCurrentProps>(null)
  const { apiUrl, setApiUrl, authApi } = useAuthStore()

  const navigate = useNavigate()

  const submitHandler = async (e: { preventDefault: () => void }) => {
    e.preventDefault()
    const isValid: boolean = await authApi()
    useAuthStore.setState({ isValidApi: isValid })
    if (authApi()) navigate('/')
    else {
      toast.error('URL inválida, tente novamente')
    }
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
              value={apiUrl}
              onChange={(e) => setApiUrl(e.target.value)}
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
