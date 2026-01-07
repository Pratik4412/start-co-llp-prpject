import { Outlet } from "react-router-dom";
import "./App.css";
import Header from "./pages/Header";
import Footer from "./pages/Footer";
import useAOS from "./data/hooks/useAOS";

function App() {
  useAOS();
  return (
    <section>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </section>
  );
}

export default App;
