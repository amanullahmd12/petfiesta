import Party from "../../assets/party.jpg"
import Shop from "../../assets/shop.jpg"
import Music from "../../assets/music.jpg"
import Food from "../../assets/food.jpg"
import './Goods.css'

function Goods() {
  return (
    <section className='Goods'>
      <div className="container">
        <div className="text-center p-5 slogan ">
        <span className="">Get ready to groove with live music, indulge in scrumptious food and beverages,<br /> join in celebratory activities, and shop for all things pets at our carnival extravaganza!</span>
        </div>
       <div className="row text-center">
      <div className="col-md-3">
     <div className="container-image m-2">
      <img src={Food} alt="" className='img-fluid' height="240"/>
      <div className="text-card">
      <h3>Foods</h3>
      <p>Exiciting Foods will be served in the events.</p>
      </div>
     </div>
      </div>
      <div className="col-md-3">
      <div className="container-image m-2">
      <img src={Shop} alt=""  className='img-fluid' />
      <div className="text-card">
      <h3>Shoping</h3>
      <p>Wide range of stalls will be present in the event where you will shop diffents kinds of products.</p>
      </div>
     </div>
      </div>
      <div className="col-md-3">
      <div className="container-image m-2">
      <img src={Music} alt=""  className='img-fluid'  />
      <div className="text-card">
      <h3>Music</h3>
      <p>Exiciting music will be in the event</p>
      </div>
     </div>
      </div>
      <div className="col-md-3">
      <div className="container-image m-2">
      <img src={Party} alt=""  className='img-fluid'  />
      <div className="text-card">
      <h3>Celebrate</h3>
      <p>Let's Celebrate together and enjoy every single moment of the event.</p>
      </div>
     </div>
      </div>
      </div>
      </div>
    </section>
  )
}

export default Goods