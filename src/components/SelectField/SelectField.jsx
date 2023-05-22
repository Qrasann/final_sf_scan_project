import React from "react";
import { useField } from "formik";
import classNames from "classnames";

import styles from "./styles.module.scss";

import FieldWrap from "../FieldWrap/FieldWrap";

const SelectField = ({ label, className, children, ...props }) => {
  const [field, meta] = useField(props);

  const wrapOptions = {
    label,
    field,
    meta,
  };

  const selectClass = classNames(styles.input, className);

  return (
    <FieldWrap className={styles.selectFieldWrap} options={wrapOptions}>
      <select className={selectClass} {...field} {...props}>
        {children}
      </select>
    </FieldWrap>
  );
};

export default SelectField;
