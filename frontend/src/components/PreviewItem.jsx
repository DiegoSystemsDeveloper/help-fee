import { useState, useEffect } from 'react'
import clienteAxios from '../config/clienteAxios'
import { AiFillEye } from 'react-icons/ai'

const PreviewItem = ({ item }) => {

  const [producto, setProducto] = useState({})

  useEffect(() => {
    const obtenerProducto = async () => {
      try {
        const token = sessionStorage.getItem('token')
        if (!token) return

        const config = {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`
          }
        }
        const { data } = await clienteAxios(`/productos/tarjeta-de-credito/${item.producto}`, config)
        setProducto(data)
      } catch (error) {
        console.log(error);
      }
    }
    obtenerProducto()
  }, [])

  const { nombre, descripcion } = producto

  console.log(item);
  return (
    <>
      {producto &&
        <div className="max-w-xs rounded overflow-hidden shadow-lg my-2 mt-10 border-t bg-sky-600 text-white">
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">{nombre}</div>
            <p className="text-base">
              {descripcion}
            </p>
          </div>
          <div className="px-4 py-4">
            <span className="inline-block bg-grey-lighter rounded-full px-3 py-1  font-semibold  mr-2 flex-row flex items-center">
              {item.estado}
              <div className='ml-3'><AiFillEye /></div>
            </span>
          </div>
        </div>
      }
    </>
  )
}

export default PreviewItem