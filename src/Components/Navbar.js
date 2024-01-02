import React from 'react'

function Navbar() {
  return (
    <>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">Todo's</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                <li className="nav-item mx-2">
                  <a className="nav-link active" aria-current="page" to="/">Home</a>
                </li>
                <li className="nav-item mx-2">
                  <a className="nav-link" href="#">About Us</a>
                </li>
                <li className="nav-item mx-2">
                  <a className="nav-link" href="#">Contact Us</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        {/* <Todo /> */}
    </>
  )
}


export default Navbar;