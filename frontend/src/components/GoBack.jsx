import { useNavigate } from "react-router-dom"
import {MdOutlineArrowBack} from 'react-icons/md'

const GoBack = () => {

    const history = useNavigate()

  return (
    <button 
            onClick={() => history(-1)} 
            className=' float-left mr-3 text-white bg-sky-700 hover:bg-sky-800 focus:ring-4 focus:outline-none focus:ring-sky-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center mr-2 dark:bg-sky-600 dark:hover:bg-sky-700 dark:focus:ring-blue-800'
        ><MdOutlineArrowBack/></button>
  )
}

export default GoBack