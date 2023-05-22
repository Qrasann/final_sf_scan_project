import React from "react";
import classNames from "classnames";

import styles from "./styles.module.scss";

import { ReactComponent as SpinnerSVG } from "../../assets/images/spinner.svg";

const Spinner = ({ className }) => {
  const spinnerClass = classNames(styles.spinner, className);

  return <SpinnerSVG className={spinnerClass} />;
};

export default Spinner;
