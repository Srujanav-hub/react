import React from 'react'
import { useState,useLayoutEffect } from 'react'
import { useDispatch,useSelector } from 'react-redux'
const Services = () => {
  const pids=useSelector(state=>state.productid)
  const dispatch=useDispatch()
   const[data,setdata]=useState([])
      const[val,setval]=useState([])
      useLayoutEffect(()=>{
        fetch('https://fakestoreapi.com/products').then(response=>response.json()).then(R1=>{
        setdata(R1)
      setval(R1)
      })
    },[])
    let filterdata=[]
  val.forEach(function(x){
  let check=filterdata.indexOf(x.category)
  if(check==-1){
    filterdata.push(x.category)
  }
  })
  const Click=(c1)=>{
  let fdata=val.filter((x)=>x.category==c1)
  setdata(fdata)
  }
    const [prdid,setprdid]=useState([])
    const Adding=(pid)=>{
      var prd_arr=pids.length>1?pids.split(','):pids
      prdid!=''?setprdid((pre)=>pre+','+pid):setprdid((pre)=>pre+pid)
      pids!=''? dispatch({type:'Add',ids:pids+','+pid,count:typeof prd_arr==='number'?2:prd_arr.length+1}): dispatch({type:'Add',ids:pid,count:1})
     
    }
     const Remove=(rpid)=>{
      var prd_arr=pids.split(',')
      var prdcheck=pids.split(',').indexOf(String(rpid))
      if(prdcheck!=-1){
        prd_arr.splice(prdcheck,1)
      }
      console.log(prd_arr)
      var str1=''
      prd_arr.forEach(function(x,index){
        if(index>0){
          str1=str1+','+String(x)
        }
        else{
          str1+=String(x)
        }
        })
        dispatch({type:'Add',ids:str1,count:prd_arr.length})
     }
  return (
    <div>
      <div className='row'>
        
        <div className='col-lg-3 col-md-4 col-sm-12'>
      
        <div class="d-flex flex-column flex-shrink-0 p-3 text-bg-secondary" >
    
    
    <ul class="nav nav-pills flex-column mb-auto">
      {filterdata.map((x)=>
      <li class="nav-item"onClick={()=>{Click(x)}} key={x}>
        <center><h4>{x}</h4><br/><br/></center></li>
      
      )}
      
     

    </ul>
    </div>
    </div>
   
    <div className='col-lg-8 col-md-8 col-sm-12'>
 
  
     <div className='row'>
      {data.map((data1)=> 
          <div className='col-lg-4 col-md-8 col-sm-12'>
      <div class="card shadow-sm">
              <img src={data1.image} height={200}/>
  
              <div class="card-body">
                <h5>{data1.title. slice(0,15)}...</h5>
                <p class="card-text">{data1.description. slice(0,15)}...</p>
                <div class="d-flex justify-content-between align-items-center">
                  <div class="btn-group">
              <button type="button" class="btn btn-sm btn-outline-success" onClick={()=>{Adding(data1.id)
                alert('added to cart')
              }}>
                      ADD</button>
                      <button type="button" class="btn btn-sm btn-outline-danger" onClick={()=>{Remove(data1.id)}}>
                      REMOVE</button>
                  </div>
                  <small class="text-body-secondary">${data1.price}</small>
                </div>
              </div>
            </div>
          <br/>
          </div>
      )}
      
      </div>
      </div>
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

export default Services
