import React from "react";
import classNames from "classnames";

import styles from "./styles.module.scss";

import Icon from "../../components/Icon/Icon";

const SlideIconText = ({ slide: { iconName, text } }) => {
  const slideClass = classNames(styles.slide, styles.iconText);

  return (
    <div className={slideClass}>
      <div className={styles.inner}>
        <Icon className={styles.icon} name={iconName} />

        <p className={styles.text}>{text}</p>
      </div>
    </div>
  );
};

export default SlideIconText;
