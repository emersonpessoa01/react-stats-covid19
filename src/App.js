import React, { useEffect, useState } from "react";
import Countries from "./components/countries/Countries";
import Header from "./components/header/Header";
import css from "./components/countries/countries.module.css";

const date = new Date();
const year = date.getFullYear();
const month = (date.getMonth() + 1).toString().padStart(2, "0");
const day = date.getDate().toString().padStart(2, "0");
const hours = date.getHours().toString().padStart(2, "0");
const minutes = date.getMinutes().toString().padStart(2, "0");
const seconds = date.getSeconds().toString().padStart(2, "0");
const formattedTime = `${hours}:${minutes}:${seconds}`;
const currentDate = `${day}/${month}/${year} - ${formattedTime} `;

export default function App() {
  const [allCountries, setAllCountries] = useState([]);
  const [filteredCountries, setFilteredCountries] = useState([]);
  const [filteredInfected, setFilteredInfected] = useState(0);
  const [filter, setFilter] = useState("");

  useEffect(() => {
    const getCountries = async () => {
      const res = await fetch(
        "https://api.apify.com/v2/key-value-stores/tVaYRsPHLjNdNBu7S/records/LATEST?disableRedirect=true"
      );
      const json = await res.json();
      let formatter = currentDate;
      let allCountries = json.map(
        ({ country, tested, infected, recovered, deceased }) => {
          return {
            country,
            filterCountry: country.toLowerCase(),
            tested,
            infected,
            recovered,
            deceased,
            lastUpdatedApify: formatter,
          };
        }
      );
      console.log(allCountries);
      const filteredInfected = allCountries.reduce((accumulator, current) => {
        return accumulator + current.infected;
      }, 0);

      setAllCountries(allCountries);
      setFilteredCountries(Object.assign([], allCountries));
      setFilteredInfected(filteredInfected);
    };
    getCountries();
  }, []);

  const handleChangeFilter = (evt) => {
    const newText = evt.target.value;
    setFilter(newText);
    const filterLowerCase = newText.toLowerCase();
    const filteredCountries = allCountries.filter((country) => {
      return country.filterCountry.includes(filterLowerCase);
    });

    const filteredInfected = filteredCountries.reduce(
      (accumulator, current) => {
        return accumulator + current.infected;
      },
      0
    );
    console.log(filteredCountries);
    setFilteredCountries(filteredCountries);
    setFilteredInfected(filteredInfected);
  };

  const { title } = styles;

  return (
    <div className="container">
      <h1 className={css.title}>Stats COVID-19</h1>
      <h7 style={title}>By Emerson Pessoa</h7>
      <Header
        filter={filter}
        countryCount={filteredCountries.length}
        totalInfected={filteredInfected}
        onChangeFilter={handleChangeFilter}
      />

      <Countries countries={filteredCountries} />
    </div>
  );
}

const styles = {
  title: {
    marginLeft: "10px",
    color: "#c2c2c2",
  },
};
