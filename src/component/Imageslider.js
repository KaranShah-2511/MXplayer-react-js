import React from "react";
import styled from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Imageslider() {
  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };
  return (
    <Carousel {...settings}>
      <Wrap>
        <img src="./image/test_pic1611131325000.jpg" />
      </Wrap>
      <Wrap>
        <img src="./image/test_pic1615095583483.jpg" />
      </Wrap>
      <Wrap>
        <img src="./image/s1.jpg" />
      </Wrap>
      <Wrap>
        <img src="./image/s2.jpg" />
      </Wrap>
    </Carousel>
  );
}

export default Imageslider;

const Carousel = styled(Slider)`
  li.slick-active button::before {
    color: white;
    font-size: 10px;
    position: absolute;
    top: -50px;
  }
  .slick-prev {
    left: 20px;
    z-index: 1;
  }
  .slick-next {
    right: 40px;
    z-index: 1;
  }
  .slick-prev::before,
  .slick-next::before {
    font-family: "slick";
    font-size: 40px;
    line-height: 1;
    opacity: 0.75;
    color: white;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`;

const Wrap = styled.div`
  img {
    width: 100%;
    height: 100%;
  }
`;
