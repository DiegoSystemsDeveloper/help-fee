import { useEffect } from "react"
import useEntidades from "../hooks/useEntidades"
import { useParams } from "react-router-dom"
import EntidadComponent from "../components/EntidadComponent"
import Cargando from "../components/Cargando"

const Entidad = () => {

  const {id} = useParams()

  const {obtenerEntidad, entidad, cargando} = useEntidades()

  useEffect(() => {
    
    obtenerEntidad(id)
    
  }, [])

  return (
    <div>{cargando ? 

      (<Cargando/>)
      :
      (<EntidadComponent
        entidad={entidad}
      />)}
    </div>
  )
}

export default Entidad