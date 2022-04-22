const NuevoPassword = () => {
  return (
    <>
      <h1 className="text-sky-600 font-black text-6xl capitalize">Recupera Tu Acceso A 
        <span className="text-slate-700"> Help Fee</span>
      </h1>
      <form action="" className="my-10 bg-white shadow rounded-lg p-10">
      <div className="my-5">
          <label className="text-gray-600 block text-xl font-bold" htmlFor="password">Password</label>
          <input 
            id="password"
            type="password"
            placeholder="Password"
            className="w-full mt-3 p-3 border bg-gray-50 rounded-xl" 
          />
        </div>
        <div className="my-5">
          <label className="text-gray-600 block text-xl font-bold" htmlFor="password2">Confirmar Password</label>
          <input 
            id="password2"
            type="password"
            placeholder="Confirmar Password"
            className="w-full mt-3 p-3 border bg-gray-50 rounded-xl" 
          />
        </div> 
        <input 
            type="submit"
            value="Guardar Nueva Password"
            className="bg-sky-700 w-full mb-5 py-3 text-white uppercase font-bold rounded
            hover:cursor-pointer hover:bg-sky-800 transition-colors"
          />
      </form>
    </>  
  )
}

export default NuevoPassword