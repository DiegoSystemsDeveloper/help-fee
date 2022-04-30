import { useEffect, createContext, useState } from "react";
import clienteAxios from '../config/clienteAxios'

const EntidadesContext = createContext()

const EntidadesProvider = ({children}) => {

    const [entidades, setEntidades] = useState([])

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

    return (
        <EntidadesContext.Provider
            value={{
                entidades,
                obtenerEntidades
            }}
        >
            {children}
        </EntidadesContext.Provider>
    )
}

export {EntidadesProvider}

export default EntidadesContext