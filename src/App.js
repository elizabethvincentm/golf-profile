import "./App.css";
import { ProfileCard } from "./components/ProfileCard";
import { ToggleTheme } from "./components/ToggleTheme";
import { useState } from "react";
import profiles from "./__testdata/player_profiles.json";
import { ProfileCardLoader } from "./components/ProfileCardLoader";

function App() {
  const [theme, setTheme] = useState("theme-light");
  const handleToggleTheme = () => {
    setTheme((prev) => (prev === "theme-light" ? "theme-dark" : "theme-light"));
  };
  console.log(profiles);
  return (
    <div className={`App ${theme} container mx-auto px-20 py-20`}>
      <ToggleTheme currentTheme={theme} onClick={handleToggleTheme} />
      <div className="flex">
        <ProfileCard profile={profiles[9]} theme={theme} />
        <ProfileCardLoader />
      </div>
    </div>
  );
}

export default App;
