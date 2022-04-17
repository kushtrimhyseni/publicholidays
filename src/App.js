import "./App.css";
import Footer from "./components/Footer";
import HolidaysAPI from "./components/HolidaysAPI";
import SupportedCountry from "./components/SupportedCountry";
function App() {
  return (
    <>
      <HolidaysAPI />
      <SupportedCountry />
      <Footer />
    </>
  );
}

export default App;
