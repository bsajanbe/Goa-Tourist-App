import React from 'react'
import Goa1 from '../JPG/Goa1.jpg'
import Goa2 from '../JPG/Goa2.jpg'
import Goa3 from '../JPG/Goa3.jpg'
import '../Style/Style.css'

export const Home = () => {
  return (
    <div><div id="carouselExampleIndicators" className="carousel slide my-50" data-bs-ride="true">
    <div className="carousel-indicators">
      <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
      <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
      <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
    </div>
    <div className="carousel-inner">
      <div className="carousel-item active">
        <img src={Goa1} className="d-block w-100" alt="..."/>
      </div>
      <div className="carousel-item">
        <img src={Goa2} className="d-block w-100" alt="..."/>
      </div>
      <div className="carousel-item">
        <img src={Goa3} className="d-block w-100" alt="..."/>
      </div>
    </div>
    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Previous</span>
    </button>
    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
      <span className="carousel-control-next-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Next</span>
    </button>
<h1 id='heading'>Activities offered in Goa</h1>
    <div >
              <li id='details'>
              <b>Cultural Exploration: &nbsp; &nbsp; &nbsp;7 hours</b>
              </li>
              <li id='details'>
              <b>Local market visit  : &nbsp; &nbsp; &nbsp;8 hours</b>
              </li>
              <li id='details'>
              <b>Mandovi River  cruise: &nbsp; &nbsp; &nbsp;3 hours</b>
              </li>
              <li id='details'>
              <b>Water sports at Grand island: &nbsp; &nbsp; &nbsp;4 hours</b>
              </li>
              <li id='details'>
              <b>Clubbing at Tito's lane: &nbsp; &nbsp; &nbsp;5 hours</b>
              </li>
              <li id='details'>
              <b>A day at Baga Beach: &nbsp; &nbsp; &nbsp;9 hours</b>
              </li>
        
    </div>
  </div></div>
  )
}
