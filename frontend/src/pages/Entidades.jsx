import useEntidades from "../hooks/useEntidades"
import PreviewEntidad from "../components/PreviewEntidad";
import { useEffect } from "react";
import Cargando from "../components/Cargando";

const Entidades = () => {
  
  const {entidades, obtenerEntidades} = useEntidades()

  
  useEffect(()=> {
    obtenerEntidades()
    console.log(entidades);
  },[])

  console.log(entidades);

  return (
    <>
      <h1 className='text-4xl font-black text-center'>Entidades Asociadas a Help Fee</h1>
      <div className="bg-white shadow mt-10 rounded-lg ">
        {entidades.length ? 
          entidades.map(entidad =>(
            <PreviewEntidad
              key={entidad._id}
              entidad={entidad}
            />
          ))
            : 
            (<Cargando/>)}
      </div>
    </>
  )
}

export default Entidades