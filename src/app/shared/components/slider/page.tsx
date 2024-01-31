"use client";
import React from "react";
import { Typography } from "@mui/material";
import CardsPage from "../cards/page";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider, { LazyLoadTypes } from "react-slick";

interface SliderProps {
  cards: Array<{ title: string; description: string; imageUrl: string }>;
  cardsPerPage: number;
  category: string
}

// const responsive = {
//   superLargeDesktop: {
//     breakpoint: { max: 1000, min: 3000 },
//     items: 5,
//   },
//   desktop: {
//     breakpoint: { max: 3000, min: 1024 },
//     items: 3,
//   },
//   tablet: {
//     breakpoint: { max: 1024, min: 464 },
//     items: 2,
//   },
//   mobile: {
//     breakpoint: { max: 464, min: 0 },
//     items: 1,
//   },
// };

const SlideCards: React.FC<SliderProps> = ({ cards, category ,cardsPerPage }) => {
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
          {cards.map((card, index) => (
            <CardsPage
              key={index}
              title={card.title}
              description={card.description}
              imageUrl={card.imageUrl}
            />
          ))}
        </Slider>
    </>
  );
};

export default SlideCards;
