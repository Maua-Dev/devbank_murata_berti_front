import '../styles/Accountscreen.styled.css'

function Homescreen() {
    
    return (
        <div>
            <div>
                <div className='container'>
                    <div className="circle"></div>
                        <div className='info'>
                            <p className='name'>Nome:</p>
                            <p className='name'>Email:</p>
                            <p className='name'>Saldo:</p>
                        </div>
                    </div>
                    <h1 className='fonte'>C</h1>
                    <h1 className='fonte'>O</h1>
                    <h1 className='fonte'>N</h1>
                    <h1 className='fonte'>T</h1>
                    <h1 className='fonte'>A</h1>
            </div>
            <div className="button-container">
                <button type="submit">Depositar:</button>
                <button type="submit">Sacar:</button>
                <button type="submit">Transações:</button>
            </div>
        </div>
    )
  }
  export default Homescreen