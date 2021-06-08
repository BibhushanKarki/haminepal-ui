import "./App.css";
import Routes from "./Routes";
import Header from "./components/Header";
import Footer from "./components/Footer";
import AOS from "aos";
import "aos/dist/aos.css";

AOS.init();

const App = () => {
  return (
    <>
      <Header />
      <div className="page-content">
        <Routes />
      </div>
      <Footer />
    </>
  );
};

export default App;
