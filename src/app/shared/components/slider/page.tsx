"use client";
import React, { useContext } from "react";
import { Typography } from "@mui/material";
import CardsPage from "../cards/page";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider, { LazyLoadTypes } from "react-slick";
import { CardsContext } from "@/app/(pages)/home/page";

interface SliderProps {
  // cards: Array<{ title: string; description: string; imageUrl: string, id: string }>;
  // source?: any
  // cardsPerPage: number;
  category: string
}

const SlideCards: React.FC<SliderProps> = ({ category  }) => {


  const videoPlayList = useContext(CardsContext);



  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 3,
    // swipe: true,
    // swipeToSlide: true,
    // touchMove: true,
    // touchThreshold: 3,
    // lazyLoad: LazyLoadTypes.ondemand
  };

  return (
    <>
      <Typography variant="h5">{category}</Typography>
        <Slider {...settings}>
          {videoPlayList.map((card, index) => (
            <CardsPage
              key={index}
              item={card}
            />
          ))}
        </Slider>
    </>
  );
};

export default SlideCards;
