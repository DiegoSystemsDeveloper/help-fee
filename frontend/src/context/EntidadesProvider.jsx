import { createContext, useState } from "react";
import clienteAxios from '../config/clienteAxios'

const EntidadesContext = createContext()

const EntidadesProvider = ({children}) => {

    const [entidades, setEntidades] = useState([])

    const [entidad, setEntidad] = useState({})

    const [cargando, setCargando] = useState(true)

    const obtenerEntidades = async() => {
        try {
            const token = sessionStorage.getItem('token')
            if(!token) return

            const config = {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`
                }
            }
            const {data} = await clienteAxios('/entidades', config)
            setEntidades(data)
        } catch (error) {
            console.log(error);
        }
    }

    const obtenerEntidad = async (id) => {
        setCargando(true)
        try {
            const token = sessionStorage.getItem('token')
            if(!token) return

            const config = {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`
                }
            }
            const {data} = await clienteAxios(`/entidades/${id}`, config)
            setEntidad(data)
        } catch (error) {
            console.log(error);
        } finally {
            setCargando(false)
        }
    }

    return (
        <EntidadesContext.Provider
            value={{
                entidades,
                obtenerEntidades,
                obtenerEntidad,
                entidad,
                cargando
            }}
        >
            {children}
        </EntidadesContext.Provider>
    )
}

export {EntidadesProvider}

export default EntidadesContext