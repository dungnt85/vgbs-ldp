import React, { useState, useEffect } from "react";
import { Navigation } from "./components/navigation";
import { Header } from "./components/header";
import { Activities, Features } from "./components/features";
import { About } from "./components/about";
import { Highlights, Services } from "./components/highlights";
import { Gallery } from "./components/gallery";
import { Featured } from "./components/featured";
import { Media, Partners } from "./components/partners";
import { Footer } from "./components/footer";
import JsonData from "./data/data.json";
import SmoothScroll from "smooth-scroll";
import "./App.css";
import { Mediapartners } from "./components/partners";

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
      <Highlights data={landingPageData.Services} />
      <Activities data={landingPageData.Features} />
      <Featured data={landingPageData.Team} />
      <Partners data="" />
      <Footer />
    </div>
  );
};

export default App;
