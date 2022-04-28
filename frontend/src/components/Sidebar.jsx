import { Link } from "react-router-dom"
import useAuth from '../hooks/useAuth'

const Sidebar = () => {

    const {auth} = useAuth()

  return (
    <aside className="md:w-80 lg:w-96 px-5 py-10">
        <p className="text-xl font-bold">Hola: {auth.nombre}</p>
    </aside>
  )
}

export default Sidebar