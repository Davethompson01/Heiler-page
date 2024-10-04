import Nav from "./Components/Nav";
import Home from "./Pages/Home";
import Contact from "./Pages/Contact";
// import { Typography } from '@mui/material';
import React, { useState, useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";

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
    <div  >
        {/* <Typography variant="h1" fontFamily="Cabin"> */}
    
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
     
      {/* </Typography> */}
    </div>
  );
}

export default App;
