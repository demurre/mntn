import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Navigation from "./components/Navigation/Navigation";
import Social from "./components/Social/Social";
import Main from "./Pages/Main/Main";

function App() {
  return (
    <>
      <Header />
      <Navigation />
      <Social />
      <Main />
      <Footer />
    </>
  );
}

export default App;
