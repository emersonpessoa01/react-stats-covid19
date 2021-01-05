import React from "react";
import Country from "./Country";
import css from "./countries.module.css";

export default function Coutries({ countries }) {
  return (
    <div className={`${css.border}`}>
      <div>
        <table>
          <thead>
            <tr className={`${css.countryName} ${css.flexRow}`}>
              <th>País |</th>
              <th>Infectados |</th>
              <th>Testados |</th>
              <th>Recuperados |</th>
              <th>Falecidos |</th>
              <th>Últ. atualização</th>
            </tr>
          </thead>
        </table>
      </div>
      {countries.map((country) => {
        return <Country key={country.country} country={country} />;
      })}
    </div>
  );
}
