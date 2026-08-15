import { Link, NavLink } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { brand, navLinks } from '@src/config/mantis'

function NavBar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 64)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`mantis-nav ${scrolled ? 'mantis-nav--scrolled' : 'mantis-nav--hero'}`}>
      <div className="mantis-nav__inner">
        <Link to="/" className="mantis-nav__logo" onClick={() => setMenuOpen(false)}>
          {brand.name}
        </Link>

        <button
          type="button"
          className={`mantis-nav__toggle${menuOpen ? ' is-open' : ''}`}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span />
          <span />
        </button>

        <nav className={`mantis-nav__links${menuOpen ? ' is-open' : ''}`} aria-label="Main navigation">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                `mantis-nav__link${isActive && !link.path.includes('#') ? ' active' : ''}`
              }
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </NavLink>
          ))}
          <Link to="/contact" className="mantis-nav__cta" onClick={() => setMenuOpen(false)}>
            Start a project
          </Link>
        </nav>
      </div>
    </header>
  )
}

export default NavBar
