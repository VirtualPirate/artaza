import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Nav from "../components/nav/nav.component";
import IntroductionSection from "../components/introduction-section/introduction-section.component";
import SpecialitySection from "../components/speciality-section/speciality-section.component";
import Footer from "../components/footer/footer.component";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <IntroductionSection></IntroductionSection>
        <SpecialitySection></SpecialitySection>
        <Footer></Footer>
      </main>
    </>
  );
}
