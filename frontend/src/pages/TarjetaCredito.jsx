import { useEffect, useState, } from "react"
import { useParams } from "react-router-dom"
import useProductos from "../hooks/useProductos"
import { BsCashCoin } from 'react-icons/bs'
import { VscCreditCard } from 'react-icons/vsc'
import { AiOutlinePercentage } from 'react-icons/ai'
import { BsFillCalculatorFill } from 'react-icons/bs'
import { IconContext } from "react-icons"
import { MdSupportAgent } from 'react-icons/md'
import ContactoModal from "../components/modals/ContactoModal"
import SimuladorCreditCard from "../components/modals/SimuladorCreditCard"
import ResultadoSimulador from "../components/modals/ResultadoSimulador"
import GoBack from "../components/GoBack"
import Cargando from "../components/Cargando"

const TarjetaCredito = () => {

  const [showSimulador, setShowSimulador] = useState(false)
  const [showContacto, setShowContacto] = useState(false)
  const [showResultado, setShowResultado] = useState(false)
  const [monto, setMonto] = useState()
  const [plazo, setPlazo] = useState()

  const abrirCerrarModalSimulador = () => {
    setShowSimulador(!showSimulador)
  }

  const abrirCerrarModalContactar = () => {
    setShowContacto(!showContacto)
  }

  const goToResultado = () => {
    setShowResultado(!showResultado)
  }

  const { obtenerProducto, producto } = useProductos()

  const { id } = useParams()

  useEffect(() => {
    obtenerProducto(id)
  }, [])
  const {
    nombre,
    descripcion,
    cupoMaximo,
    cupoMinimo,
    interesAnual,
    interesMensual,
    tipo,
    plazoMinimo,
    plazoMaximo
  } = producto

  return (
    <>
      {producto ? (
        <>
          <GoBack />
          <div className="rounded-md border bg-white p-5 w-4/5 shadow flex flex-col space-y-4 ">
            <h1 className="font-black text-3xl uppercase text-sky-600 ">{nombre}</h1>
            <div className="py-3 font-bold">{descripcion}</div>
            <div className="flex justify-between p-4 bg-sky-600 rounded border text-white shadow">
              <div className="items-center flex flex-col flex-1">
                <IconContext.Provider value={{ className: "flex-1", size: '3em' }}>
                  <BsCashCoin />
                </IconContext.Provider>
                <h2 className="flex-1 text-center">Cupo entre</h2>
                <p className="font-bold flex-1 uppercase text-center">${new Intl.NumberFormat().format(cupoMinimo)} y ${new Intl.NumberFormat().format(cupoMaximo)}</p>
              </div>
              <div className="items-center flex flex-col flex-1">
                <IconContext.Provider value={{ className: "flex-1", size: '3em' }}>
                  <AiOutlinePercentage />
                </IconContext.Provider>
                <h2 className="flex-1 text-center">Tasa</h2>
                <p className="font-bold flex-1 uppercase text-center">{interesMensual * 100}% y {interesAnual * 100}%</p>
              </div>
              <div className="items-center flex flex-col flex-1">
                <IconContext.Provider value={{ className: "flex-1", size: '3em' }}>
                  <VscCreditCard />
                </IconContext.Provider>
                <h2 className="flex-1 text-center">Pide una tarjeta</h2>
                <p className="font-bold flex-1 uppercase text-center">{tipo}</p>
              </div>
            </div>
            <div className="flex flex-col items-center justify-evenly space-y-5 py-5">
              <button
                className="bg-sky-600 hover:bg-sky-800 text-white  py-2 px-4 rounded-full uppercase w-1/2 shadow transition-colors flex justify-center items-center"
                type="button"
                onClick={() => abrirCerrarModalSimulador()}
              >
                <p className="mr-2">ir al simulador</p><BsFillCalculatorFill />
              </button>
              <button
                className="bg-sky-600 hover:bg-sky-800 text-white py-2 px-4 rounded-full uppercase w-1/2 shadow transition-colors flex justify-center items-center"
                type="button"
                onClick={() => abrirCerrarModalContactar()}
              >
                <p className="mr-2">quiero ser contactado</p><MdSupportAgent />
              </button>
            </div>
            <>
              {showContacto ?
                (<ContactoModal
                  abrirCerrarModalContactar={abrirCerrarModalContactar}
                  showContacto={showContacto}
                  id={id}
                />) : null}
              {showSimulador ? (
                <SimuladorCreditCard
                  abrirCerrarModalSimulador={abrirCerrarModalSimulador}
                  showSimulador={showSimulador}
                  cupoMinimo={cupoMinimo}
                  cupoMaximo={cupoMaximo}
                  plazoMinimo={plazoMinimo}
                  plazoMaximo={plazoMaximo}
                  monto={monto}
                  plazo={plazo}
                  setMonto={setMonto}
                  setPlazo={setPlazo}
                  goToResultado={goToResultado}
                />
              ) : null}
              {showResultado ? (
                <ResultadoSimulador
                  monto={monto}
                  plazo={plazo}
                  showResultado={showResultado}
                  interesMensual={interesMensual}
                  goToResultado={goToResultado}
                  setMonto={setMonto}
                  setPlazo={setPlazo}
                />)
                : null}
            </>
          </div>
        </>
      ) : <Cargando />}
    </>
  )
}

export default TarjetaCredito