import "./App.css";
import { ProfileCard } from "./components/ProfileCard";
import { ToggleTheme } from "./components/ToggleTheme";
import { useState } from "react";

function App() {
  const [theme, setTheme] = useState("theme-light");
  const handleToggleTheme = () => {
    setTheme((prev) => (prev === "theme-light" ? "theme-dark" : "theme-light"));
  };
  return (
    <div className={`App ${theme} container mx-auto px-20 py-20`}>
      <ToggleTheme currentTheme={theme} onClick={handleToggleTheme} />
      <ProfileCard />
    </div>
  );
}

export default App;
