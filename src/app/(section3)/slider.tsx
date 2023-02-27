"use client";
import * as React from "react";
import Card from "./card";
import { ICard } from "./section3";
import styles from "./section3.module.css";
import ReactSlider from "react-slick";

export interface ISliderProps {
  cards: ICard[];
}

export default function Slider({ cards }: ISliderProps) {
  const settings = {
    infinite: true,
    speed: 500,
    dots: false,
    prevArrow: <img src="/images/arrow.svg" />,
    nextArrow: <img src="/images/arrow.svg" />,
    // slidesToScroll: 1,
  };

  return (
    <ReactSlider
      className={styles.slider}
      slidesToShow={cards.length > 3 ? 3 : cards.length}
      {...settings}
    >
      {cards.map((card) => (
        <Card className={styles.embla_slide} key={card.id} {...card} />
      ))}
    </ReactSlider>
  );
}
