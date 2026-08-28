import { Outlet } from 'react-router-dom'
import NavBar from '@src/components/global/NavBar/NavBar'
import Footer from '@src/components/global/Footer/Footer'
import AmbientField from '@src/components/global/AmbientField/AmbientField'

function Layout() {
  return (
    <div className="mantis-app">
      <AmbientField />
      <div className="mantis-app__content">
        <NavBar />
        <Outlet />
        <Footer />
      </div>
    </div>
  )
}

export default Layout
