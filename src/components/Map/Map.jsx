import { MapContainer, TileLayer } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'

function Map() {
  return (
    <MapContainer center={[32.7157, -117.1638]} zoom={13} style={{ width: '100%', height: '100%' }}>
      <TileLayer url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png" />
    </MapContainer>
  )
}

export default Map;