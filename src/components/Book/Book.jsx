import BookMyShow from '../../assets/bookmyshow.svg'
import PaytmInsider from '../../assets/paytm-insider.svg'
import Event_Arena from '../../assets/events-arena.svg'
import Zomato from '../../assets/zomato-live.svg'

import "./Book.css"

function Book() {
  return (
    <section className='book m-5' id='book-now'>
        <div className="container ">
            <h1 className='text-center fw-bold'>Book Your Tickets Now</h1>
        </div>
        <div className="container">


            <div className="row">
                <div className="col d-flex justify-content-center align-items-center">
                    <div className="cards">
                    <img src={BookMyShow} alt="" width='180' height='180'/>
                    <div className='d-flex justify-content-center align-items-center'>
                        <a href='https://in.bookmyshow.com/events/pet-fiesta/ET00388598?fbrefresh=1' target="_blank" className='btn btn-primary  fw-bold'>Book Now</a>
                        </div>
                    </div>
                </div>
                <div className="col d-flex justify-content-center align-items-center">
                    <div  className="cards">
                    <img src={Event_Arena} alt="" width='180' height='180'/>
                    <div className='d-flex justify-content-center align-items-center mt-1'>
                    <a href='https://forms.gle/XM7a2yW8irNE7dKS9' target="_blank" className='btn btn-primary fw-bold'>Book Now</a>
                    </div>
                    </div>
                </div>
            </div>
            <div className="col d-flex justify-content-center align-items-center">
                    <div  className="cards">
                    <img src={Zomato} alt="" width='180' height='180'/>
                    <div className='d-flex justify-content-center align-items-center mt-1'>
                    <a href='https://www.zomato.com/events/pet-fiesta-bengaluru-et34133' target="_blank" className='btn btn-primary fw-bold'>Book Now</a>
                    </div>
                    </div>
                </div>
        </div>
    </section>
  )
}

export default Book