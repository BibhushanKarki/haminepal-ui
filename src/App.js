import "./App.css";
// import "./CustomBootstrapTheme.scss";
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
        <Routes />
      <Footer />
    </>
  );
};

export default App;
