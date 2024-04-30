import { useEffect, useState } from "react";
import { Banner } from "../../Components/Banner/Baneer";
import Countries from "../../Components/Countries/Countries";
import TouristSpots from "../../Components/TouristSpots/TouristSpots";
import ContactUs from "../../Components/ContactUs/ContactUs";
import FeqSection from "../../Components/FAQ/FaqSection";

const Home = () => {
  const [theme, setTheme] = useState("light");
  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };
  useEffect(() => {
    document.querySelector("html").setAttribute("data-theme", theme);
  }, [theme]);
  return (
    <div className="p-4 md:p-6 lg:p-0">
      <div className="max-w-7xl mx-auto mt-4">
      <label className="swap swap-rotate">
        <input onClick={toggleTheme} type="checkbox" />
        <div className="swap-on border p-2 bg-[#2f9fb8] text-white font-semibold font-rancho">LIGHT MODE</div>
        <div className="swap-off border p-2 bg-[#2f9fb8] font-semibold font-rancho">DARK MODE</div>
      </label>
      </div>
      <Banner></Banner>
      <TouristSpots></TouristSpots>
      <Countries></Countries>
      <FeqSection></FeqSection>
      <ContactUs></ContactUs>
    </div>
  );
};

export default Home;
