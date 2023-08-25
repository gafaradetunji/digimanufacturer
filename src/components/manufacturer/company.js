import RegisterNav from "../registerNav"
import { Link, useNavigate } from 'react-router-dom'
import Select from 'react-select'


const Company = () => {
    const navigate = useNavigate()
    const options = [
      { value: 'Nigeria', label: 'Nigeria' },
      { value: 'Usa', label: 'Usa' },
      { value: 'United Kingdom', label: 'United Kingdom' }
    ]
  
    return(
        <main className='h-100'>
          <RegisterNav />
          <nav className='navbar navbar-expand-lg register-desk'>
            <div className='register container-fluid'>
                <p className='finance'>
                  <Link to={`/`} className='navbar-brand a-register'>
                      <span className='dig'>Digi</span>
                      <img src={require('../../images/logo2.jpg')} alt='' className='img-register'/>
                  </Link>
                </p>
                <Link to='#top' className='navbar-list'>Be a manufacutrer</Link>
                <Link to='#top' className='navbar-list'>Contact Us</Link>
            </div>
          </nav>
            <div className='get-started text-center'>
            </div>
            <form className='lg:w-[600px] mx-auto register-form text-[12px] font-serif'>
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
                    <span className="block text-sm ml-3 my-2 font-semibold text-slate-700">Company’s Name</span>
                    <Select options={options} placeholder='Choose your location' className="w-full text-[12px] text-[#2D2B4A] ml-3 rounded-md picker"/>
              </label>
              <label className="block py-2 w-[90%]">
                <span className="block text-sm ml-3 my-2 font-semibold text-slate-700">Legal Entity</span>
                <input type="password" placeholder="Legal Entity" id='legal' name='legal'
                  className="mt-1 block w-full px-3 ml-3 py-2 bg-white 
                  border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
                "/>
              </label>
              <label className="block py-2 w-[90%]">
                <span className="block text-sm ml-3 my-2 font-semibold text-slate-700">Category or Industrial sector</span>
                <input type="password" placeholder="Legal Entity" id='industrial' name='industrial'
                  className="mt-1 block w-full px-3 ml-3 py-2 bg-white 
                  border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
                "/>
              </label>
              <label className="block py-2 w-[90%]">
                <span className="block text-sm ml-3 my-2 font-semibold text-slate-700">Business Registration or TAX ID</span>
                <input type="password" placeholder="Legal Entity" id='business' name='business'
                  className="mt-1 block w-full px-3 ml-3 py-2 bg-white 
                  border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
                "/>
              </label>
              <label className="block py-2 w-[90%]">
                <span className="block text-sm ml-3 my-2 font-semibold text-slate-700">Business Address</span>
                <input type="password" placeholder="Legal Entity" id='address' name='address'
                  className="mt-1 block w-full px-3 ml-3 py-2 bg-white 
                  border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
                "/>
              </label>
              <button className='rounded-md mt-4 join' onClick={() => {navigate('/addition')}}>Continue</button>
            </form>
            <footer className='reg-footer w-100 text-center mt-20'>© copyright 2023 Digi</footer>
        </main>
    )
}
export default Company
