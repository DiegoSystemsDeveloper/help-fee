import { useState } from "react"
import Alerta from "../Alerta"

const SimuladorCreditCard = ({ abrirCerrarModalSimulador, showSimulador, cupoMinimo, cupoMaximo, plazoMaximo, plazoMinimo, monto, plazo, setMonto, setPlazo, goToResultado }) => {

  const [alerta, setAlerta] = useState({})

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!monto || !plazo) {
      setAlerta({
        msg: 'Por favor llene todos los campos',
        error: true
      })
      return
    }
    if (monto >= cupoMinimo && monto <= cupoMaximo && plazo >= plazoMinimo && plazo <= plazoMaximo) {
      goToResultado()
      changeShowModal()
    }
  }

  const changeShowModal = () => {
    abrirCerrarModalSimulador()
  }

  const { msg } = alerta

  return (
    <>
      {showSimulador ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none">
                <div className="flex p-5 border-b border-solid border-slate-200 ">
                  <h3 className="text-3xl  flex-1 text-center uppercase">
                    Simulador
                  </h3>
                </div>
                <div className="relative flex-auto">
                  <form className='my-5 bg-white  rounded-lg p-5 mx-10'
                    onSubmit={handleSubmit}
                  >
                    {msg && (<Alerta alerta={alerta} />)}
                    <div className='text-center mb-10 ' >
                      <label className='text-gray-600 text-xl font-bold'>Monto</label>
                      <input type="number"
                        placeholder='Ingrese el monto'
                        className="w-full  p-3 border-b border-sky-700 leading-tight focus:outline-none text-3xl text-center block text-gray-700"
                        min={cupoMinimo}
                        max={cupoMaximo}
                        value={monto}
                        onChange={e => { setMonto(e.target.value) }}
                      />
                      <label className='text-gray-600  text-sm text-gray-400 font-semibold'>Ingrese un valor entre ${new Intl.NumberFormat().format(cupoMinimo)} y ${new Intl.NumberFormat().format(cupoMaximo)}</label>
                    </div>
                    <div className='text-center'>
                      <label className='text-gray-600  text-xl  font-bold'>¿A cuántos meses?</label>
                      <input
                        type="number"
                        placeholder="Ingrese el plazo"
                        className="w-full  p-3 border-b border-sky-700 leading-tight focus:outline-none text-3xl text-center block text-gray-700"
                        min={plazoMinimo}
                        max={plazoMaximo}
                        value={plazo}
                        onChange={e => { setPlazo(e.target.value) }}
                      />
                      <label className='text-gray-600  text-sm text-gray-400 font-semibold'>Ingrese un valor entre {plazoMinimo} y {plazoMaximo}</label>
                    </div>
                    <div className="flex items-center justify-between mt-5 flex-col">
                      <input
                        className="bg-sky-600 my-3 text-white hover:bg-sky-700 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none  transition-all"
                        type="submit"
                        value='calcular'
                      />
                      <input
                        className="bg-red-600 my-3 text-white hover:bg-red-700 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none   transition-all"
                        type="submit"
                        value='cancelar'
                        onClick={() => changeShowModal()}
                      />
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-50 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  )
}

export default SimuladorCreditCard