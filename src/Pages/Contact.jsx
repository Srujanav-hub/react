import React from 'react'

const Contact = () => {
  return (
    

<div>
<div className='row'>
  <div className='col-lg-8 col-md-4 col-sm-12'>

  <div class="d-flex flex-column flex-shrink-0 p-3 text-bg-secondary" >


  <div class="b-example-divider">
  <br/>
  
  <center><h6>How can I help?</h6><h3>Contact Us</h3></center>
  
  
  
  
    <form id="form" class="needs-validation" onSubmit={()=>alert('order placed')} novalidate>
      <input type="text" name="FName" class="form-control" placeholder="First Name" required/>
      <div class="invalid-feedback">
                Valid first name is required.
              </div>
      <input type="text" name="LName" class="form-control" placeholder="Last Name" required/>
      <div class="invalid-feedback">
                Valid last name is required.
              </div><br/><br/><br/>
      
      <input type="email" size="47" class="form-control" placeholder="email" required/>
      <div class="invalid-feedback">
                Valid  email is required.
              </div><br/><br/><br/>
      
      <input type="tel" size="47" class="form-control" placeholder="mobile number" required/>
      <div class="invalid-feedback">
                Valid  mobile is required.
              </div><br/><br/><br/>
      <input type="email" size="47" class="form-control" placeholder="Your product details" /><br/><br/><br/>
      <textarea  placeholder="Feedback...Please share your feedback " rows={5} cols={50} required>
      </textarea>
      <div class="invalid-feedback">
              feedback required.
              </div><br/><br/><br/>
     <button class="btn btn-outline-warning d-inline-flex align-items-center" type="button" value="submit"  >
      Submit</button> 
     
      
    </form>
    </div>
</div>
</div>

<div className='col-lg-4 col-md-8 col-sm-12 ' >


<div className='row'>
 
  <div className='col-lg-12 col-md-8 col-sm-12'>
  <br/><br/><br/>
    <div className='span'>
    
<h5 class='text-danger'>Support hours:</h5>
<p>Mon-Fri   5:00am-6:00pm</p>
<p>Exceptions on Holidays</p></div>
       <br/><br/><br/><br/>
       <div className='span'>
       <h3 class='text-success'>Get In Touch</h3>
       <p>Mail us bout your orders or for a general enquiry?</p>
       <button class="btn btn-sm btn-outline-dark">Mail us</button></div>
  
  </div>


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

export default Contact
