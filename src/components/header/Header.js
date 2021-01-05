import React from "react";
import { formatNumber } from "../helpers/formatHelpers";

import css from "./header.module.css";

export default function Header({
  filter,
  countryCount,
  totalInfected,
  onChangeFilter,
}) {
  return (
    <div className={css.flexRow}>
      <div className="input-field col s12">
        <input
          className={css.centeredTitle}
          placeholder="País"
          type="text"
          autoFocus
          value={filter}
          onChange={onChangeFilter}
        />
      </div>{" "}
      <br></br>{" "}
      <span className={css.countries}>
        {countryCount > 1 ? "Países" : "País"} :{"  "}
        <strong>{countryCount}</strong>
      </span>{" "}
      <span className={css.separator}>|</span>
      {"  "}
      <span className={css.infected}>
        Total de infectados : <strong>{formatNumber(totalInfected)} </strong>
      </span>
    </div>
  );
}

// const styles= {
//   centeredTitle:{
//     textAlign: 'left',
//     color: 'blue',
//     fontFamily: 'Montserrat'

//   }
// }
