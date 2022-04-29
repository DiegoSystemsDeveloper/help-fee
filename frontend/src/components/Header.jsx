import { Link } from "react-router-dom"
import { useState } from "react"

const Header = () => {

    //const [cerrarSesion, setCerrarSesion] = ({})

    const handleSubmit = () => {

    }
  return (
    <header className='px-4 py-5 bg-white border-b'>
        <div className='md:flex md:justify-between'>
            <h2 className='text-4xl text-sky-600 font-black text-center'>Help Fee</h2>
            <input 
                type="text" 
                placeholder='Buscar entidad'
                className='rounded-lg lg:w-96 block p-2 border'
            />
            <div className="flex items-center gap-4">
                <Link
                    to='/entidades'
                    className="font-bold uppercase"
                >Entidades</Link>
                <button
                    type="button"
                    className="text-white text-sm bg-sky-600 p-3 rounded-md uppercase font-bold"
                    //onSubmit={handleSubmit}
                >Cerrar Sesion</button>
            </div>
        </div>
    </header>
  )
}

export default Header