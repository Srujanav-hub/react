import React, { useLayoutEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

const Cart = () => {
 // const pids=useSelector(state=>state.productid)
  const count=useSelector(state=>state.cart)
  var prdid=useSelector(state=>state.productid)
  const dispatch=useDispatch()
  var prdarr=prdid.length>1?prdid.split(','):Array(String(prdid))
  var cartdata=[]
 
  const[data,setdata]=useState([])
  
       useLayoutEffect(()=>{
         fetch('https://fakestoreapi.com/products').then(response=>response.json()).then(R1=>{
        
          setdata(R1)
   
       })
     },[])
     data.forEach(function(x){
      var check=prdarr.indexOf(String(x.id))
      if(check!=-1){
       
        cartdata.push(x)
      }
     })
    
     var finaldata=[]
     cartdata.forEach(function(x){
      let count=0
      prdarr.forEach(function(y){
        if(String(x.id)===y){
          count++
        }
       
      })
      
      let prddetails={id:x.id,title:x.title,description:x.description,price:x.price*count,count:count}
      finaldata.push(prddetails)
    })
    var total=finaldata.map(x=>x.price).reduce((x,acc)=>{
      return x+acc
     },0)
    const [prd_id,setprdid]=useState([])
        const Adding=(pid)=>{
          var prd_arr=prdid.length>1?prdid.split(','):prdid
          prd_id!=''?setprdid((pre)=>pre+','+pid):setprdid((pre)=>pre+pid)
          prdid!=''? dispatch({type:'Add',ids:prdid+','+pid,count:typeof prd_arr==='number'?2:prd_arr.length+1}): dispatch({type:'Add',ids:pid,count:1})
         
        }
         const Remove=(rpid)=>{
          var prd_arr=prdid.split(',')
          var prdcheck=prdid.split(',').indexOf(String(rpid))
          if(prdcheck!=-1){
            prd_arr.splice(prdcheck,1)
          }
          // console.log(prd_arr)
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
       <div class="container">
  <main>
    
    <div class="row g-5">
      <div class="col-md-5 col-lg-4 order-md-last">
        <h4 class="d-flex justify-content-between align-items-center mb-3">
          <span class="text-primary">Your cart</span>
          <span class="badge bg-primary rounded-pill">{count}</span>
        </h4>
        <ul class="list-group mb-3">
          {finaldata.map((x)=>
          <li key={x.id}class="list-group-item d-flex justify-content-between lh-sm">
            <div>
           <h6 class="my-0">{x.title. slice(0,10)}<sup>{x.count}</sup></h6>  
              <small class="text-body-secondary">{x.description.slice(0,15)}</small>
            </div>
            <span class="btn btn-danger" onClick={()=>{Remove(x.id)}}>-</span>
            <span class="text-body-secondary">${x.price}</span>
            <span class="btn btn-success" onClick={()=>{Adding(x.id)}}>+</span>
          </li>
         )}
          
          <li class="list-group-item d-flex justify-content-between">
            <span><b>Total (USD)</b></span>
            <strong>${total}</strong>
          </li>
        </ul>

        
      </div>
      <div class="col-md-7 col-lg-8">
        <h4 class="mb-3">Billing address</h4>
        <form class="needs-validation" onSubmit={()=>alert('order placed')}novalidate>
          <div class="row g-3">
            <div class="col-sm-6">
              <label for="firstName" class="form-label">First name</label>
              <input type="text" class="form-control" id="firstName" placeholder=""  required/>
              <div class="invalid-feedback">
                Valid first name is required.
              </div>
            </div>

            <div class="col-sm-6">
              <label for="lastName" class="form-label">Last name</label>
              <input type="text" class="form-control" id="lastName" placeholder=""  required/>
              <div class="invalid-feedback">
                Valid last name is required.
              </div>
            </div>
           <div class="col-12">
              <label for="email" class="form-label">Email <span class="text-body-secondary">(Optional)</span></label>
              <input type="email" class="form-control" id="email" placeholder="you@example.com"/>
              <div class="invalid-feedback">
                Please enter a valid email address for shipping updates.
              </div>
            </div>
              <div class="col-12">
              <label for="address" class="form-label">Address</label>
              <input type="text" class="form-control" id="address" placeholder="1234 Main St" required/>
              <div class="invalid-feedback">
                Please enter your shipping address.
              </div>
            </div>
          <div class="col-md-5">
              <label for="country" class="form-label">Country</label>
              <select class="form-select" id="country" required>
                <option value="">Choose...</option>
                <option>India</option>
              </select>
              <div class="invalid-feedback">
                Please select a valid country.
              </div>
            </div>

            <div class="col-md-4">
              <label for="state" class="form-label">State</label>
              <select class="form-select" id="state" required>
                <option value="">Choose...</option>
                <option>AP</option>
                <option>TG</option>
                <option>TN</option>
                <option>KL</option>
                <option>KA</option>
                <option>MP</option>
                <option>Up</option>
                <option>DL</option>
                <option>Hp</option>
              </select>
              <div class="invalid-feedback">
                Please provide a valid state.
              </div>
            </div>
                  <div class="col-md-3">
              <label for="zip" class="form-label">Zip</label>
              <input type="text" class="form-control" id="zip" placeholder="" required/>
              <div class="invalid-feedback">
                Zip code required.
              </div>
            </div>
          </div>
       <hr class="my-4"/>
              <div class="form-check">
            <input type="checkbox" class="form-check-input" id="same-address"/>
            <label class="form-check-label" for="same-address">Shipping address is the same as my billing address</label>
          </div>
      <div class="form-check">
            <input type="checkbox" class="form-check-input" id="save-info"/>
            <label class="form-check-label" for="save-info">Save this information for next time</label>
          </div>
          <hr class="my-4"/>
          <h4 class="mb-3">Payment</h4>
                  <div class="my-3">
            <div class="form-check">
              <input id="credit" name="paymentMethod" type="radio" class="form-check-input" checked required/>
              <label class="form-check-label" for="credit">Cash on Delivery</label>
            </div>
            </div>
          <hr class="my-4"/>
<button class="w-100 btn btn-primary btn-lg" type="submit">Place order</button>
        </form>
      </div>
    </div>
  </main>

  <footer class="my-5 pt-5 text-body-secondary text-center text-small">
    <p class="mb-1">&copy; 2017–2024 Company Name</p>
    <ul class="list-inline">
      <li class="list-inline-item"><a href="#">Privacy</a></li>
      <li class="list-inline-item"><a href="#">Terms</a></li>
      <li class="list-inline-item"><a href="#">Support</a></li>
    </ul>
  </footer>
</div>
    </div>
  )
}

export default Cart
