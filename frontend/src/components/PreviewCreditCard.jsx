import {Link} from 'react-router-dom'

const PreviewCreditCard = ({producto}) => {

  const {nombre, descripcion, _id} = producto
  console.log(producto);
  return (
    <div className="block p-6 rounded-lg shadow-lg bg-white max-w-sm">
    <h5 className="text-gray-900 text-xl leading-tight font-black mb-2">{nombre}</h5>
    <p className="text-gray-700 text-base mb-4">
      {descripcion}
    </p>
    <Link to={`${_id}`}>
      <button 
      type="button" 
      className="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs uppercase rounded shadow-md
        hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 
        active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Ver mas</button>
    </Link>
  </div>
  )
}

export default PreviewCreditCard