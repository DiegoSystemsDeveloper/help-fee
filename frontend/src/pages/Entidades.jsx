import useEntidades from "../hooks/useEntidades"
import PreviewEntidad from "../components/PreviewEntidad";
import { useEffect } from "react";

const Entidades = () => {
  
  const {entidades, obtenerEntidades} = useEntidades()

  
  useEffect(()=> {
    obtenerEntidades()
    console.log(entidades);
  },[])

  console.log(entidades);

  return (
    <>
      <h1 className='text-4xl font-black'>Entidades Asociadas a Help Fee</h1>
      <div className="bg-white shadow mt-10 rounded-lg">
        {entidades.length ? 
          entidades.map(entidad =>(
            <PreviewEntidad
              key={entidad._id}
              entidad={entidad}
            />
          ))
            : 
          (<p className="text-center text-gray-600 uppercase p-5">Cargando...</p>)}
      </div>
    </>
  )
}

export default Entidades