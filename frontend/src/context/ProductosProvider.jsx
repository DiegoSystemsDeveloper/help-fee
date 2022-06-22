import { createContext, useState } from "react"
import clienteAxios from "../config/clienteAxios"

const ProductosContext = createContext()

const ProductosProvider = ({ children }) => {

  const [productos, setProductos] = useState([])
  const [producto, setProducto] = useState({})
  const [items, setItems] = useState([])

  const obtenerProductos = async () => {
    try {
      const token = sessionStorage.getItem('token')
      if (!token) return
      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`
        }
      }
      const { data } = await clienteAxios('/productos/tarjeta-de-credito', config)
      setProductos(data)
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  }

  const obtenerProducto = async (id) => {
    try {
      const token = sessionStorage.getItem('token')
      if (!token) return
      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`
        }
      }
      const { data } = await clienteAxios(`/productos/tarjeta-de-credito/${id}`, config)
      setProducto(data)
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  }

  const obtenerItems = async (_id) => {
    try {
      const token = sessionStorage.getItem('token')
      if (!token) return

      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`
        }
      }
      const { data } = await clienteAxios(`/items/${_id}`, config)
      setItems(data)
    } catch (error) {
      console.log(error);
    }
  }

  const crearItem = item => {
    setItems([...items, item])
  }

  return (
    <ProductosContext.Provider
      value={{
        obtenerProductos,
        productos,
        obtenerProducto,
        producto,
        obtenerItems,
        items,
        crearItem
      }}
    >
      {children}
    </ProductosContext.Provider>
  )
}

export { ProductosProvider }

export default ProductosContext