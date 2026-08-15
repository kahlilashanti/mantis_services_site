import { Routes, Route } from 'react-router-dom'
import Layout from '@src/components/global/Layout/Layout'
import Home from '@src/components/views/Home/Home'
import Work from '@src/components/views/Work/Work'
import About from '@src/components/views/About/About'
import Contact from '@src/components/views/Contact/Contact'

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/work" element={<Work />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Route>
    </Routes>
  )
}

export default App
