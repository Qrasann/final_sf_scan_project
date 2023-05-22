import prevArrowSrc from "../../assets/images/prevArrow.svg";
import nextArrowSrc from "../../assets/images/nextArrow.svg";
import stopwatchSrc from "../../assets/images/stopwatch.svg";
import magnifierSrc from "../../assets/images/magnifier.svg";
import shieldSrc from "../../assets/images/shield.svg";

const defaultIcon = {
  src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAAHElEQVQI12P4//8/w38GIAXDIBKE0DHxgljNBAAO9TXL0Y4OHwAAAABJRU5ErkJggg==",
  alt: "Красная точка",
};

const icons = {
  "prev-arrow": {
    src: prevArrowSrc,
    alt: "Стрелка назад",
  },
  "next-arrow": {
    src: nextArrowSrc,
    alt: "Стрелка вперед",
  },
  stopwatch: {
    src: stopwatchSrc,
    alt: "Секундомер",
  },
  magnifier: {
    src: magnifierSrc,
    alt: "Лупа",
  },
  shield: {
    src: shieldSrc,
    alt: "Щит",
  },
};

export const getIcon = (icon) => {
  return icons[icon] || defaultIcon;
};
