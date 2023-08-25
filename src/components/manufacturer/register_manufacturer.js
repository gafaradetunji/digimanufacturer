import RegisterNav from "../registerNav"
import { useNavigate } from 'react-router-dom'
import Select from 'react-select'
import RegisterMobileNav from "../registerMobileNav"


const RegisterManufacturer = () => {
    const navigate = useNavigate()
    const options = [
      { value: 'Nigeria', label: 'Nigeria' },
      { value: 'Usa', label: 'Usa' },
      { value: 'United Kingdom', label: 'United Kingdom' }
    ]
  
    return(
        <main className='h-100'>
          <RegisterNav />
          <RegisterMobileNav />
            <div className='get-started text-center'>
            </div>
            <form className='lg:w-[600px] mx-auto register-form font-serif'>
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
                    <Select options={options} placeholder='Choose your location' className="w-full text-[12px] text-[#2D2B4A] ml-3 rounded-md picker"/>
              </label>
              <label className="block py-2 w-[90%]">
                <span className="block text-sm ml-3 my-2 font-semibold text-slate-700">Email Address</span>
                <input type="email" placeholder="Legal Entity" id='email' name='email'
                  className="mt-1 block w-full px-3 ml-3 py-2 bg-white 
                  border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
                "/>
              </label>
              <label className="block py-2 w-[90%]">
                <span className="block text-sm ml-3 my-2 font-semibold text-slate-700">Phone number</span>
                <input type="number" placeholder="Legal Entity" id='number' name='number'
                  className="mt-1 block w-full px-3 ml-3 py-2 bg-white 
                  border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
                "/>
              </label>
              <label className="block py-2 w-[90%]">
                <span className="block text-sm ml-3 my-2 font-semibold text-slate-700">Create a passowrd</span>
                <input type="password" placeholder="Legal Entity" id='password' name='password'
                  className="mt-1 block w-full px-3 ml-3 py-2 bg-white 
                  border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
                "/>
              </label>
              <label className="block py-2 w-[90%]">
                <span className="block text-sm ml-3 my-2 font-semibold text-slate-700">Repeat passowrd</span>
                <input type="password" placeholder="Legal Entity" id='confirmpassword' name='confirmpassword'
                  className="mt-1 block w-full px-3 ml-3 py-2 bg-white 
                  border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
                "/>
              </label>
              <button className='rounded-md mt-4 join' onClick={() => {navigate('/loginman')}}>Sign Up</button>
            </form>
            <footer className='reg-footer w-100 text-center mt-[100px]'>© copyright 2023 Digi</footer>
        </main>
    )
}
export default RegisterManufacturer
