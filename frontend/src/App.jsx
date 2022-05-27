import {BrowserRouter, Routes, Route} from 'react-router-dom'

import AuthLayout from './layouts/AuthLayout'
import RutaPrivada from './layouts/RutaPrivada'

import Login from './pages/Login'
import Registrar from './pages/Registrar'
import OlvidePassword from './pages/OlvidePassword'
import NuevoPassword from './pages/NuevoPassword'
import ConfirmarCuenta from './pages/ConfirmarCuenta'
import {AuthProvider} from './context/AuthProvider'
import { EntidadesProvider } from './context/EntidadesProvider'
import { ProductosProvider } from './context/ProductosProvider'
import Entidades from './pages/Entidades'
import Entidad from './pages/Entidad'
import TarjetasCredito from './pages/TarjetasCredito'
import TarjetaCredito from './pages/TarjetaCredito'

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>    
        <EntidadesProvider>
          <ProductosProvider>
            <Routes>
              <Route  path='/' element={<AuthLayout/>}>
                <Route index element={<Login/>}/>
                <Route path='registrar' element={<Registrar/>}/>
                <Route path='olvide-password' element={<OlvidePassword/>}/>
                <Route path='olvide-password/:token' element={<NuevoPassword/>}/>
                <Route path='confirmar/:id' element={<ConfirmarCuenta/>}/>
              </Route>
              <Route path='/entidades' element={<RutaPrivada/>}>
                <Route index element={<Entidades/>}/>
                <Route path=':id' element={<Entidad/>}/>
                <Route path=':id/tarjetas-de-credito' element={<TarjetasCredito/>}/>
                <Route path=':id/tarjetas-de-credito/:id' element={<TarjetaCredito/>}/>
              </Route>
            </Routes>
          </ProductosProvider>
        </EntidadesProvider>
      </AuthProvider> 
    </BrowserRouter>
  )
}

export default App
