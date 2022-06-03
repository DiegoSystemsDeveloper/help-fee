import { useState } from 'react'
import Alerta from '../Alerta';
import swal from 'sweetalert'
import clienteAxios from '../../config/clienteAxios';
import useAuth from '../../hooks/useAuth';

const ContactoModal = ({ abrirCerrarModalContactar, showContacto, id}) => {

    const [telefono, setTelefono] = useState('')
    const [alerta, setAlerta] = useState({})

    const { auth } = useAuth()

    const {_id} = auth
    console.log(_id);

    const changeShowModal = () => {
        abrirCerrarModalContactar()
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        if (!(telefono.length === 10)) {
            setAlerta({
                msg: 'Revise los campos',
                error: true
            })
            return
        }
        try {
            const token = sessionStorage.getItem('token')
            if (!token) return
            const config = {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`
                }
            }

            const bodyUser = {
                id: _id,
                telefono
            }

            const bodyItem = {
                producto: id,
                usuario: _id,
                estado: 'En Revision'
            }
            
            await clienteAxios.put(`/usuarios/actualizar/${_id}`, bodyUser, config)
            await clienteAxios.post(`/items/item`, bodyItem, config)

        } catch (error) {
            console.log(error);
        }
        changeShowModal()
        swal("Operacion Exitosa!", "Se ha enviado una solicitud!", "success");
    }

    const { msg } = alerta

    console.log(telefono);

    


    return (
        <>
            {showContacto ? (
                <>
                    <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none">
                        <div className="relative w-auto my-6 mx-auto max-w-3xl">
                            <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none">
                                <div className="flex p-5 border-b border-solid border-slate-200 ">
                                    <h3 className="text-3xl  flex-1 text-center uppercase">
                                        Siguiente Paso
                                    </h3>
                                </div>
                                <div className="relative flex-auto">
                                </div>
                                <form action="" className='my-5 bg-white  rounded-lg p-5 mx-10' onSubmit={handleSubmit}>
                                    {msg && <Alerta alerta={alerta} />}
                                    <div>
                                        <label className='text-gray-600 block text-xl font-bold'>Ingrese su numero de telefono</label>
                                        <input
                                            type="number"
                                            placeholder='Numero de telefono'
                                            className="w-full mt-3 p-3 border bg-gray-50 rounded-xl"
                                            value={telefono}
                                            onChange={e => { setTelefono(e.target.value) }}
                                        />
                                    </div>
                                    <div className="flex items-center justify-between mt-5 ">
                                        <input
                                            className="bg-green-600 text-white hover:bg-sky-700 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none  transition-all"
                                            type="submit"
                                            value='Enviar'
                                        />
                                        <input
                                            className="bg-red-600 text-white hover:bg-red-700 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none   transition-all"
                                            type="submit"
                                            value='cancelar'
                                            onClick={() => changeShowModal()}
                                        />
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                </>
            ) : null}
        </>
    )
}

export default ContactoModal