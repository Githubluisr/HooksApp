import { Navigate, Route, Routes } from "react-router-dom"
import { HomePage } from './HomePage'
import { LoginPage } from './LoginPage'
import { AboutPage } from './AboutPage'
import { Navbar } from "./Navbar"
import { UserProvider } from "./context/UserProvider"

export const MainApp = () => {

  return (
    <UserProvider>
      
      <Navbar />
      
      <Routes>
        <Route path='/' element={ <HomePage /> }/>
        <Route path='about' element={ <AboutPage /> }/>
        <Route path='login' element={ <LoginPage /> }/>
        
        {/* Es el default. Con esto indidamos que si cualquier ruta que no caiga en las anteriores, 
        literalmente, navegue al path indicado */}
        <Route path='/*' element= { <Navigate to='/about' /> } />
      </Routes>

    </UserProvider>
  )
}
