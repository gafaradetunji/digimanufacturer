import RegisterNav from "../registerNav"
import { useNavigate, Link } from 'react-router-dom'
import Select from 'react-select'
import { useState } from "react"
import RegisterMobileNav from "../registerMobileNav"
import axios from "axios"


const SignUpURL = 'https://digi.mjobi.com/manufacturer/signup/'
const RegisterManufacturer = () => {
    const navigate = useNavigate()
    const options = [
      { value: 'Nigeria', label: 'Nigeria' },
      { value: 'Usa', label: 'Usa' },
      { value: 'United Kingdom', label: 'United Kingdom' }
    ]

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
        const response = await axios.post(SignUpURL, 
        {
          email: values.email,
          password: values.password 
        })
        if (response.status === 202) {
          console.log('Login successful');
          console.log('Message:', response.data.message);
          console.log('Token:', response.data.token);
  
          isvalid && navigate('/')
          console.log(isvalid)
        } else {
          console.error('Login Failed:', response.status);
        }
      } catch (error) {
        console.error('Login Failed:', error);
      }
    }
  
    return(
        <main className='h-100'>
          <RegisterNav />
          <RegisterMobileNav />
            <div className='get-started text-center'>
            </div>
            <form className='lg:w-[600px] mx-auto register-form font-serif' onSubmit={handleSubmit}>
              <div className="mobile-personal flex mb-20 justify-between px-3 text-center text-[12px] font-bold">
                <div>
                  <input type="radio" />
                  <p className="p-text">Personal Information</p>
                </div>
                <div>
                  <input type="radio" />
                  <p className="">Business/Company’s details</p>
                </div>
                <div>
                  <input type="radio" />
                  <p className="">Additional Details</p>
                </div>
              </div>
              <label className="block py-2 w-[90%]">
                    <span className="block text-sm ml-3 my-2 font-semibold text-slate-700">What is your location</span>
                    <p className='error'>{formError.location}</p>
                    <Select options={options}
                      name="location"
                      placeholder='Choose your location'
                      value={values.location}
                      onChange={handleChange}
                      className="w-full text-[12px] text-[#2D2B4A] ml-3 rounded-md picker"/>
              </label>
              <label className="block py-2 w-[90%]">
                <span className="block text-sm ml-3 my-2 font-semibold text-slate-700">Email Address</span>
                <input type="email" placeholder="Legal Entity" 
                  id='email' name='email'
                  value={values.email}
                  onChange={handleChange}
                  className="mt-1 block w-full px-3 ml-3 py-2 bg-white 
                  border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
                "/>
              </label>
              <label className="block py-2 w-[90%]">
                <span className="block text-sm ml-3 my-2 font-semibold text-slate-700">Phone number</span>
                <input type="number" placeholder="Legal Entity" 
                  id='number' name='number'
                  value={values.number}
                  onChange={handleChange}
                  className="mt-1 block w-full px-3 ml-3 py-2 bg-white 
                  border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
                "/>
              </label>
              <label className="block py-2 w-[90%]">
                <span className="block text-sm ml-3 my-2 font-semibold text-slate-700">Create a passowrd</span>
                <input type="password" placeholder="Legal Entity" 
                  id='password' name='password'
                  value={values.password}
                  onChange={handleChange}
                  className="mt-1 block w-full px-3 ml-3 py-2 bg-white 
                  border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
                "/>
              </label>
              <label className="block py-2 w-[90%]">
                <span className="block text-sm ml-3 my-2 font-semibold text-slate-700">Repeat passowrd</span>
                <input type="password" placeholder="Legal Entity" 
                  id='confirmpassword' name='confirmpassword'
                  value={values.confirmPassword}
                  onChange={handleChange}
                  className="mt-1 block w-full px-3 ml-3 py-2 bg-white 
                  border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
                "/>
              </label>
              <button className='rounded-md mt-4 join'>Sign Up</button>
              <p className="mt-4 text-center">Don't have an account? <Link to="/" className="text-[#df0000]">Login</Link></p>
            </form>
            <footer className='reg-footer w-100 text-center mt-[100px]'>© copyright 2023 Digi</footer>
        </main>
    )
}
export default RegisterManufacturer
