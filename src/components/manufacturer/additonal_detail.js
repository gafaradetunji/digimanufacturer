import RegisterNav from "../registerNav"
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import axios from 'axios'
import Logo from '../../images/image.jpg'
import Document from '../../images/document-upload.jpg'
import RegisterMobileNav from "../registerMobileNav"


const Additional = () => {
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
  
        //   isvalid && navigate('/login')
          console.log(isvalid)
        } else {
          console.error('Login Failed:', response.status);
        }
      } catch (error) {
        console.error('Login Failed:', error);
      }
    //   isvalid && navigate('/verify-mail')
      console.log(isvalid)
    }
  
    return(
        <main className='relative h-[800px] lg:h-[1100px]'>
          <RegisterNav />
          <RegisterMobileNav />
            <div className='get-started text-center'>
            </div>
            <form className='lg:w-[600px] mx-auto register-form' onSubmit={handleSubmit}>
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
              <div className='each-reg mb-2'>
                <label className="form-label">Brief description</label>
                <p className='error'>{formError.location}</p>
                <textarea className='border-2 picker lg:h-[215px]'></textarea>
              </div>
              <div className='each-reg mb-2'>
                <label className="form-label">Documentation</label>
                <div className="d-flex fs-5 items-center gap-x-8 mb-5">
                    <img className="img-thumbnail h-16 w-16 object-cover" src={Logo} alt="Current profile " />
                    <img className="img-thumbnail h-6 w-6 object-cover d-none d-lg-block" src={Document} alt="" />
                    <label for='file-upload' className="fs-6 d-inline pl-5 h-[25px] overflow-hidden">Upload file
                      <input type="file" id="file-upload" name="file" className="w-full text-sm text-slate-500
                        file:mr-4 file:py-2 file:px-4
                        fs-6
                        file:border-0
                        file:hidden
                        file:text-sm file:font-normal"
                        onChange={handleChange}
                      />
                    </label>
                </div>
                </div>
              <button className='rounded-md mt-4 join' onClick={() => {navigate('/manufacturerProduct')}}>Continue</button>
            </form>
            <footer className='reg-footer w-100 text-center absolute bottom-0'>© copyright 2023 Digi</footer>
        </main>
    )
}
export default Additional
