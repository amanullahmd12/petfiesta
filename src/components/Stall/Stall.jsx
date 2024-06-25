import './Stall.css'


function Stall() {
   
  return (
    <section className='stall footer'>
    <div className='container p-5 '>
        <h1 className='text-center'>SHOWCASE YOUR BRAND</h1>
        <div className="">
                <span>
                "Book your stall in our event and showcase your products or services to a diverse audience eagerly looking for unique offerings. This is an excellent opportunity to connect with potential customers, network with other businesses, and increase your brand visibility. Don't miss out on this chance to be a part of a vibrant and bustling event that promises to be a hub of activity and excitement. Reserve your spot now and get ready to make a memorable impression at our upcoming event!"</span>
         </div>

<div className="container">
         <div className="row">

          <div className="col">
            <h4 className='mt-4 head-small'>For Stall Booking and More information</h4>
            <div className="combination d-flex">
            <i className='fa fa-phone solid trin-trin m-5 icon-stall'></i>
            <div className='d-flex justify-content-center align-items-center'>
            +91 9535286062 <br /> +91 9999776313 <br />+91 9986002229
            </div>
            </div>
            </div>


            <div className="col">
            <h4 className='mt-4 head-small'>Location</h4>
            <div className="combination d-flex">
            <i className='fa fa-location-dot solid updown m-5 icon-stall'></i>
            <div className='d-flex justify-content-center align-items-center'>
            Jayamahal Palace, Bengaluru
            </div>
            </div>
            </div>
            
            <div className="col">
            <h4 className='mt-4 head-small'>Timings</h4>
            <div className="combination d-flex">
            <div className='d-flex justify-content-center align-items-center'>
            <i className='fa fa-clock solid trin-trin m-5 icon-stall'></i>
            <div className='d-flex justify-content-center align-items-center'> Open 11 A.M. Onwards</div>
            </div>
            </div>
           </div>
     
       </div>
            
       </div>
       </div>
          
    </section>
  )
}

export default Stall