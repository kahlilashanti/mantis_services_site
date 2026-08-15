import { Outlet } from 'react-router-dom'
import NavBar from '@src/components/global/NavBar/NavBar'
import Footer from '@src/components/global/Footer/Footer'

function Layout() {
  return (
    <div className="mantis-app">
      <NavBar />
      <Outlet />
      <Footer />
    </div>
  )
}

export default Layout
