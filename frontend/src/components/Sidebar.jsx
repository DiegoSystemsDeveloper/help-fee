import useAuth from '../hooks/useAuth'
import { useState, useEffect } from 'react'
import clienteAxios from '../config/clienteAxios'
import PreviewItem from './PreviewItem'
import Cargando from './Cargando'


const Sidebar = () => {

  const { auth } = useAuth()
  const { _id } = auth

  const [items, setItems] = useState([])

  useEffect(() => {
    const obtenerItems = async() => {
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
    obtenerItems()
  }, [])

  console.log(items);
  return (
    <aside className="md:w-80 lg:w-96 px-5 py-10 bg-gray-200">
      <p className="text-xl font-bold">Hola: {auth.nombre}</p>

      {items.length ? 
          items.map(item =>(
            <PreviewItem
              key={item._id}
              item={item}
            />
          ))
            : 
          (
            <h3>No tienes items para revisar</h3>
          )}
    </aside>
  )
}

export default Sidebar