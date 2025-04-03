import * as React from "react"
import { Link } from "gatsby"
import { useState } from "react"

const Header = ({ siteTitle }) => {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header
      style={{
        margin: `0 auto`,
        padding: `var(--space-4) var(--size-gutter)`,
        display: `flex`,
        alignItems: `center`,
        justifyContent: `space-between`,
        position: `relative`,
      }}
    >
      <Link
        to="/"
        style={{
          fontSize: `var(--font-sm)`,
          textDecoration: `none`,
        }}
      >
        {siteTitle}
      </Link>
      <button
        onClick={() => setMenuOpen(!menuOpen)}
        style={{
          background: `none`,
          border: `none`,
          cursor: `pointer`,
          display: `none`,
          fontSize: `1.5rem`,
        }}
        className="menu-toggle"
      >
        ☰
      </button>
      <nav
        style={{
          display: menuOpen ? `block` : `flex`,
          flexDirection: menuOpen ? `column` : `row`,
          position: menuOpen ? `absolute` : `static`,
          top: menuOpen ? `100%` : `auto`,
          right: menuOpen ? `0` : `auto`,
          background: menuOpen ? `white` : `none`,
          boxShadow: menuOpen ? `0 2px 5px rgba(0, 0, 0, 0.1)` : `none`,
          padding: menuOpen ? `10px` : `0`,
        }}
        className="header-menu"
      >
        <Link to="/contexto" style={{ margin: `0 10px` }}>
          Contexto
        </Link>
        <Link to="/proyectos" style={{ margin: `0 10px` }}>
          Proyectos
        </Link>
        <Link to="/contacto" style={{ margin: `0 10px` }}>
          Contacto
        </Link>
      </nav>
    </header>
  )
}

export default Header
