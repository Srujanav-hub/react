import React from 'react'
import { useState,useLayoutEffect } from 'react'
import { Link } from 'react-router-dom'
import img1 from '../Images/ec2.jpg'
const Home = () => {
    const[data,setdata]=useState([])
    // const[val,setval]=useState([])
    useLayoutEffect(()=>{
      fetch('https://fakestoreapi.com/products').then(response=>response.json()).then(R1=>{
      setdata(R1)
    // setval(R1)
    })
  },[])
  
  return (
    <div>
      
      
    <img src={img1} width='80%' height='400px'/>
    <br/><br/>
    <div className='row'>
      
    {data.map((data1)=> 
        <div className='col-lg-4 col-md-8 col-sm-12'>
    <div class="card shadow-sm">
            <img src={data1.image} height={200} />

            <div class="card-body">
              <h5>{data1.title. slice(0,15)}...</h5>
              <p class="card-text">{data1.description. slice(0,15)}...</p>
              <div class="d-flex justify-content-between align-items-center">
                <div class="btn-group">
            <button type="button" class="btn btn-sm btn-outline-secondary">
                    <Link to={'/services'} class="nav-link px-2 text-secondary">veiw</Link></button>
                </div>
                <small class="text-body-secondary">{}</small>
              </div>
            </div>
          </div>
        <br/>
        </div>
    )}
  
    </div>
    
    
  
    <footer class="my-5 pt-5 text-body-secondary text-center text-small">
    <p class="mb-1">&copy; 2017–2024 Company Name</p>
    <ul class="list-inline">
      <li class="list-inline-item"><a href="#">Privacy</a></li>
      <li class="list-inline-item"><a href="#">Terms</a></li>
      <li class="list-inline-item"><a href="#">Support</a></li>
    </ul>
  </footer>
    </div>
  )
}

export default Home
