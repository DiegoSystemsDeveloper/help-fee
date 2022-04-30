import {Link} from 'react-router-dom'

const PreviewEntidad = ({entidad}) => {
    const {nombre, _id, descripcion} = entidad
    
  return (
    <div className='border-b p-5'>
        <Link
            to={`${_id}`}
            className="flex flex-col items-center bg-white rounded-lg border shadow-md md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
        >
            <img className="object-cover w-full h-96 rounded-t-lg md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" src="https://www.valoraanalitik.com/wp-content/uploads/2021/04/Bancolombia1.jpg"></img>
            <div className="flex flex-col justify-between p-4 leading-normal">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{nombre}</h5>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{descripcion}</p>
            </div>
        </Link>
    </div>
  )
}

export default PreviewEntidad