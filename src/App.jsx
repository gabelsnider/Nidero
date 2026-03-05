import { Routes, Route, Navigate } from 'react-router-dom';
import Detail from './pages/Detail';
import Home from './pages/Home';
import Map from './pages/Map';

function App() {
  return (
    <div className='App'>
      <h1>Nidero</h1>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/detail' element={<Detail />} />
        <Route path='/map' element={<Map />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </div>
  )
}

export default App