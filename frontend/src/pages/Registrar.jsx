import {useState} from 'react'
import { Link } from "react-router-dom"
import Alerta from '../components/Alerta';
import axios from 'axios'

const Registrar = () => {

    const [nombre, setNombre] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPasword] = useState('');
    const [confirmarPassword, setConfirmarPassword] = useState('');
    const [alerta, setAlerta] = useState({})

    const handleSubmit = async (e) => {
        e.preventDefault()

        if([nombre, email, password, confirmarPassword].includes('')) {
            setAlerta({
                msg: 'Todos los campos son obligatorios',
                error: true
            })
            return
        }

        if(password !== confirmarPassword) {
            setAlerta({
                msg: 'Verifique su Password',
                error: true
            })
            return
        }

        if(password.length < 8) {
            setAlerta({
                msg: 'Su Password es muy corto, agrega minimo 8 caracteres',
                error: true
            })
            return
        }
        setAlerta({

        })

        try {
            const {data} = await axios.post('http://localhost:4000/signup', 
            {nombre, email, password})
            console.log(data);
        } catch (error) {
            console.log(error);
        }
    }

    const {msg} = alerta

  return (
    <>
      <h1 className="text-sky-600 font-black text-6xl capitalize">Crea Una Cuenta en
        <span className="text-slate-700"> Help Fee</span>
      </h1>
      { msg && <Alerta alerta={alerta}/> }
      <form action="" className="my-10 bg-white shadow rounded-lg p-10"
        onSubmit={handleSubmit}
      >
        <div className="my-5">
          <label className="text-gray-600 block text-xl font-bold" htmlFor="email">Nombre</label>
          <input 
            id="nombre"
            type="text"
            placeholder="Tu Nombre"
            className="w-full mt-3 p-3 border bg-gray-50 rounded-xl" 
            value={nombre}
            onChange={e =>{setNombre(e.target.value)}}
          />
        </div> 
        <div className="my-5">
          <label className="text-gray-600 block text-xl font-bold" htmlFor="email">Email</label>
          <input 
            id="email"
            type="email"
            placeholder="Email"
            className="w-full mt-3 p-3 border bg-gray-50 rounded-xl" 
            value={email}
            onChange={e =>{setEmail(e.target.value)}}
          />
        </div> 
        <div className="my-5">
          <label className="text-gray-600 block text-xl font-bold" htmlFor="password">Password</label>
          <input 
            id="password"
            type="password"
            placeholder="Password"
            className="w-full mt-3 p-3 border bg-gray-50 rounded-xl" 
            value={password}
            onChange={e =>{setPasword(e.target.value)}}
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
            onChange={e =>{setConfirmarPassword(e.target.value)}}
          />
        </div>
        <input 
            type="submit"
            value="Crear Cuenta"
            className="bg-sky-700 w-full mb-5 py-3 text-white uppercase font-bold rounded
            hover:cursor-pointer hover:bg-sky-800 transition-colors"
          />
      </form>
      <nav className="lg:flex lg:justify-between"> 
          <Link
            className="block text-center my-5 text-slate-500 uppercase text-sm"
            to="/"
          >¿Ya tienes una cuenta? Inicia Sesión</Link>

          <Link
            className="block text-center my-5 text-slate-500 uppercase text-sm"
            to="/olvide-password"
          >Olvide mi contraseña</Link>
        </nav>
    </>
  )
}

export default Registrar