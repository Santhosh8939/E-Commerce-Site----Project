import React, {Component} from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel';

class ImageSlider extends Component{
  render(){
    return(
      <Carousel autoPlay={true}>
        <div>
          <img src={require("../images/slider-1.jpg")}/>
        </div>
        <div>
          <img src={require("../images/slider-2.jpg")}/>
        </div>
        <div>
          <img src={require("../images/slider-3.jpg")}/>
        </div>
      </Carousel>
    )
  }
}

export default ImageSlider;