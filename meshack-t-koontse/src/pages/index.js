import LandingPage from "../components/LandingPage";
import AboutMe from "../components/AboutMe";
import Projects from "../components/Projects";
import ContactForm from "../components/ContactForm";
import Head from "next/head";

const HomePage = () => {
  return (
    <>
      <Head>
        <title>Meshack Tshenolo Koontse</title>
        <meta name="description" content="Full-stack developer in Botswana" />
        <meta
          name="google-site-verification"
          content="ow_WhINdUJ7A1uoK2iFPiR8gOO-aRarrPmhCD7uQVTk"
        />
      </Head>
      <LandingPage />
      <AboutMe />
      <Projects />
      <ContactForm />
    </>
  );
};

export default HomePage;
