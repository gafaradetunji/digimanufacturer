import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import axios from 'axios'
import Logo from '../../images/image.jpg'
import Document from '../../images/document-upload.jpg'


const EditManufacturerProduct = () => {
    const navigate = useNavigate()
    const [ values, setValues ] = useState({
      title: '',
      category: '',
      size: '',
      price:'',
      countInStock:'',
      available:'',
      image: '',
      description: ''
    })

    const handleChange = e => {
      setValues(() => ({...values, [e.target.name]: e.target.value}))
    }

    const handleSubmit = async (e) => {
      e.preventDefault()
      const token = localStorage.getItem('authToken')
      if (token){
        const config = {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      try{
        const response = await axios.post('https://digi.mjobi.com/manufacturer/product/', config,
        {
          title: values.title,
          category: values.category,
          size: values.size,
          price:values.price,
          countInStock:values.countInStock,
          available:values.available,
          image: values.image,
          description: values.description
        })
        if (response.status === 202) {
          console.log('Product Added');
          console.log('Message:', response.data.message);

        } else {
          console.error('Failed:', response.status);
        }
      } catch (error) {
        console.error('Failed:', error);
      }
    }
    else{
      console.log('product not added an error occured')
    }

    }

    return(
        <main className='h-100 mt-[50px]'>
          <div className=''>
                <div className=''>
                    <div className='all-view'>
                        <Link to={`/manufacturerProduct`} className='back-track d-flex align-items-center justify-content-between'>
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
              <input type='text' placeholder='Title of your product' name='title' className='form-control reg-input' value={values.title} onChange={handleChange}/>
              </div>
              <div className='each-reg mb-2'>
                <label className="form-label">Product Category</label>
                <input type='text' placeholder='Type In Your desired product category' name='category' className='form-control reg-input' value={values.category} onChange={handleChange}/>
              </div>
              <div className='each-reg mb-2'>
                <label className="form-label">Size</label>
                <input type='text' placeholder='Size' name='size' className='form-control reg-input' value={values.size} onChange={handleChange}/>
              </div>
              <div className='each-reg mb-2'>
                <label className="form-label">Sub Category</label>
                <input type='text' placeholder='price' name='price' className='form-control reg-input' value={values.price} onChange={handleChange}/>
              </div>
              <div className='each-reg mb-2'>
                <label className="form-label">Unit Available</label>
                <input type='text' placeholder='Unit available' name='available' className='form-control reg-input' value={values.available} onChange={handleChange}/>
              </div>
              <div className='each-reg mb-2'>
                <label className="form-label">Add product Description</label>
                <textarea className='border-2 w-[95%] h-[100px] lg:h-[215px]' name='description'onChange={handleChange} value={values.description}></textarea>
              </div>
              <div className='each-reg mb-2'>
                <label className="form-label">Product Image</label>
                <div className="flex items-center gap-x-8">
                    <img class="h-16 w-16 object-cover" src={Logo} alt="Current profile " />
                    <img class="h-6 w-6 object-cover" src={Document} alt="" />
                    <label for='file-upload' className="text-[14px] pl-5 h-[25px] overflow-hidden">Upload file
                        <input type="file" id="file-upload" name="file" className="w-full text-sm text-slate-500
                            file:mr-4 file:py-2 file:px-4
                            file:border-0
                            file:hidden
                            file:text-sm file:font-normal
                            hover:file:bg-violet-100"
                            onChange={handleChange}
                        />
                    </label>
                </div>
                </div>
                <div className='each-reg mb-2'>
                <label className="form-label">Certification and compliance</label>
              </div>
              <button className='form-control join' onClick={() => {navigate('/manufacturerProduct')}}>continue</button>
            </form>
            <footer className='reg-footer w-100 text-center mt-[100px]'>© copyright 2023 Digi</footer>
        </main>
    )
}
export default EditManufacturerProduct
