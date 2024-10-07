import Nav from "./Components/Nav";
import Home from "./Pages/Home";
import Contact from "./Pages/Contact";

import React, { useState, useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Footer from "./Components/Footer";

function App() {
  const [scrollToAbout, setScrollToAbout] = useState(false);
  const location = useLocation();
  const handleScrollToAbout = () => {
    if (location.pathname !== "/") {
      console.log("scrolled");
      setScrollToAbout(true);
    } else {
      window.scrollTo(0, 0);
      console.log("home");
      setScrollToAbout(true);
      console.log("about");
    }
  };

  useEffect(() => {
    if (location.pathname === "/" && scrollToAbout) {
      setScrollToAbout(false);
    }
  }, [location, scrollToAbout]);
  return (
    <div>
      <Nav handleScrollToAbout={handleScrollToAbout} />
      <Routes>
        <Route
          path="/"
          element={
            <Home
              scrollToAbout={scrollToAbout}
              setScrollToAbout={setScrollToAbout}
            />
          }
        />
        <Route path="Contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
