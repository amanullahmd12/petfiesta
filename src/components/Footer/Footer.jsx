import './Footer.css'
import { InstagramEmbed } from 'react-social-media-embed';
import Logo from '../../assets/logo.svg'
const Footer = () => {
  return (
    <section className="footer p-5">
        <div className="footer-container">
            <div className="row">
                <div className="col-md-4 d-flex justify-content-center align-items-center">
                  <img src={Logo} alt="" width='240'/>
                </div>
                <div className="col-md-4 d-flex justify-content-center align-items-center">
                <span className=''>We invite you to bring your furry, feathery, or scaly friends to our exciting Pet Show! Whether you have a playful pup, a cuddly cat, a chirpy bird, or any other beloved pet, this is the perfect opportunity to show them off.
DON'T MISS!!
Join us for a day filled with fun competitions, adorable pet parades, and a chance to meet fellow pet enthusiasts. Let's celebrate the special bond we share with our animal companions. Save the date and get ready for a tail-wagging good time at our Pet Show!</span>
                </div>
                <div className="col-md-4">
                    <h2 className='text-center'>Stay Updated</h2>
                     <div style={{ display: 'flex', justifyContent: 'center', }}>
                        <InstagramEmbed url="https://www.instagram.com/petfiestaindia/" width={328} />
                    </div>
                </div>
                <hr />
                <p className='text-center copyright'>Copyright © <span className='fw-bold high'></span>Pet Fiesta. All rights reserved.</p>
                <p className='text-center copyright'>Designed & Devloped by <a href="https://carnivalera.com"><span className='fw-bold high'></span> Carnival Era.</a> All rights reserved.</p>
                </div>
        </div>
        
    </section>
  )
}

export default Footer