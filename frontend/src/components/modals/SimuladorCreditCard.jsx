const SimuladorCreditCard = ({ abrirCerrarModalSimulador, showSimulador }) => {

    const changeShowModal = () => {
        abrirCerrarModalSimulador()
    }

    return (
        <>
            {showSimulador ? (
                <>
                    <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none">
                        <div className="relative w-auto my-6 mx-auto max-w-3xl">
                            <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none">
                                <div className="flex p-5 border-b border-solid border-slate-200 ">
                                    <h3 className="text-3xl  flex-1 text-center uppercase">
                                        Simulador
                                    </h3>
                                </div>
                                <div className="relative flex-auto">
                                    <form action="" className='my-5 bg-white  rounded-lg p-5 mx-10'>
                                        <div className='text-center'>
                                            <label htmlFor="" className='text-gray-600 block text-xl font-bold'>Ingrese el monto</label>
                                            <input type="number" placeholder='Monto' className="w-full mt-3 p-3 border bg-gray-50 rounded-xl" />
                                        </div>
                                        <div className='text-center'>
                                            <label htmlFor="" className='text-gray-600 block text-xl font-bold'>A cuantas cuotas lo piensa pagar</label>
                                            <input type="number" placeholder='cuotas' className="w-full mt-3 p-3 border bg-gray-50 rounded-xl" />
                                        </div>
                                        <div className="flex items-center justify-between mt-5 flex-col">
                                            <input
                                                className="bg-sky-600 my-3 text-white hover:bg-sky-700 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none  transition-all"
                                                type="submit"
                                                value='calcular'
                                                onChange={() => changeShowModal()}
                                            />
                                            <input
                                                className="bg-red-600 my-3 text-white hover:bg-red-700 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none   transition-all"
                                                type="submit"
                                                value='cancelar'
                                                onClick={() => changeShowModal()}
                                            />
                                        </div>
                                    </form>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                </>
            ) : null}
        </>
    )
}

export default SimuladorCreditCard