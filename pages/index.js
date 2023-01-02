import Head from "next/head";
import Image from "next/image";
import AboutMe from "../component/AboutMe";
import ContactMe from "../component/ContactMe";
import Education from "../component/Education";
import Footer from "../component/Footer";
import Header from "../component/Header";
import IntroComponent from "../component/IntroComponent";
import MediaCoverage from "../component/MediaCoverage";
import SkillSet from "../component/SkillSet";
import StartupJourney from "../component/StartupJourney";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div>
      <Header />
      <div className={styles.container}>
        <IntroComponent />
        <AboutMe />
        <StartupJourney />
        <Education />
        {/* <SkillSet /> */}
        <MediaCoverage />
        <ContactMe />
        <Footer />
      </div>
    </div>
  );
}
