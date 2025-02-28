import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
const Navbar = () => {
  const count=useSelector(state=>state.cart)
  return (
    <div>
     <header class="p-3 text-bg-dark">
    <div class="container">
      <div class="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
       

        <ul class="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
          <li class="nav-link px-2 text-danger"><h3>SHOOPINGSTORE</h3></li>
          <li><Link to={'/'} class="nav-link px-2 text-white">Home</Link></li>
          <li><Link to={'/service'} class="nav-link px-2 text-white">Services</Link></li>
          <li><Link to={'/aboutus'} class="nav-link px-2 text-white">Aboutus</Link></li>
         
          <li><Link to={'/contact'} class="nav-link px-2 text-white">Contact</Link></li>
        </ul>
        <div>
            <Link to={'/cart'} class="nav-link px-2 text-white"><button type="button" class="btn btn-warning">Cart<sup>{count}</sup></button></Link>
        </div>
       
        
         
        </div>
      </div>
   
  </header>
    </div>
  )
}

export default Navbar
