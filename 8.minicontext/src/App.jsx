import { useState, useEffect } from "react";
import { useTheme } from "./context/ThemeContext";

import "./App.css";
import { Header, Content } from "./components";

function App() {
  const { isDarkTheme } = useTheme();
  useEffect(() => {
    const app = document.getElementById("mainApp");
    if (isDarkTheme) {
      app.classList.add("dark");
    } else {
      app.classList.remove("dark");
    }
  }, [isDarkTheme]);

  return (
    <div id="mainApp">
      <Header />
      <Content />
    </div>
  );
}

export default App;
