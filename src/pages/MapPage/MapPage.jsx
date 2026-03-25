import './MapPage.css'
import Map from '@/components/Map/Map'
import { Link } from 'react-router-dom'
import { SidebarInput, Sidebar, SidebarContent, SidebarHeader, SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar';

function MapPage() {
  return (
    <SidebarProvider>
      <div className="map-page">
        <Sidebar collapsible="offcanvas">
          <SidebarHeader>
            <SidebarInput placeholder="Search..." />
          </SidebarHeader>
          <SidebarContent />
        </Sidebar>
        <div className="map-container">
          <div className='link-home'>
            <Link to='/'>Nidero</Link>
          </div>
          <div className="sidebar-trigger">
            <SidebarTrigger />
          </div>
          <Map />
        </div>
      </div>
    </SidebarProvider>
  )
}

export default MapPage;