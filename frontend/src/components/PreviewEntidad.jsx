import { Link } from 'react-router-dom'

const PreviewEntidad = ({ entidad }) => {
    const { nombre, _id, descripcion } = entidad

    return (
        <div className='border-b p-5' >
            <Link to={_id}>
                <div className='font-black flex align-center'>
                    <img src="https://www.bancolombia.com/wps/wcm/connect/a6eb93f2-1594-4eae-ad34-1e387d7e4bac/logo-bancolombia+%281%29.png?MOD=AJPERES&CACHEID=ROOTWORKSPACE-a6eb93f2-1594-4eae-ad34-1e387d7e4bac-nAfKfrX" alt="img" className='border-solid border-2 border-sky-500  mr-5 rounded-md h-40' />
                    <section className='flex flex-col text-2xl bg-sky-500 text-white text-center w-full rounded-md h-40 justify-center'>
                        <h2>{nombre}</h2>
                        <h3>{descripcion}</h3>
                    </section>
                </div>
            </Link>
        </div>
    )
}

export default PreviewEntidad