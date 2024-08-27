import React, { useState, useEffect } from "react";
import { Navigation } from "./components/navigation";
import { Header } from "./components/header";
import { Events} from "./components/events";
import { About } from "./components/about";
import { Highlights } from "./components/highlights";
import { Featured } from "./components/featured";
import { Footer } from "./components/footer";
import JsonData from "./data/data.json";
import SmoothScroll from "smooth-scroll";
import "./App.css";

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
      <Events data={landingPageData.Features} />
      <Featured data={landingPageData.Team} />
      <Partners />
      <Footer />
    </div>
  );
};

export default App;
