import { createContext, useState } from "react"
import clienteAxios from "../config/clienteAxios"

const ProductosContext = createContext()

const ProductosProvider = ({children}) => {

  const [productos, setProductos] = useState([])
  const [producto, setProducto] = useState({})

  const obtenerProductos = async() => {
    try {
      const token = sessionStorage.getItem('token')
          if(!token) return
            const config = {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`
                }
            }
            const {data} = await clienteAxios('/productos/tarjeta-de-credito', config)
            setProductos(data)
            console.log(data);
    } catch (error) {
      console.log(error);
    }
  }

  const obtenerProducto = async (id) => {
    try {
      const token = sessionStorage.getItem('token')
          if(!token) return
            const config = {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`
                }
            }
            const {data} = await clienteAxios(`/productos/tarjeta-de-credito/${id}`, config)
            setProducto(data)
            console.log(data);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <ProductosContext.Provider
        value={{
          obtenerProductos,
          productos,
          obtenerProducto,
          producto
        }}
    >
    {children}
    </ProductosContext.Provider>
  )
}

export{ProductosProvider}

export default ProductosContext