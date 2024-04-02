import React from 'react'

function Homescreen() {
  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault()
  }
  return (
    <>
      <h1>Bem Vindo ao MUVI Bank</h1>
      <br />
      <h3>Insira o URL da sua API</h3>
      <form onSubmit={onSubmit}>
        <div className="form-control">
          <input type="text" />
        </div>
        <button type="submit">Submit</button>
      </form>
    </>
  )
}
export default Homescreen
