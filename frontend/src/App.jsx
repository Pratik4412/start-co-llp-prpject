import { Outlet } from "react-router-dom";
import "./App.css";
import Header from "./pages/Header";
import Footer from "./pages/Footer";
import useAOS from "./data/hooks/useAOS";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  useAOS();
  return (
    <section>
      <Header />
      <main>
        <ScrollToTop />
        <Outlet />
      </main>
      <Footer />
    </section>
  );
}

export default App;
