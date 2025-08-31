import React from "react";
import { Carousel } from "react-bootstrap";
import './carousel.css';
import sliderImg from "../../assets/carousel_images/bahubali.jpg";
import sliderImg1 from "../../assets/carousel_images/geetha_govindam.jpg";

const Banner = () => {
  return (
    <>
      <section className="slider">
        <Carousel variant="dark">
          <Carousel.Item>
            <img src={sliderImg} className="c-block w-100" alt="First slide" />
            <Carousel.Caption>
              <div className="slider_des">
                <h5 className="heading">
                  Bahubali <span >The Beginning</span>
                </h5>
                <p className="sub_text">
                Darkness befalls the Mahishmati kingdom after the assassination of beloved King Amarendra Baahubali. However, a deadly battle must be fought to restore justice.
                </p>
              </div>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img src={sliderImg1} className="c-block w-100" alt="First slide" />
            <Carousel.Caption>
              <div className="slider_des">
                <h5 className="heading">
                  Geetha Govindam 
                </h5>
                <p className="sub_text">
                  An innocent young lecturer is misunderstood as a pervert and despised by a woman who co-incidentally turns out to be the younger sister of his brother-in-law.
                </p>
              </div>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </section>
    </>
  );
};

export default Banner;