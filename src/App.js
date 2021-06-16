import "./App.css";
import Routes from "./Routes";
import Header from "./components/Header";
import Footer from "./components/Footer";
import AOS from "aos";
import "aos/dist/aos.css";
import ScrollToTop from "./utils/ScrollToTop";

AOS.init();

var donation = JSON.parse(localStorage.getItem('donation')),
    time_now = (new Date()).getTime();

if (donation) {
    // .getTime() returns milliseconds so 1000 * 60 * 60 * 24 = 24 days
    if ((time_now - donation.time) > 15 * 60 * 1000) {
        localStorage.clear();

        localStorage.setItem('donation', null);
    }
}

const App = () => {
    return (
        <>
            <Header />
            <div className="page-content">

                <ScrollToTop />
                <Routes />
            </div>
            <Footer />
        </>
    );
};

export default App;
