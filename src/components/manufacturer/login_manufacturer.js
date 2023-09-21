import { useState } from "react"
import { Link } from "react-router-dom"
import RegisterNav from "../registerNav"
import { useNavigate } from 'react-router-dom'
import RegisterMobileNav from "../registerMobileNav"
import axios from "axios"

const loginURL = 'https://digi.mjobi.com/manufacturer/login/'

const LoginManufacturer = () => {
  const navigate = useNavigate()
  const [ values, setValues ] = useState({
    email: '',
    password: '',
  })
  const [ formError, setFormError ] = useState({})

  const handleChange = e => {
    setValues(() => ({...values, [e.target.name]: e.target.value}))
  }

  function validateForm() {
    const error = {};
    const emailValidation = /^[a-zA-Z0-9]+@(?:[a-zA-Z0-9]+\.)+[A-Za-z]+$/
    // const isContainsUppercase = /^(?=.*[A-Z])/;
    // const isContainsSymbol = /[-’/`~!#*$@_%+=.,^&(){}[\]|;:”<>?\\]/g
    // const isContainsNumber = /^(?=.*[0-9])/;

    if (values.email === '') {
      error.email = 'Email is required!';
    } else if (!emailValidation.test(values.email)) {
      error.email = 'Email is invalid!';
    }

    if (values.password === '') {
      error.password = 'Password is required';
    }
    // else {
    //   if (!isContainsUppercase.test(values.password)) {
    //     error.password = 'Password must have at least one Uppercase Character.';
    //   }
    //   if (!isContainsSymbol.test(values.password)) {
    //     error.password = 'Password must contain at least one Special Symbol.';
    //   }
    //   if (!isContainsNumber.test(values.password)) {
    //     error.password = 'Password must contain at least one Digit.';
    //   }
    // }

    setFormError({ ...error });
    return Object.keys(error).length < 1;
  };

  const handleSubmit = async (e) => {
    e.preventDefault()
    if(values.email === '' || values.password === ''){
      return validateForm()
    }
    console.log('Values', values)
    const isvalid = validateForm()
    const data = new FormData();
    data.append('email', values.email)
    data.append('password', values.password)

    try{
      const response = await axios.post(loginURL, data)
      console.log(response.data)
      const authToken = response.data.token.access;
      localStorage.setItem('authToken', authToken)
      console.log('Token:', authToken)
      console.log('Login successful');
      isvalid && navigate('/company')
      console.log('Message:', response);
      console.log('Token:', response.data.token.access);
    } catch (error) {
        console.error('Login Failed:', error);
    }
  };

    return(
        <main className='h-[60rem] relative'>
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
              <div className='each-reg'>
                <label className="form-label">Email Address</label>
                <p className='error text-[#df0000] text-[14px]'>{formError.email}</p>
                <input type='text' placeholder='Type In Your Email Address' value={values.email} onChange={handleChange} name='email' className='form-control reg-input'/>
              </div>
              <div className='each-reg'>
                <label className="form-label">Passowrd</label>
                <p className='error text-[#df0000] text-[14px]'>{formError.password}</p>
                <input type='password' placeholder='Enter your password' value={values.password} onChange={handleChange} name='password' className='form-control reg-input'/>
              </div>
                <Link to='/forgotPass' className='forgot-pass no-underline text-[#df0000]'>Forget Password?</Link>
              <button className='form-control join bg-[#df0000]'>Log In</button>
              <p className="mt-4 text-center">Don't have an account? <Link to="/registerman" className="text-[#df0000]">Sign Up</Link></p>
            </form>
            <footer className='reg-footer w-100 text-center mt-[100px] absolute bottom-0 '>© copyright 2023 Digi</footer>
        </main>
    )
}
export default LoginManufacturer
