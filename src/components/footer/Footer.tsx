import React, { useEffect } from "react";
import styles from "./footer.module.css";
import Aos from "aos";
import { Link } from "react-router-dom";
const Footer = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <div className={styles.footer} data-aos="zoom-in-up">
      <div className={styles.footerInner}>
        <div className={styles.footerWrapper}>
          <div className={styles.left}>
            © 2022 ProjectROI. All rights reserved.
          </div>
          <div className={styles.middle}>
            <div>
              <Link to="/">Privacy Policy</Link>
              <span>-</span>
              <Link to="/">Terms of Use</Link>
            </div>
          </div>
          <div className={styles.right}>
            <div className={styles.rightWrapper}>
              <a href="#">
                <img src={require("../../assets/icons/Twitter.png")} alt="" />
              </a>
              <button>Contact Us</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
