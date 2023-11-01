import React from 'react'
import { Link } from 'react-router-dom'

const NavbarSection = () => {
  return (
    <>
    <header>
    <nav class="navbar navbar-expand-lg" id="NavbarSection">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">My ToDo List App</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mb-2 mb-lg-0 m-auto">
              <li class="nav-item">
                <Link class="nav-link" aria-current="page" to="/">Home</Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/mytask">My Task</Link>
              </li>

              <li class="nav-item">
                <Link class="nav-link" to="#">Section B</Link>
              </li>

              <li class="nav-item">
                <a class="nav-link" href="#">About Us</a>
              </li>

              <li class="nav-item">
                <a class="nav-link" href="#">Contact Us</a>
              </li>              
            </ul>            
          </div>
        </div>
      </nav>
    </header>
    </>
  )
}

export default NavbarSection