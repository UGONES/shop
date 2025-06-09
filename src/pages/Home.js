import React from 'react';
import '../css/site.css';

export default function Home() {
    return <>
        <h1 className="text-center text-uppercase">Home</h1>
    <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1" />
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2" />
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3" />
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="../images/rolex.jpg" className="d-block w-100 carousel-img" alt="Rolex Watch" />
    </div>
    <div className="carousel-item">
      <img src="../images/rolex2.jpg" className="d-block w-100 carousel-img" alt="Another Slide" />
    </div>
    <div className="carousel-item">
      <img src="/images/third-image.jpg" className="d-block w-100 carousel-img" alt="Third Slide" />
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true" />
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true" />
    <span className="visually-hidden">Next</span>
  </button>
</div>


    </>
}
