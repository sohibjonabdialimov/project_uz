import "./App.css";
import About from "./components/About/About";
import Address from "./components/Address/Address";
import CarouselPage from "./components/CarouselPage/CarouselPage";
import Footer from "./components/Footer/Footer";
import Form from "./components/Form/Form";
import Hero from "./components/Hero/Hero";
import Lobbi from "./components/Lobbi/Lobbi";
import Map from "./components/Map/Map";
import TerasPage from "./components/TerasPage/TerasPage";

function App() {
  return <div className="w-full">
    <Hero />
    <About />
    <CarouselPage />
    <TerasPage />
    <Lobbi />
    <Address />
    <Map />
    <Form />
    <Footer />
    
  </div>;
}

export default App;
