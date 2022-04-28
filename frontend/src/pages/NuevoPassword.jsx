import { useState, useEffect } from "react"
import { Link, useParams } from "react-router-dom"
import clienteAxios from "../config/clienteAxios"
import Alerta from "../components/Alerta"

const NuevoPassword = () => {

  const params = useParams()
  const {token} = params

  const [password, setPassword] = useState('')
  const [passwordModificado, setPasswordMoficado] = useState(false)
  const [confirmarPassword, setConfirmarPassword] = useState('')
  const [alerta, setAlerta] = useState({})
  const [tokenValido, setTokenValido] = useState(false)
  
  useEffect(()=> {
    const comprobarToken = async() => {
      try {
        const {data} = await clienteAxios(`/usuarios/olvide-password/${token}`)
        setTokenValido(true)
        console.log(data);
      } catch (error) {
        setAlerta({
          msg: error.response.data.msg,
          error: true
        })
      };
    }
    comprobarToken()
  }, [])

  const handleSubmit = async (e) => {
    e.preventDefault()

    if(password.length < 8) {
      setAlerta({
        msg: 'El password debe ser minimo de 8 caracteres',
        error: true
      })
      return
    }

    if(password !== confirmarPassword || password == '' || confirmarPassword == '') {
      setAlerta({
        msg: 'Por favor verifique su password',
        error: true
      })
      return
    }

    try {
      const url = `/usuarios/olvide-password/${token}`
      const {data} = await clienteAxios.post(url, {password})
      setAlerta({
        msg: data.msg,
        error: false
      })
      setPasswordMoficado(true)
    } catch (error) {
      setAlerta({
        msg: error.response.data.msg,
        error: true
      })
    }
  }

  const {msg} = alerta

  return (
    <>
      <h1 className="text-sky-600 font-black text-6xl capitalize">Recupera Tu Acceso A 
        <span className="text-slate-700"> Help Fee</span>
      </h1>
      {msg && <Alerta alerta={alerta}/>}
      {
        tokenValido && (
          <form action="" className="my-10 bg-white shadow rounded-lg p-10"
            onSubmit={handleSubmit}
          >
      <div className="my-5">
          <label className="text-gray-600 block text-xl font-bold" htmlFor="password">Password</label>
          <input 
            id="password"
            type="password"
            placeholder="Password"
            className="w-full mt-3 p-3 border bg-gray-50 rounded-xl"
            value={password}
            onChange={e => {setPassword(e.target.value)}} 
          />
        </div>
        <div className="my-5">
          <label className="text-gray-600 block text-xl font-bold" htmlFor="password2">Confirmar Password</label>
          <input 
            id="password2"
            type="password"
            placeholder="Confirmar Password"
            className="w-full mt-3 p-3 border bg-gray-50 rounded-xl" 
            value={confirmarPassword}
            onChange={e => {setConfirmarPassword(e.target.value)}} 
          />
        </div> 
        <input 
            type="submit"
            value="Guardar Nueva Password"
            className="bg-sky-700 w-full mb-5 py-3 text-white uppercase font-bold rounded
            hover:cursor-pointer hover:bg-sky-800 transition-colors"
          />
      </form>
        )
      }
      {passwordModificado && (<Link
            className="block text-center my-5 text-slate-500 uppercase text-sm"
            to="/"
          >Iniciar Sesión</Link>)}
    </>  
  )
}

export default NuevoPassword