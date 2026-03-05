import { Routes, Route, Navigate, Link } from 'react-router-dom';
import DetailPage from './pages/DetailPage/DetailPage';
import HomePage from './pages/HomePage/HomePage';
import MapPage from './pages/MapPage/MapPage';

function App() {
  return (
    <div>
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/detail' element={<DetailPage />} />
      <Route path='/map' element={<MapPage />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
    </div>
  )
}

export default App