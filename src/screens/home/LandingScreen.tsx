import styles from "./home.module.css";
import Header from "./navbar/Header";
import Hero from "./hero/Hero";
import CardsSection from "./cardsSection/CardsSection";
import RestWrappers from "./restWrappers/RestWrappers";
import Footer from "../../components/footer/Footer";
const LandingScreen = () => {
  return (
    <>
      <div className={styles.home}>
        <Header />
        <Hero />
        <CardsSection />
        <RestWrappers />
        <Footer />
      </div>
    </>
  );
};

export default LandingScreen;
