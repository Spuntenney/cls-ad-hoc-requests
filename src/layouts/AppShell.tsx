import { Outlet, useLocation } from 'react-router-dom'
import { Sidebar } from '../components/Sidebar'
import { TopBar } from '../components/TopBar'
import { pageTitles } from '../config'

export function AppShell() {
  const { pathname } = useLocation()
  const title = pageTitles[pathname] ?? 'AdHoc Requests'

  return (
    <div className="app-shell">
      <Sidebar />
      <div className="main">
        <TopBar title={title} />
        <Outlet />
      </div>
    </div>
  )
}
