import React from "react";
import Header from "./Header";
import COUNTRIES from "../data.json";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

function CardDetails({
  theme,
  switchTheme,
  country = COUNTRIES[1],
  handleCountry,
}) {
  return (
    <div>
      <Header theme={theme} switchTheme={switchTheme} />
      <div className="main-wrapper">
        <button
          onClick={() => handleCountry(null)}
          className="box-shadow basic-input-container"
        >
          <div>
            <ArrowBackIcon />
          </div>
          <div>Back</div>
        </button>
        <div className="card-dtails-container">
          <div className="flag-wrapper">
            <div className="box-shadow">
              <img src={country.flag} alt="flag" />
            </div>
          </div>
          <div className="details-wrapper">
            <div className="title">{country.name}</div>
            <div className="info">
              <div>
                <div className="info-line">
                  <span>Native Name: </span>
                  <span>{country.nativeName}</span>
                </div>
                <div className="info-line">
                  <span>Population: </span>
                  <span>{country.population}</span>
                </div>
                <div className="info-line">
                  <span>Region: </span>
                  <span>{country.region}</span>
                </div>
                <div className="info-line">
                  <span>Sub Region: </span>
                  <span>{country.subregion}</span>
                </div>
                <div className="info-line">
                  <span>Capital: </span>
                  <span>{country.capital}</span>
                </div>
              </div>
              <div>
                <div className="info-line">
                  <span>Top Level Domain: </span>
                  <span>
                    {country.topLevelDomain?.map((domain, i) => {
                      return (
                        <span key={i}>
                          {domain}
                          {i !== country.topLevelDomain.length - 1
                            ? ", "
                            : null}
                        </span>
                      );
                    })}
                  </span>
                </div>
                <div className="info-line">
                  <span>Currencies: </span>
                  <span>
                    {country.currencies.map((currencie, i) => {
                      return (
                        <span key={i}>
                          {currencie.code}
                          {i !== country.currencies.length - 1 ? ", " : null}
                        </span>
                      );
                    })}
                  </span>
                </div>
                <div className="info-line">
                  <span>Languages: </span>
                  <span>
                    {country.languages.map((language, i) => {
                      return (
                        <span>
                          {language.name}
                          {i !== country.languages.length - 1 ? ", " : null}
                        </span>
                      );
                    })}
                  </span>
                </div>
              </div>
            </div>
            <div className="borders info-line">
              <span>Border Countries: </span>
              <div className="borders-wrapper">
                {COUNTRIES.map((e, i) => {
                  if (country.borders?.includes(e.alpha3Code)) {
                    return (
                      <div key={i} className="box-shadow">
                        {e.name}
                      </div>
                    );
                  } else return null;
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardDetails;
