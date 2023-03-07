import React, { useEffect, useRef, useState } from "react";
import COUNTRIES from "../data.json";
import Header from "./Header";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import Card from "./Card";

const REGIONS = ["Africa", "America", "Asia", "Europe", "Oceania", "All"];

function Home({ theme, switchTheme, handleCountry }) {
  const [region, setRegion] = useState("");
  const [regionsList, setRegionsList] = useState([...COUNTRIES]);

  const ref = useRef(null);
  const inputRef = useRef(null);

  function handleFilter(value) {
    if (value === "All") {
      setRegion("");
    } else {
      setRegion(value);
    }
    ref.current.blur();
  }

  useEffect(() => {
    let tab = [];
    if (region !== "") {
      tab = COUNTRIES.filter((e) => e.region === region);
    } else {
      tab = [...COUNTRIES];
    }
    setRegionsList([...tab]);
  }, [region]);

  function handleSearch(e) {
    const { key } = e;
    const value = inputRef.current.value;
    if (key === "Enter") {
      if (value === "") {
        setRegionsList([...COUNTRIES]);
      } else {
        const tab = COUNTRIES.filter((e) =>
          e.name.toLowerCase().includes(value)
        );
        setRegionsList([...tab]);
      }
    }
  }

  return (
    <div>
      <Header theme={theme} switchTheme={switchTheme} />
      <div className="main-wrapper">
        <div className="inputs-container">
          <label htmlFor="search" className="basic-input-container box-shadow">
            <div>
              <SearchRoundedIcon />
            </div>
            <input
              ref={inputRef}
              type="text"
              placeholder="Search for a country..."
              id="search"
              onKeyDown={handleSearch}
            />
          </label>
          <div ref={ref} className="select basic-input-container" tabIndex="0">
            <span>{region ? region : "Filter by Region"}</span>

            <div className="options-container box-shadow">
              {REGIONS.map((option, i) => (
                <div
                  onClick={() => handleFilter(option)}
                  key={i}
                  className={option === region ? "option-selected" : ""}
                >
                  {option}
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="cards-container">
          {regionsList.map((country, i) => (
            <Card key={i} country={country} handleCountry={handleCountry} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
