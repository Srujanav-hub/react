import React from 'react'
import img from './Images/ec2.jpeg'
const Login = () => {
  return (
    <div className='div'>
       <form class="offset-md-3 col-4">
    <img class="mb-4" src={img} alt="" width="72" height="57"/>
    <h1 class="h3 mb-3 fw-normal">Please sign in</h1>

    <div class="form-floating">
      <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com"/>
      <label for="floatingInput">Email address</label>
    </div>
    <div class="form-floating">
      <input type="password" class="form-control" id="floatingPassword" placeholder="Password"/>
      <label for="floatingPassword">Password</label>
    </div>
 
    <div class="form-check text-start my-3">
      <input class="form-check-input" type="checkbox" value="remember-me" id="flexCheckDefault"/>
      <label class="form-check-label" for="flexCheckDefault">
        Remember me
      </label>
    </div>
    <button class="btn btn-outline-primary w-100 py-2" type="submit"><a href="C:\Users\DELL\OneDrive\Documents\FRONTEND\Js advanced\Bootstrap\Home.html">Sign in</a></button>
    <p class="mt-5 mb-3 text-body-secondary">&copy; 2017–2024</p>
  </form>
    </div>
  )
}

export default Login
