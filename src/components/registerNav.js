import { Link, useNavigate } from 'react-router-dom'
const RegisterNav = () => {
    const navigate = useNavigate()

    return(
        <main className='register-nav'>
            <nav className="navbar navbar-expand-lg">
                <div className="container-fluid nav-mobile">
                    <div className={`cat-nav navbar-collapse d-flex align-items-center justify-content-between`} id="#navbarSupportedContent">
                        <Link className="navbar-brand flex mt-3" to={`/registerman`}><img src={require('../images/logo2.jpg')} alt='' className='img-register'/><span className='dig'>DIGI</span></Link>
                        <div className='d-flex align-self-items justify-content-between'>
                            <div className='nav mobile-nav'>
                                <ul className='ul-nav nav d-flex align-items-center justify-content-between'>
                                    <li className='nav-item'><Link className={`nav-link nav-nav`} to='#top'>FAQs</Link></li>
                                    <li className='nav-item'><Link className={`nav-link nav-nav`} to={`/registerman`}>Be a manufacutrer</Link></li>
                                    <li className='nav-item'><Link className={`nav-link nav-nav`} to='#top'>X-Services</Link></li>
                                    <li className='nav-item'><Link className={`nav-link nav-nav`} to='#top'>Contact Us</Link></li>
                                    <li className='nav-item'><Link className={`nav-link nav-nav`} to={`/`}>Log In</Link></li>
                                </ul>
                            </div>
                            <div className='auth mobile-nav'>
                                <button className='btn sign m-2' onClick={() => {navigate('/registerman')}}>Create an Account</button>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </main>
    )
}
export default RegisterNav
