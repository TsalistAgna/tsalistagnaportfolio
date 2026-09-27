import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'

const nav = [
  { to: '/work', label: 'Product work' },
  { to: '/#approach', label: 'Approach' },
  { to: '/#about', label: 'About' },
]

export default function Navigation() {
  const [open, setOpen] = useState(false)
  const location = useLocation()
  useEffect(() => { setOpen(false) }, [location])
  return <header className="site-header"><div className="site-shell flex items-center justify-between gap-6 py-4 md:py-5">
    <Link to="/" className="brand" aria-label="Nana, home">nana<span className="brand-dot">.</span></Link>
    <button type="button" className="menu-toggle md:hidden" aria-label={open ? 'Close menu' : 'Open menu'} aria-expanded={open} aria-controls="primary-navigation" onClick={() => setOpen(!open)}>{open ? 'Close ×' : 'Menu ☰'}</button>
    <nav id="primary-navigation" aria-label="Main navigation" className={`${open ? 'flex' : 'hidden'} nav-links md:flex`}>
      {nav.map(item => item.to.includes('#') ? <Link key={item.to} to={item.to} className="nav-link">{item.label}</Link> : <NavLink key={item.to} to={item.to} className={({isActive}) => `nav-link ${isActive ? 'nav-link-active' : ''}`}>{item.label}</NavLink>)}
      <Link to="/#contact" className="nav-contact">Let’s talk <span aria-hidden="true">↗</span></Link>
    </nav>
  </div></header>
}
