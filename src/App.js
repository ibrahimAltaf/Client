import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import LogoSlider from "./components/LogoSlider";
import Home from "./components/Home";
import Tehcnolgies from "./components/Tehcnolgies";
import Contactus from "./components/Contactus";
import OurApproch from "./components/OurApproch";
import ClientSays from "./components/ClientSays";
import CaseStudies from "./components/CaseStudies";
import WhyChoice from "./components/WhyChoice";
import Meet from "./components/Meet";
import TechStack from "./components/TechStack";
import Industries from "./components/Industries";
import InsightCompo from "./components/InsightCompo";
import Growing from "./components/Growing";
import MobileHeader from "./components/MobileHeader";
import HeaderGreen from "./components/HeaderGreen";
import About from "./components/About";
import ReviewList from "./components/ReviewList";
import WebDEv from "./components/WebDEv";
import Footer from "./components/Footer";
import Evolution from "./components/Evolution";
import Reasearch from "./components/Reasearch";
import CustomSoftware from "./components/CustomSoftware";
import TMS from "./components/TMS";
import "./app.css";
import LetsDIscus from "./components/LetsDIscus";
import Digital from "./components/Digital";
import Logistic from "./components/Logistic";
import Transportation from "./components/Transportation";
import CaseStudy from "./components/CaseStudy";
import CaseStudyPage from "./components/CaseStudyPage";
import CaseSlider from "./components/CaseSlider";
import CaseStudySlider from "./components/CaseStudySlider";

function App() {
  return (

    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/techs" element={<Tehcnolgies />} />
        <Route path="/contact" element={<Contactus />} />
        <Route path="/about" element={<About />} />
        <Route path="/webdevelopment" element={<WebDEv />} />
        <Route path="/evolution" element={<Evolution />} />
        <Route path="/Customsoftware" element={<CustomSoftware />} />
        <Route path="/TMS" element={<TMS />} />
        <Route path="/reasearch" element={<Reasearch />} />
        <Route path="/digital" element={<Digital />} />
        <Route path="/logistic" element={<Logistic />} />
        <Route path="/transportation" element={<Transportation />} />
        <Route path="/caseStudy" element={<CaseStudy />} />
      </Routes>
    </Router>
  );
}

export default App;
