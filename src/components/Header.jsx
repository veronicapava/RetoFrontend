import React from "react"

const Header = () => {
  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <a className="navbar-brand" href="/">
            Home
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link" href="/createUser">
                  Create user
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/findUser">
                  Find User
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">
                  Update User
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">
                  User List
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header
