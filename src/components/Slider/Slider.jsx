import React from "react";
import classNames from "classnames/bind";
import Slider from "react-slick";

import styles from "./styles.module.scss";

import Spinner from "../Spinner/Spinner";
import Icon from "../Icon/Icon";

const cx = classNames.bind(styles);

const NextArrow = ({ currentSlide, slideCount, ...props }) => (
  <div {...props}>
    <Icon name="next-arrow" />
  </div>
);

const PrevArrow = ({ currentSlide, slideCount, ...props }) => (
  <div {...props}>
    <Icon name="prev-arrow" />
  </div>
);

const CustomSlider = ({
  className,
  isLoading,
  settings,
  slideComponent,
  slides,
}) => {
  const defaultSettings = {
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    ...settings,
  };

  const Slide = slideComponent;

  const sliderClass = cx("slider", className);

  return (
    <Slider className={sliderClass} {...defaultSettings}>
      {isLoading && (
        <div className={styles.loading}>
          <Spinner className={styles.spinner} />
          <p className={styles.text}>Загружаем данные</p>
        </div>
      )}
      {slides &&
        slides.map((slide) => (
          <Slide key={slide.id || slide.date} slide={slide} />
        ))}
    </Slider>
  );
};

export default CustomSlider;
