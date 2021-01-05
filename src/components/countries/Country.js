import React, { Component } from "react";
import css from "./countries.module.css";
import { formatNumber } from "../helpers/formatHelpers";

export default class Country extends Component {
  render() {
    const {
      country,
      infected,
      tested,
      recovered,
      deceased,
      lastUpdatedApify,
    } = this.props.country;
    return (
      <div className={css.countryName}>
        <table>
          <tbody>
            <tr className={`${css.countryName} ${css.flexRow}`}>
              <td style={{ justifyContent: "center" }}>{country} |</td>
              <td style={{ justifyContent: "center" }}>
                {formatNumber(infected)} |
              </td>
              <td style={{ justifyContent: "center" }}>
                {tested > 1 ? `${formatNumber(tested)}` : "NA"} |
              </td>
              <td style={{ justifyContent: "center" }}>{recovered > 1 ? `${formatNumber(recovered)}` : "NA"}  |</td>
              <td style={{ justifyContent: "center" }}>
                {formatNumber(deceased)} |
              </td>
              <td style={{ justifyContent: "center" }}>{lastUpdatedApify} </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}
/**
 * <body className="container">
<table >
  <thead>
    <tr>
      <th>País</th>
      <th>Infectados</th>
      <th>Recuperados</th>
    </tr>
  </thead>
  
  <tbody>
    <tr className={css.flexRow}>
      <td>{country}</td>
      <td>{formatNumber(infected)}</td>
      <td>{recovered}</td>
    </tr>
    
  </tbody>
</table>
</body>
 */
