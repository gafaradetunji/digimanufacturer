import RegisterNav from "../registerNav"
import { useNavigate, Link } from 'react-router-dom'
import { useState } from "react"
import RegisterMobileNav from "../registerMobileNav"
import axios from "axios"


const SignUpURL = 'https://digi.mjobi.com/manufacturer/signup/'
const RegisterManufacturer = () => {
    const navigate = useNavigate()

    const [ values, setValues ] = useState({
      email: '',
      owner_name: '',
      manufacturer_name: '',
      mobile_number: '',
      password: '',
      nid_number: '',
      shop_logo: '',
    })
    const [ formError, setFormError ] = useState({})
  
    const handleChange = e => {
      setValues(() => ({...values, [e.target.name]: e.target.value}))
    }
  
    const validateForm = () => {
      const error = {}
  
      const emailValidation = /^[a-z0-9]+@(?:[a-z0-9]+\.)+[a-z]+$/
      const numberValidation = /^[0-9]+/
  
      if (values.email === '') {
        error.email = 'Email is required!'
      }
      else if( !emailValidation.test(values.email)){
        error.email = 'Email is invalid!'
      }
      if (values.owner_name === '') {
        error.owner_name = 'Owner"s name is required!'
      }
      if (values.manufacturer_name === '') {
        error.manufacturer_name_name = 'Owner"s name is required!'
      }
      if (values.mobile_number === '') {
        error.mobile_number = 'Number is required!'
      }
      else if( !numberValidation.test(values.mobile_number)){
        error.mobile_number = 'Expecting Numbers only'
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
      if (values.nid_number) {
        error.nid_number = 'NID number is required'
      }
      setFormError({...error})
  
      return Object.keys(error).length < 1
    }

    const handleImageUpload = (e) => {
      const file = e.target.files[0];
      setValues((prevValues) => ({
        ...prevValues,
        shop_logo: file,
      }));
    };
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      if (values.email === '' || values.password === '') {
        return validateForm();
      }
    
      const isvalid = validateForm();
    
      try {
        const response = await axios.post(SignUpURL, {
          email: values.email,
          owner_name: values.owner_name,
          manufacturer_name: values.manufacturer_name,
          mobile_number: values.mobile_number,
          password: values.password,
          nid_number: values.nid_number,
          shop_logo: values.shop_logo,
        }, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        });
    
        if (response.status === 201) {
          console.log('Login successful');
          console.log('Message:', response.data.message);
          console.log('Token:', response.data.token);
    
          !isvalid && navigate('/');
          console.log(isvalid);
        } else {
          console.error('Login Failed:', response.status);
        }
      } catch (error) {
        console.error('error Failed:', error.message);
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
                <span className="block text-sm ml-3 my-2 font-semibold text-slate-700">Email Address</span>
                <p className='error text-[14px] text-[#df0000]'>{formError.email}</p>
                <input type="email" placeholder="Email Address" 
                  id='email' name='email'
                  value={values.email}
                  onChange={handleChange}
                  className="mt-1 block w-full px-3 ml-3 py-2 bg-white 
                  border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
                "/>
              </label>

              <label className="block py-2 w-[90%]">
                <span className="block text-sm ml-3 my-2 font-semibold text-slate-700">What is the owner's name</span>
                <p className='error text-[14px] text-[#df0000]'>{formError.owner_name}</p>
                <input type="text"
                  id="owner_name"
                  name="owner_name"
                  placeholder='owner name'
                  value={values.owner_name}
                  onChange={handleChange}
                  className="mt-1 block w-full px-3 ml-3 py-2 bg-white 
                  border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400"/>
              </label>

              <label className="block py-2 w-[90%]">
                <span className="block text-sm ml-3 my-2 font-semibold text-slate-700">What is the manufacturer_name's name</span>
                <input type="text"
                  id="manufacturer_name"
                  name="manufacturer_name"
                  placeholder='manufacturer name'
                  value={values.manufacturer_name}
                  onChange={handleChange}
                  className="mt-1 block w-full px-3 ml-3 py-2 bg-white 
                  border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400"/>
              </label>

              <label className="block py-2 w-[90%]">
                <span className="block text-sm ml-3 my-2 font-semibold text-slate-700">Phone number</span>
                <p className='error text-[14px] text-[#df0000]'>{formError.mobile_number}</p>
                <input type="number" placeholder="Phone Number" 
                  id='mobile_number' name='mobile_number'
                  value={values.mobile_number}
                  onChange={handleChange}
                  className="mt-1 block w-full px-3 ml-3 py-2 bg-white 
                  border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
                "/>
              </label>
              <label className="block py-2 w-[90%]">
                <span className="block text-sm ml-3 my-2 font-semibold text-slate-700">Passowrd</span>
                <p className='error text-[14px] text-[#df0000]'>{formError.password}</p>
                <input type="password" placeholder="Password" 
                  id='password' name='password'
                  value={values.password}
                  onChange={handleChange}
                  className="mt-1 block w-full px-3 ml-3 py-2 bg-white 
                  border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
                "/>
              </label>
              <label className="block py-2 w-[90%]">
                <span className="block text-sm ml-3 my-2 font-semibold text-slate-700">NID Number</span>
                <input type="number" placeholder="NID Number" 
                  id='nid_number' name='nid_number'
                  value={values.nid_number}
                  onChange={handleChange}
                  className="mt-1 block w-full px-3 ml-3 py-2 bg-white 
                  border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
                "/>
              </label>
              <label className="block py-2 w-[90%]">
                <span className="block text-sm ml-3 my-2 font-semibold text-slate-700">Shop Logo</span>
                <input
                  type="file"
                  id="shop_logo"
                  name="shop_logo"
                  accept="image/*"
                  onChange={(e) => handleImageUpload(e)}
                  className="mt-1 block w-full px-3 ml-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400"
                />
              </label>
              <button className='rounded-md mt-4 join'>Sign Up</button>
              <p className="mt-4 text-center">Don't have an account? <Link to="/" className="text-[#df0000]">Login</Link></p>
            </form>
            <footer className='reg-footer w-100 text-center mt-[100px]'>© copyright 2023 Digi</footer>
        </main>
    )
}
export default RegisterManufacturer
