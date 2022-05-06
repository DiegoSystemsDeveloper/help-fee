import PreviewCreditCard from "../components/PreviewCreditCard"
import useProductos from "../hooks/useProductos"
import useEntidades from "../hooks/useEntidades"
import { useEffect } from "react"
import Cargando from "../components/Cargando"

const TarjetasCredito = () => {

  const {obtenerProductos, productos} = useProductos()
  const {entidad} = useEntidades()

  useEffect(() => {
    obtenerProductos()
    console.log(productos);
  },[])

  const {nombre} = entidad
  
  return (
    <>
      <h1 className='text-4xl font-black'>Tarjetas de Credito {nombre}</h1>
      <div className='mt-10 rounded-lg grid grid-cols-3 gap-3'>
      {productos.length ? 
        (productos.map(producto => (
          <PreviewCreditCard
            key={producto._id}
            producto={producto}
          />
        )))
        :
        (<Cargando/>)
      }
      </div>
    </>
  )
}

export default TarjetasCredito