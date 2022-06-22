import { Link } from 'react-router-dom'

const PreviewCreditCard = ({ producto }) => {

  const { nombre, descripcion, _id } = producto
  console.log(producto);
  return (
    <div className="flex flex-col justify-between p-6 rounded-lg shadow-lg bg-white max-w-sm">
      <h3 className="text-gray-900 text-3xl leading-tight font-bold mb-2">{nombre}</h3>
      <p className="text-gray-700 text-base text-xl mb-4">{descripcion}</p>
      <Link to={`${_id}`}>
        <button
          type="button"
          className="px-6 py-2.5 bg-sky-600 text-white font-medium text-xs uppercase rounded shadow-md
        hover:bg-sky-700 hover:shadow-lg focus:bg-sky-700 focus:shadow-lg focus:outline-none focus:ring-0 
        active:bg-sky-800 active:shadow-lg transition">Ver más</button>
      </Link>
    </div>
  )
}

export default PreviewCreditCard