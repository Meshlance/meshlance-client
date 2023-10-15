import { BrowserRouter, Routes, Route } from 'react-router-dom'

import LandingPage from "./pages/LandingPage"
import AdminPage from './pages/AdminPage'
import ClientsPage from './pages/ClientsPage'
import DevelopersPage from './pages/DevelopersPage'

const App = () => {
  return (
    <BrowserRouter>

        <Routes>
          <Route path='/' element={ <LandingPage /> } />
          <Route path='admin' element={ <AdminPage /> } />
          <Route path='client' element={ <ClientsPage /> } />
          <Route path='developer' element={ <DevelopersPage /> } />
        </Routes>

    </BrowserRouter>
  )
}

export default App