import React from "react";
import { Link } from "react-router-dom";

import styles from "./styles.module.scss";

import { HOME_URL } from "../../constants";
import Navbar from "../../components/Navbar/Navbar";
import Logo from "../../components/Logo/Logo";
import FooterInfo from "../../components/FooterInfo/FooterInfo";

const MainLayout = ({ children }) => {
  return (
    <>
      <header className={styles.header}>
        <Navbar />
      </header>
      <main className={styles.main}>{children}</main>

      <footer className={styles.footer}>
        <div className={styles.footer__row}>
          <Link to={HOME_URL} className={styles.footer__logo}>
            <Logo color="white" />
          </Link>

          <FooterInfo />
        </div>
      </footer>
    </>
  );
};

export default MainLayout;
