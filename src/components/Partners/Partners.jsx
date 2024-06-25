import paw_space from '../../assets/paw-space.svg'
import Pet_Star from '../../assets/pet-star.svg'
import Karnatka from '../../assets/karnatka-aquarium.svg'
import AdInk from '../../assets/adInk.svg'
import Aquarium from '../../assets/aquarium-products-india.svg'
import BookMyShow from '../../assets/bookmyshow.svg'
import PaytmInsider from '../../assets/paytm-insider.svg'
import Eagle from '../../assets/eagle.svg'
import Event_Arena from '../../assets/events-arena.svg'
import Zomato from '../../assets/zomato-live.svg'

import './Partners.css'


// import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
// import { Carousel } from 'react-responsive-carousel';

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

function Partners() {

    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: {max: 4000, min: 1024},
          items: 4,
        },
        desktop: {
          breakpoint: {max: 1024, min: 800},
          items: 3,
          partialVisibilityGutter: 40,
        },
        tablet: {
          breakpoint: {max: 800, min: 464},
          items: 2,
        },
        mobile: {
          breakpoint: {max: 464, min: 0},
          items: 1,
        },
      };
  return (
    <section className='partners '>
        <h1 className='text-center mt-4'>Our Partners</h1>
            <div className='container'>
            <Carousel
          responsive={responsive}
          autoPlay={true}
          autoPlaySpeed={1000}
          shouldResetAutoplay={true}
          customTransition={'transform 10000ms linear 0ms'}
          rewind={true}
          transitionDuration={500}
          focusOnSelect={true}
          swipeable={true}
          infinite={true}
          arrows={false}
        >
            <div>
               <img src={Pet_Star} alt="" width='180' height='180' className='m-5'/>
               </div>
                <div>
                <img src={paw_space} alt="" width='180' height='180' className='m-5'/>
                </div>
                <div>
               <img src={Event_Arena} alt="" width='180' height='180' className='m-5'/>
               </div>
                <div>
                <img src={Karnatka} alt="" width='180' height='180' className='m-5'/>
                </div>
                <div>
                <img src={AdInk} alt="" width='180' height='180' className='m-5'/>
                </div>
                <div>
                <img src={Aquarium} alt="" width='180' height='180' className='m-5'/>
                </div>
                <div>
                <img src={Eagle} alt="" width='180' height='180' className='m-5'/>
                </div>
                <div>
               <img src={BookMyShow} alt="" width='180' height='180' className='m-5'/>
               </div>
               <div>
               <img src={PaytmInsider} alt="" width='180' height='180' className='m-5'/>
               </div>
               <div>
               <img src={Zomato} alt="" width='180' height='180' className='m-5'/>
               </div>

               <div>
               <img src={Pet_Star} alt="" width='180' height='180' className='m-5'/>
               </div>
                <div>
                <img src={paw_space} alt="" width='180' height='180' className='m-5'/>
                </div>
                <div>
               <img src={Event_Arena} alt="" width='180' height='180' className='m-5'/>
               </div>
                <div>
                <img src={Karnatka} alt="" width='180' height='180' className='m-5'/>
                </div>
                <div>
                <img src={AdInk} alt="" width='180' height='180' className='m-5'/>
                </div>
                <div>
                <img src={Aquarium} alt="" width='240' height='180' className='m-5'/>
                </div>
               <div>
               <img src={BookMyShow} alt="" width='180' height='180' className='m-5'/>
               </div>
               <div>
               <img src={PaytmInsider} alt="" width='180' height='180' className='m-5'/>
               </div>
               <div>
               <img src={Zomato} alt="" width='180' height='180' className='m-5'/>
               </div>
            </Carousel>
        

        
    </div>
    {/* <h1 className='text-center'>Ticketing Partner</h1>
    <div className='container d-flex justify-content-center align-items-center'>
        <a href="https://in.bookmyshow.com/events/pet-fiesta/ET00388598">
          
           
            </a>
            <a href="https://insider.in/pet-fiesta-a-pet-festival-at-marriott-whitefield-mar31-2024/event">
          
            </a>
    </div> */}
    <div>
        
      </div>
   
    </section>
  )
}

export default Partners