import { StrictMode, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/App.css'
import App from './App.tsx'
import { BrowserRouter as Router } from 'react-router-dom'
import Navbar from './components/Navbar.tsx'
import { Canvas } from '@react-three/fiber'
import CustomCursor from './components/CustomCursor.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Router>
      <Suspense>
        {/* Main content */}
        <Navbar />
        <App />
        
        {/* Canvas overlay on top */}
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          pointerEvents: 'none', // Allows clicks to pass through
          zIndex: 999, // Lower than navbar
          background: 'transparent'
        }}>
          <Canvas 
            camera={{ position: [0, 0, 5] }}
            style={{ 
              background: 'transparent',
              width: '100%',
              height: '100%'
            }}
            gl={{ 
              alpha: true,
              antialias: true,
              premultipliedAlpha: false
            }}
          >
            <CustomCursor/>
          </Canvas>
        </div>
      </Suspense>
    </Router>
  </StrictMode>,
)
