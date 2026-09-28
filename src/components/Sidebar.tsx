import { LogOut, Shield } from 'lucide-react'
import { NavLink } from 'react-router-dom'
import { APP_NAME, logoUrl, sampleNav, sampleUser } from '../config'

export function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="brand">
        <img src={logoUrl} alt="CLS Living" />
        <p className="product-label">{APP_NAME}</p>
      </div>

      <nav className="sidebar-nav" aria-label="Primary">
        {sampleNav.map((item) => {
          const Icon = item.icon
          return (
            <NavLink key={item.to} to={item.to} className="nav-link">
              <Icon size={18} strokeWidth={2} aria-hidden="true" />
              <span>{item.label}</span>
            </NavLink>
          )
        })}
      </nav>

      <footer className="sidebar-footer">
        <div className="user-row">
          <div className="avatar" aria-hidden="true">
            {sampleUser.initial}
          </div>
          <div className="user-meta">
            <div className="user-name">{sampleUser.name}</div>
            <div className="user-role">{sampleUser.role}</div>
          </div>
        </div>

        <NavLink to="/admin" className="nav-link">
          <Shield size={18} strokeWidth={2} aria-hidden="true" />
          <span>Admin</span>
        </NavLink>

        <button
          type="button"
          className="logout"
          onClick={() => {
            window.alert('Logout is a placeholder. Sign-in is not wired up in this shell.')
          }}
        >
          <LogOut size={18} strokeWidth={2} aria-hidden="true" />
          Logout
        </button>
      </footer>
    </aside>
  )
}
