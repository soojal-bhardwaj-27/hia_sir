import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import BackgroundScene from './components/BackgroundScene';
import HtmlContent from './components/HtmlContent';

function App() {
  return (
    <div style={{ position: 'relative', width: '100%', minHeight: '100vh', backgroundColor: 'var(--bg-color)' }}>
      {/* 3D Background - Fixed behind content */}
      <div style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', zIndex: -1 }}>
        <Canvas
          camera={{ position: [0, 0, 5], fov: 75 }}
          gl={{ antialias: true, alpha: true }}
        >
          <Suspense fallback={null}>
            <BackgroundScene />
          </Suspense>
        </Canvas>
      </div>

      {/* Native Scrolling HTML Content */}
      <div style={{ position: 'relative', zIndex: 1 }}>
        <HtmlContent />
      </div>
    </div>
  );
}

export default App;
