import { Link, useNavigate } from 'react-router-dom';
import '../../scss/app.scss'
import { useState, useEffect } from 'react';
import axios from 'axios';

const baseURL = 'https://digi.mjobi.com'
const prductUrl = `${baseURL}/manufacturer/product/`
const ManufacutrerProduct = () => {
    const navigate = useNavigate()

    const [productData, setProductData] = useState([])

    useEffect(() => {
      const token = localStorage.getItem('authToken')
      console.log('manutoken', token)
      if(token){
        const config = {
          headers: {
            Authorization: `${token}`,
          },
        }
        axios.get(prductUrl, config)
            .then((response) => {
              console.log('data', response.data)
                setProductData(response.data);
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
            });
          }
          else{
            console.log('Token not found');
          }
    }, [])

    // const manufacturerProduct = [
    //     { id: 1, productName: '100kVA Generator for industrial use', dateCreated: '23rd - March - 2000', status: 'active', published: 'yes', unit: 25},
    //     { id: 2, productName: '100kVA Generator for industrial use', dateCreated: '23rd - March - 2000', status: 'active', published: 'yes', unit: 25},
    //     { id: 3, productName: '100kVA Generator for industrial use', dateCreated: '23rd - March - 2000', status: 'active', published: 'yes', unit: 25},
    //     { id: 4, productName: '100kVA Generator for industrial use', dateCreated: '23rd - March - 2000', status: 'active', published: 'yes', unit: 25},
    //     { id: 5, productName: '100kVA Generator for industrial use', dateCreated: '23rd - March - 2000', status: 'active', published: 'yes', unit: 25},
    //     { id: 6, productName: '100kVA Generator for industrial use', dateCreated: '23rd - March - 2000', status: 'active', published: 'yes', unit: 25},
    //     { id: 7, productName: '100kVA Generator for industrial use', dateCreated: '23rd - March - 2000', status: 'active', published: 'yes', unit: 25},
    //     { id: 8, productName: '100kVA Generator for industrial use', dateCreated: '23rd - March - 2000', status: 'active', published: 'yes', unit: 25},
    //     { id: 9, productName: '100kVA Generator for industrial use', dateCreated: '23rd - March - 2000', status: 'active', published: 'yes', unit: 25},
    //     { id: 10, productName: '100kVA Generator for industrial use', dateCreated: '23rd - March - 2000', status: 'active', published: 'yes', unit: 25},
    // ]

    return(
        <main className='relative h-[1200px] manpro'>
            <div className=''>
                <div className='mobile-elect d-flex align-items-center'>
                    <Link to={`/`} className='mob-anch flex h-[20px] mt-4 ml-4 justify-between w-[120px] text-black no-underline'>
                        <img src={require('../../images/back-track.jpg')} alt='' className=''/>
                        <p className='font-normal'>My Products</p>
                    </Link>
                </div>
                {/* <p className='pl-12 mt-4 font-normal hidden lg:block'>My Products</p> */}
            </div>
            <div className='d-flex justify-content-between mr-6'>
                <p></p>
                <button className='bg-[#df0000] text-white text-[14px] block font-semibold p-2'
                  onClick={() => {navigate('/editmanufacturer')}}
                >Add new product</button>
            </div>
            <div className='lg:w-75 lg:w-[1100px] pl-6 pr-6 lg:mx-auto mt-[40px] overflow overflow-x-auto'>
                <table className='table-auto w-[900px]'>
                    <thead className=''>
                    <tr>
                        <th></th>
                        <th>Product name</th>
                        <th>Date created</th>
                        <th>Status</th>
                        <th>Published</th>
                        <th>Unit available</th>
                    </tr>
                    </thead>
                    <tbody className='w-full mb-[36px]'>
                        {productData.map((item, index) => (
                            <tr key={index} className='p-[2rem] h-[70px]'>
                                <td className=''><input type='checkbox' /></td>
                                <td className=''>{item.productName}</td>
                                <td className=''>{item.dateCreated}</td>
                                <td className='text-center'>{item.status}</td>
                                <td className='text-center'>{item.published}</td>
                                <td className='text-center'>{item.unit}</td>
                                <button><span class="material-symbols-outlined">delete</span></button>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <footer className='reg-footer w-100 text-center mt-[100px] absolute bottom-0'>© copyright {new Date().getFullYear()} Digi</footer>
        </main>
    )
}

export default ManufacutrerProduct
