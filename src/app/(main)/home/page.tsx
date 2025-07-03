import Cat from "./components/cat";
import Fashion from "./components/fashion";
import Gallery from "./components/gallery";
import GridGallery from "./components/gridgallery";
import Hero from "./components/hero";
import VideoSlider from "./components/video";
import Wave from "./components/wave";
import App from "./components/app";
import Web from "./components/web";
import Partner from "./components/partner";
import Slider from "./components/slider";
import Clip from "./components/clip";
import Why from "./components/why";

const HomePage = () => {
  return (
    <main>
      <Hero />
      <Cat />
      <Wave />
      <VideoSlider />
      <Fashion />
      <Clip />
      <Why />
      <Gallery />
      <Slider />
      <GridGallery />
      <App />
      <Web />
      <Partner />
    </main>
  );
};

export default HomePage;
