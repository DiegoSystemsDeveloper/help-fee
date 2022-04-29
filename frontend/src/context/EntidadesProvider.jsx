import { useEffect, createContext, useState } from "react";
import clienteAxios from '../config/clienteAxios'

const EntidadesContext = createContext()

const EntidadesProvider = ({children}) => {

    const [entidades, setEntidades] = useState([])

    useEffect(() => {
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
        obtenerEntidades()
    },[])

    return (
        <EntidadesContext.Provider
            value={{
                entidades
            }}
        >
            {children}
        </EntidadesContext.Provider>
    )
}

export {EntidadesProvider}

export default EntidadesContext