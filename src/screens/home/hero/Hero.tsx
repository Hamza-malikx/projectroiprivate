import React from "react";
import styles from "./hero.module.css";

// import { ScrollRotate } from "react-scroll-rotate";

// export interface ScrollRotateProps {
//   target?: string | undefined;
//   throttle?: number | undefined;
//   from?: number | undefined;
//   to?: number | undefined;
//   method?: "px" | "perc" | undefined;
//   loops?: number | undefined;
//   animationDuration?: number | undefined;
//   children: React.ReactNode;
// }
const Hero = () => {
  return (
    <div className={styles.hero}>
      <div className={styles.heroInner}>
        <img
          src={require("../../../assets/images/heroVector.png")}
          alt=""
          className={styles.absVector}
        />

        <div className={styles.bottomCryptoWrapper}>
          <div className={styles.bottomCryptoWrapperInner}>
            <img
              src={require("../../../assets/images/leftBitcoin.png")}
              alt=""
              className={styles.cryptoImg}
            />
            <img
              src={require("../../../assets/images/dollarCircle.png")}
              alt=""
              className={styles.dollarCircle}
            />
            {/* <ScrollRotate from={90} to={270}>
              <img
                src={require("../../../assets/images/dollarCircle.png")}
                alt=""
                className={styles.dollarCircle}
              />
            </ScrollRotate> */}
          </div>
        </div>
        <div className={styles.heroInnerWrapper}>
          <div className="container-fluid">
            <div className={styles.widthWrapper}>
              <div className="row">
                <div className="col-lg-6">
                  <div className={styles.left}>
                    <div className={styles.heroHeader}>
                      <h1>
                        Analyze <br />
                        <span className={styles.bold}>DeFi Profit </span>
                        Potential Like a
                      </h1>
                      <span className={styles.droppingText}>
                        <div>Boss</div>
                        <div>President</div>
                        <div>Executive</div>
                        <div>Boss!</div>
                      </span>
                    </div>
                    <div className={styles.signUpWrapper}>
                      <h6>Sign Up for Free Early Access</h6>
                      <div className={styles.plusWrapper}>
                        <img
                          src={require("../../../assets/icons/plus.png")}
                          alt=""
                          className={styles.plus}
                        />
                      </div>
                    </div>
                    {/* <button className={`${styles.customBtn} ${styles.btn12}`}>
                      <span>Click!</span>
                      <span>Sign up</span>
                    </button> */}
                    <button className={styles.signUpBtn}>Sign Up</button>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className={styles.right}>
                    <div className={styles.rightImgWrapper}>
                      <img
                        src={require("../../../assets/images/Component 2.png")}
                        alt=""
                        className={styles.mainImg}
                      />
                      {/* <img
                        src={require("../../../assets/images/heroRightWrapper.png")}
                        alt=""
                        className={styles.absoluteImg}
                      /> */}
                      <img
                        src={require("../../../assets/images/heroArrow.png")}
                        alt=""
                        className={styles.heroArrow}
                      />
                      <img
                        src={require("../../../assets/icons/#.png")}
                        alt=""
                        className={styles.hashIcon}
                      />
                      <img
                        src={require("../../../assets/images/pie.png")}
                        alt=""
                        className={styles.pieCircle}
                      />
                      <img
                        src={require("../../../assets/icons/%.png")}
                        alt=""
                        className={styles.percentIcon}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
