import Home from "./Home";
import COUNTRIES from "../data.json";
import CardDetails from "./CardDetails";
import { useState } from "react";
function App() {
  const [country, setCountry] = useState(null);
  const [theme, setTheme] = useState("dark");
  function handleCountry(value) {
    setCountry(value);
  }
  function switchTheme() {
    if (theme === "dark") setTheme("light");
    else setTheme("dark");
  }

  return (
    <div className={theme === "light" ? "light" : ""}>
      {!country ? (
        <Home
          handleCountry={handleCountry}
          theme={theme}
          switchTheme={switchTheme}
        />
      ) : (
        <CardDetails
          theme={theme}
          switchTheme={switchTheme}
          country={country}
          handleCountry={handleCountry}
        />
      )}
    </div>
  );
}

export default App;
