import React, { useEffect } from "react";
import Aos from "aos";
import styles from "./restWrappers.module.css";
const RestWrappers = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <div className={styles.rests}>
      <div className={styles.whitepapers}>
        <div className="container-fluid">
          <div className={styles.whitepapersInner}>
            <div className="row">
              <div className="col-lg-6">
                <div className={styles.whitepapersLeft} data-aos="zoom-in-down">
                  <img
                    src={require("../../../assets/images/whitepapersLeft.png")}
                    alt=""
                  />
                </div>
              </div>
              <div className="col-lg-6">
                <div className={styles.whitepapersRight} data-aos="zoom-in-up">
                  <h2>
                    Stop Digging Through <span>Whitepapers - Start Here</span>
                  </h2>
                  <ul>
                    <li>
                      Quickly understand the tax and rewards system for projects
                      from our 1-page report
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.passiveIncome}>
        <img
          src={require("../../../assets/images/passiveRightAbs.png")}
          alt=""
          className={styles.passiveRightAbs}
          data-aos="zoom-in-up"
        />
        <div className="container-fluid">
          <div className={styles.passiveIncomeInner}>
            <div className="row">
              <div className="col-lg-6">
                <div
                  className={styles.passiveIncomeLeft}
                  data-aos="zoom-in-right"
                >
                  <img
                    src={require("../../../assets/images/piePassive.png")}
                    alt=""
                    className={styles.piePassive}
                  />
                  <h2>
                    Instantly Assess <span>“Passive Income” Opportunity</span>
                  </h2>
                  <ul>
                    <li>
                      Data-driven Profit Potential ratings help objectively
                      break down opportunities into an easy-to-understand letter
                      grade.
                    </li>
                    <li>
                      Find out if anyone is making money before you invest.
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-6">
                <div
                  className={styles.passiveIncomeRight}
                  data-aos="zoom-in-left"
                >
                  <img
                    src={require("../../../assets/images/passiveIncomeRight.png")}
                    alt=""
                  />
                  <img
                    src={require("../../../assets/icons/%dark.png")}
                    alt=""
                    className={styles.passiveRightPercentAbsImg}
                  />
                  <img
                    src={require("../../../assets/icons/$dark.png")}
                    alt=""
                    className={styles.passiveRightDollarAbsImg}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.trust}>
        <div className="container-fluid">
          <div className={styles.trustInner}>
            <div className="row">
              <div className="col-lg-6">
                <div
                  className={styles.trustLeft}
                  data-aos="fade-down"
                  data-aos-easing="linear"
                  data-aos-duration="1500"
                >
                  <div className={styles.trustImgWrapper}>
                    <img
                      src={require("../../../assets/images/trustLeft.png")}
                      alt=""
                      className={styles.trustLeftImg}
                    />
                    <img
                      src={require("../../../assets/images/trustPie.png")}
                      alt=""
                      className={styles.trustPie}
                    />
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div
                  className={styles.trustRight}
                  data-aos="fade-up"
                  data-aos-easing="linear"
                  data-aos-duration="1500"
                >
                  <h2>
                    <span>Trust</span> & <span>Security</span>
                  </h2>
                  <ul>
                    <li>
                      Get to know the project team before you invest. Are they
                      earning your trust with a KYC and good security?
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.project}>
        <div className="container-fluid">
          <div className={styles.projectInner}>
            <div className="row">
              <div className="col-lg-6">
                <div className={styles.projectLeft} data-aos="zoom-in-right">
                  <h2>
                    Easily Compare <span>Projects</span>
                  </h2>
                  <ul>
                    <li>
                      Considering two “Node” projects and not sure which one to
                      choose? We’ll help you compare Apples-to-Apples so you can
                      make better decisions.
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-6">
                <div className={styles.projectRight} data-aos="zoom-in-left">
                  <div className={styles.projectRightImgWrapper}>
                    <img
                      src={require("../../../assets/images/vs.png")}
                      alt=""
                      className={styles.vs}
                    />
                    <img
                      src={require("../../../assets/images/projectsRight.png")}
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.track} data-aos="fade-right">
        <div data-aos="fade-right">
          <img
            src={require("../../../assets/images/trackLeftAbs.png")}
            alt=""
            className={styles.trackAbs}
          />
        </div>
        <div className="container-fluid">
          <div className={styles.trackInner}>
            <div className="row">
              <div className="col-lg-6">
                <div className={styles.trackLeft} data-aos="zoom-in-right">
                  <img
                    src={require("../../../assets/images/trackLeft.png")}
                    alt=""
                  />
                </div>
              </div>
              <div className="col-lg-6">
                <div className={styles.trackRight} data-aos="zoom-in-left">
                  <h2>
                    <span>Track Metrics</span> that Matter
                  </h2>
                  <ul>
                    <li>Community Engagement Velocity</li>
                    <li>KYC and Audit</li>
                    <li>Rewards and Taxes</li>
                    <li>
                      Whale Activity <br />
                      and more…
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.comingSoon}>
        <div className="container-fluid">
          <div className={styles.comingSoonInner}>
            <div className="row">
              <div className="col-lg-6">
                <div className={styles.comingSoonLeft} data-aos="zoom-in-right">
                  <div className={styles.bubble}>COMING SOON</div>
                  <h2>
                    Don’t Be Last! <span>Get Proactive with Alerts</span>
                  </h2>
                  <ul>
                    <li>Twitter, Discord, SMS, E-mail</li>
                    <li>Know when #announcements are posted</li>
                    <li>Be first to whitelists and presales</li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-6">
                <div className={styles.comingSoonRight} data-aos="zoom-in-left">
                  <img
                    src={require("../../../assets/images/comingSoonRight.png")}
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.compare} data-aos="zoom-in-left">
        <div>
          <img
            src={require("../../../assets/images/b&cRightAbs.png")}
            alt=""
            className={styles.compareRightAbs}
          />
        </div>
        <div className="container-fluid">
          <div className={styles.compareInner}>
            <div className="row">
              <div className="col-lg-6">
                <div className={styles.compareLeft} data-aos="zoom-in-right">
                  <img
                    src={require("../../../assets/images/b&cLeft.png")}
                    alt=""
                  />
                </div>
              </div>
              <div className="col-lg-6">
                <div className={styles.compareRight} data-aos="zoom-in-left">
                  <h2>
                    <span>Build & Compare</span> Profit Scenarios
                  </h2>
                  <ul>
                    <li>Visualize complex claiming & compounding strategies</li>
                    <li>Run What-If Analysis before you invest</li>
                    <li>
                      Save winning strategies and test them on new projects
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RestWrappers;
