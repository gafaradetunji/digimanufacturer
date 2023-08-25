import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import axios from 'axios'
import Select from 'react-select'

const Policies = () => {
    const navigate = useNavigate()
    const [ values, setValues ] = useState({
      location: '',
      email: '',
      number: '',
      password: '',
      confirmPassword: '',
    })
    const [ formError, setFormError ] = useState({})
  
    const handleChange = e => {
      setValues(() => ({...values, [e.target.name]: e.target.value}))
    }
  
    const validateForm = () => {
      const error = {}
  
      const emailValidation = /^[a-z0-9]+@(?:[a-z0-9]+\.)+[a-z]+$/
      const numberValidation = /^[0-9]+/
  
      if (values.location === '') {
        error.location = 'Location is required!'
      }
      if (values.email === '') {
        error.email = 'Email is required!'
      }
      else if( !emailValidation.test(values.email)){
        error.email = 'Email is invalid!'
      }
      if (values.number === '') {
        error.number = 'Number is required!'
      }
      else if( !numberValidation.test(values.number)){
        error.number = 'Expecting Numbers only'
      }
      else if(values.number.length !== 11){
        error.number = 'Must be 11 Digits here'
      }
      const isWhitespace = /^(?=.*\s)/;
      if (isWhitespace.test(values.password)) {
        error.password = 'Password must not contain Whitespaces.'
      }
      const isContainsUppercase = /^(?=.*[A-Z])/;
      if (!isContainsUppercase.test(values.password)) {
        error.password = "Password must have at least one Uppercase Character.";
      }
      const isContainsLowercase = /^(?=.*[a-z])/;
      if (!isContainsLowercase.test(values.password)) {
        error.password = "Password must have at least one Lowercase Character.";
      }
      const isContainsNumber = /^(?=.*[0-9])/;
      if (!isContainsNumber.test(values.password)) {
        error.password = "Password must contain at least one Digit.";
      }
      const isContainsSymbol = /[-’/`~!#*$@_%+=.,^&(){}[\]|;:”<>?\\]/g
      if (!isContainsSymbol.test(values.password)) {
        error.password = "Password must contain at least one Special Symbol.";
      }
      if (values.password !== values.confirmPassword) {
        error.confirmPassword = 'Password does not match'
      }
      setFormError({...error})
  
      return Object.keys(error).length < 1
    }
  
    const handleSubmit = async (e) => {
      e.preventDefault()
      console.log('Values', values)
      const isvalid = validateForm()
      try{
        const response = await axios.post('', 
        {
          email: values.email,
          password: values.password //qwertyuiop1234$A
        })
        if (response.status === 202) {
          console.log('Login successful');
          console.log('Message:', response.data.message);
          console.log('Token:', response.data.token);
  
          isvalid && navigate('/login')
          console.log(isvalid)
        } else {
          console.error('Login Failed:', response.status);
        }
      } catch (error) {
        console.error('Login Failed:', error);
      }
      isvalid && navigate('/verify-mail')
      console.log(isvalid)
    }
    const options = [
      { value: 'Nigeria', label: 'Nigeria' },
      { value: 'Usa', label: 'Usa' },
      { value: 'United Kingdom', label: 'United Kingdom' }
    ]
  
    return(
        <main className='h-100 mt-[50px]'>
          <div className=''>
                <div className=''>
                    <div className='all-view'>
                        <Link to={`/shipping`} className='back-track d-flex align-items-center justify-content-between'>
                            <img src={require('../../images/back-track.jpg')} alt='' className='back-img'/>
                            <p>Back</p>
                        </Link>
                    </div>
                </div>
                <p className='pl-12 mt-4 font-normal'>Add Products</p>
            </div>
            <form className='lg:w-[600px] mx-auto register-form' onSubmit={handleSubmit}>
              <div className="mobile-personal flex mb-20 justify-between px-3 text-center text-[12px] font-bold">
                <div>
                  <input type="radio" />
                  <p className="p-text">Product Information</p>
                </div>
                <div>
                  <input type="radio" />
                  <p className="">Pricing and Shipping</p>
                </div>
                <div>
                  <input type="radio" />
                  <p className="">Additional Details and Policies </p>
                </div>
              </div>
              <div className='each-reg mb-2'>
                <label className="form-label">Product Title</label>
                <p className='error'>{formError.email}</p>
                <input type='text' placeholder='Type In Your desired product name' name='email' className='form-control reg-input' value={values.email} onChange={handleChange}/>
              </div>
              <div className='each-reg mb-2'>
                <label className="form-label">Do you handle Shipping ?</label>
                <p className='error'>{formError.number}</p>
                <input type='text' placeholder='Type In Your Phone Number' name='number' className='form-control reg-input' value={values.number} onChange={handleChange}/>
              </div>
              <div className='each-reg mb-2'>
                <label className="form-label">Category</label>
                <p className='error'>{formError.location}</p>
                <Select options={options} placeholder='Choose your location' className="w-[92%] text-[12px] text-[#2D2B4A] ml-3 rounded-md"/>
              </div>
                <div className='each-reg mb-2'>
                <label className="form-label">Sub Category</label>
                <p className='error'>{formError.location}</p>
                <Select options={options} placeholder='Choose your location' className="w-[92%] text-[12px] text-[#2D2B4A] ml-3 rounded-md"/>
              </div>
              <button className='form-control join' onClick={() => {navigate('')}}>continue</button>
            </form>
            <footer className='reg-footer w-100 text-center mt-[100px]'>© copyright 2023 Digi</footer>
        </main>
    )
}
export default Policies
