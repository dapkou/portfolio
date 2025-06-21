import { HashRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";

const App = () => (
  <div className="relative">
    <div
      className="fixed inset-0 -z-10 bg-cover bg-center bg-fixed"
      style={{ backgroundImage: `url(${import.meta.env.BASE_URL}imgs/hero-bg.jpg)` }}
    />
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </HashRouter>
  </div>
);

export default App;