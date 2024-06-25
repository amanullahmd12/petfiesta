
import  { useState } from 'react'
import Logo from '../../assets/logo.png'

import './Navbar.css'


const Navbar = () => {

    const [click] = useState(false)


    const [color, setColor]= useState(false);
    const changeColor = () =>{
      if(window.scrollY>= 90){
        setColor (true) 
      }else{
        setColor(false)
      }
    }
    window.addEventListener('scroll', changeColor)



    return (
        <div className={color ?'header header-bg' : 'header'}>
            <nav className='navbar'>
                <div className='container d-flex justify-content-center'>
                <div className='me-auto'>
                <div className={click ? "nav-menu active" : "nav-menu"}>
                    <div className={color ?'text' : ''}>
                    <div className='nav-item text-white p-2'>
                        <i className='fa-solid fa-calendar-days'></i> April 7th,2024<br />
                    <i className='fa fa-location-dot'></i> Jayamahal Palace<br />
                 <i className='fa fa-clock'></i> 10 A.M to 10 P.M
                    </div>
                    </div>
                </div>
                </div>
                <a to='/' className='logo'>
                    <img src={Logo}  className='logo-img'alt='pet-fiesta' width='180' />
                </a>
                <div className='ms-auto'>
                <div className={click ? "nav-menu active" : "nav-menu"}>
                    <button>
                        <a href='https://forms.gle/XM7a2yW8irNE7dKS9' target="_blank" className='book-now text-white fw-bold'>Book Now</a>
                        </button>
                </div>
                </div>
                <div className='hamburger'>
                       <button>
                        <a href='https://forms.gle/XM7a2yW8irNE7dKS9'  target="_blank" className='book-now text-white fw-bold'>Book Now</a>
                      </button>
                </div>
               
                </div>
            </nav>
        </div>
    )
}

export default Navbar