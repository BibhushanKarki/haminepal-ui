import "./App.css";
// import "./CustomBootstrapTheme.scss";
import Routes from "./Routes";
import Header from "./components/Header";
import Footer from "./components/Footer";

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
