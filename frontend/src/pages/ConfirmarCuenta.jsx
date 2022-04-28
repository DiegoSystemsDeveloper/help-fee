import {useEffect, useState} from 'react'
import {useParams, Link} from 'react-router-dom'
import clienteAxios from '../config/clienteAxios'
import Alerta from '../components/Alerta'

const ConfirmarCuenta = () => {
  const [alerta, setAlerta] = useState({
    
  })
  const [confirmarCuenta, setConfirmarCuenta] = useState(false)
  const params = useParams()
  const {id} = params

  useEffect(()=>{
    const confirmarCuenta = async() => {
      const url = `/usuarios/confirmar/${id}`
      try {
        const {data} = await clienteAxios(url)
        console.log(data);
        setAlerta({
          msg: data.msg,
          error: false
        })
        setConfirmarCuenta(true)
      } catch (error) {
        setAlerta({
          msg: error.response.data.msg,
          error: true
        })
      } 
    }
    confirmarCuenta()
  }, [])

  const {msg} = alerta
  
  return (
    <>
      <h1 className="text-sky-600 font-black text-6xl capitalize">Confirma Tu Cuenta Para Ingresar A
        <span className="text-slate-700"> Help Fee</span>
      </h1>
      <div>
        {msg && <Alerta alerta={alerta}/>}
        {confirmarCuenta && 
        <Link
            className="block text-center my-5 text-slate-500 uppercase text-sm"
            to="/"
          >Iniciar Sesión</Link>
        }
      </div>
    </>
  )
}

export default ConfirmarCuenta