import {Link} from 'react-router-dom'

const OlvidePassword = () => {
  return (
    <>
      <h1 className="text-sky-600 font-black text-6xl capitalize">Recupera Tu Acceso A 
        <span className="text-slate-700"> Help Fee</span>
      </h1>
      <form action="" className="my-10 bg-white shadow rounded-lg p-10">
        <div className="my-5">
          <label className="text-gray-600 block text-xl font-bold" htmlFor="email">Email</label>
          <input 
            id="email"
            type="email"
            placeholder="Email"
            className="w-full mt-3 p-3 border bg-gray-50 rounded-xl" 
          />
        </div> 
        <input 
            type="submit"
            value="Recuperar Cuenta"
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
            to="/registrar"
          >¿No tienes una cuenta? Regístrate</Link>
        </nav>
    </>
  )
}

export default OlvidePassword