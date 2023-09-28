// import React from 'react';
// import { Carousel } from 'react-responsive-carousel';
// import 'react-responsive-carousel/lib/styles/carousel.min.css';
// import { useState } from 'react';

// const CarouselPage = () => {
  
  

// return (
// <Carousel>
// <div>
// <img src="7-arche_client/public/img/13.jpg" alt="carroussel 1" className='caroussel' />
// <p className="legend">Techniques du cinéma</p>
// </div>
// <div>
// <img src="7-arche_client/public/img/14.jpg" alt='carroussel 2' className='caroussel'/>
// <p className="legend">Un siècle de cinéma</p>
// </div>
// <div>
// <img src="7-arche_client/public/img/12.jpg" alt='carroussel 3' className='caroussel' />
// <p className="legend">Plan du cinéma</p>
// </div>
// <a class="carousel-control-prev" href="#demo" role="button" data-slide="prev">
//           <span class="carousel-control-prev-icon" aria-hidden="true"></span>
//           <span class="sr-only">Précédent</span>
//         </a>
//         <a class="carousel-control-next" href="#demo" role="button" data-slide="next">
//           <span class="carousel-control-next-icon" aria-hidden="true"></span>
//           <span class="sr-only">Suivant</span>
//         </a>
// </Carousel>
// );
// };

// export default CarouselPage;

import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';

function ControlledCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <logo text="First slide" />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <logo text="Second slide" />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <logo text="Third slide" />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default ControlledCarousel;