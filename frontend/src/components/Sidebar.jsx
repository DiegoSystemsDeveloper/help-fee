import useAuth from '../hooks/useAuth'
import { useEffect } from 'react'
import useProductos from '../hooks/useProductos'
import PreviewItem from './PreviewItem'

const Sidebar = () => {

  const { obtenerItems, items } = useProductos()
  const { auth } = useAuth()
  const { _id } = auth

  useEffect(() => {
    obtenerItems(_id)
  }, [])

  console.log(items);
  return (
    <aside className="md:w-80 lg:w-96 px-5 py-10 bg-gray-200 overflow-y-auto h-screen">
      <p className="text-xl font-bold ">Hola: {auth.nombre}</p>

      {items.length ?
        items.map(item => (
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