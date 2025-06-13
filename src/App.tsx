import './styles/App.css'
import './styles/theme.css'
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home.tsx'
import Designs from './components/Designs.tsx'
import Photos from './components/Photos.tsx'
import Videos from './components/Videos.tsx'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/designs" element={<Designs />} />
      <Route path="/photos" element={<Photos />} />
      <Route path="/videos" element={<Videos />} />
    </Routes>
  )
}

export default App
