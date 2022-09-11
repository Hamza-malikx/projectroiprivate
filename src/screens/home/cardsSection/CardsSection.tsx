import React, { useEffect } from "react";
import Aos from "aos";
import styles from "./cardsSection.module.css";
const CardsSection = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <div className={styles.cardsSection}>
      <img
        data-aos="zoom-in-up"
        src={require("../../../assets/images/cardsTopRightBitcoin.png")}
        alt=""
        className={styles.absRightImg}
      />
      <div className="container">
        <div className={styles.cardsSectionInner} data-aos="zoom-in-down">
          <h6>Uncover the Path to Profitable DeFi Investing</h6>
          <h5>Smarter+Faster DeFi Decision-Making</h5>
          <p>
            Explode your project research efficiency. ProjectROI combines
            important fundamentals with curated transaction data so you can
            simplify your investment decisions.
          </p>
        </div>
      </div>
      <div className={styles.cardsWrapper}>
        <div className="container">
          <div className="row ">
            <div className="col-lg-4">
              <div className={styles.card} data-aos="zoom-out-right">
                <h4>Read Profit Report </h4>
                <p>
                  See through the hype whiledoing your own research.Check a
                  project’s profit reportbefore spending timedigging through the
                  whitepaper
                </p>
                <div className={styles.circle}>
                  <img
                    src={require("../../../assets/images/report.png")}
                    alt=""
                  />
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div
                className={`${styles.card} ${styles.card2}`}
                data-aos="fade-up"
                data-aos-anchor-placement="center-bottom"
              >
                <h4>Read Profit Report </h4>
                <p>
                  See through the hype whiledoing your own research.Check a
                  project’s profit reportbefore spending timedigging through the
                  whitepaper
                </p>
                <div className={`${styles.circle2}`}>
                  <img
                    src={require("../../../assets/images/profit.png")}
                    alt=""
                  />
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className={styles.card} data-aos="zoom-out-left">
                <h4>Read Profit Report </h4>
                <p>
                  See through the hype whiledoing your own research.Check a
                  project’s profit reportbefore spending timedigging through the
                  whitepaper
                </p>
                <div className={styles.circle3}>
                  <img
                    src={require("../../../assets/images/alert.png")}
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.roi}>
        <img
          src={require("../../../assets/images/bRoiLeft.png")}
          alt=""
          className={styles.roiTopAbsImg}
          data-aos="fade-right"
        />
        <div className="container-fluid">
          <div className={styles.roiInner}>
            <div className={styles.roiWrapper}>
              <div className={styles.roiLeft} data-aos="fade-right">
                <h3>
                  Better <span>ROI</span> Estimates
                </h3>
                <ul>
                  <li>Model the price action of other projects</li>
                  <li>Understand breakeven time</li>
                </ul>
              </div>
              <div className={styles.roiRight}>
                <div className={styles.roiRightInner}>
                  <img
                    src={require("../../../assets/images/roiMiddleBg.png")}
                    alt=""
                    className={styles.roiBgMiddle}
                    data-aos="zoom-in"
                  />
                  <div className={styles.dshImgWrapper}>
                    <img
                      src={require("../../../assets/images/Component.png")}
                      alt=""
                      className={styles.dshImg}
                      data-aos="fade-down"
                    />
                    <img
                      src={require("../../../assets/icons/$.png")}
                      alt=""
                      className={styles.dollarIcon}
                    />
                    <img
                      src={require("../../../assets/icons/&.png")}
                      alt=""
                      className={styles.andIcon}
                    />
                    <img
                      src={require("../../../assets/icons/(.png")}
                      alt=""
                      className={styles.bMiddleIcon}
                      // data-aos="zoom-out"
                    />
                  </div>
                  <img
                    src={require("../../../assets/images/roiArrow.png")}
                    alt=""
                    className={styles.arrowImg}
                    data-aos="fade-up"
                    data-aos-duration="3000"
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
  );
};

export default CardsSection;
