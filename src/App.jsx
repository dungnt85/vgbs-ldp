import React, { useState, useEffect } from "react";
import { Navigation } from "./components/navigation";
import { Header } from "./components/header";
import { Features } from "./components/features";
import { About } from "./components/about";
import { Services } from "./components/services";
import { Gallery } from "./components/gallery";
import { Team } from "./components/team";
import { Sponsors } from "./components/sponsors";
import { Partners } from "./components/partners";
import { Media } from "./components/media";
import { Footer } from "./components/footer";
import JsonData from "./data/data.json";
import SmoothScroll from "smooth-scroll";
import "./App.css";
import { Mediapartners } from "./components/media";

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});

const App = () => {
  const [landingPageData, setLandingPageData] = useState({});
  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);

  return (
    <div>
      <Navigation />
      <Header data={landingPageData.Header} />
      <About data={landingPageData.About} />
      <Services data={landingPageData.Services} />
      <Gallery data={landingPageData.Gallery} />
      <Team data={landingPageData.Team} />
      <Sponsors data={landingPageData.Sponsors} />
      <Partners data={landingPageData.Partners} />
      <Media data={landingPageData.Mediapartners} />
      <Footer />
    </div>
  );
};

export default App;
