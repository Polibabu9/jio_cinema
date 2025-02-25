import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

function UncontrolledExample() {
  return (
    <Carousel>
      <Carousel.Item>
        <img 
          className="d-block w-100" 
          src="https://static.moviecrow.com/marquee/bahubali-2-releases-a-new-poster/105540_thumb_665.jpg" 
          alt="First slide" 
        />
      </Carousel.Item>
      <Carousel.Item>
        <img 
          className="d-block w-100" 
          src="https://static.moviecrow.com/marquee/bahubali-2-releases-a-new-poster/105540_thumb_665.jpg" 
          alt="Second slide" 
        />
      </Carousel.Item>
      <Carousel.Item>
        <img 
          className="d-block w-100" 
          src="https://static.moviecrow.com/marquee/bahubali-2-releases-a-new-poster/105540_thumb_665.jpg" 
          alt="Third slide" 
        />
      </Carousel.Item>
    </Carousel>
  );
}

export default UncontrolledExample;