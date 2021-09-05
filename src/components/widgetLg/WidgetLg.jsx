import React from "react";

import { latestTransactions } from "../../latestTransactions";
import "./widgetLg.css";

export default function WidgetLg() {
  const Button = ({ type }) => (
    <button className={"widgetLgButton " + type}>{type}</button>
  );

  return (
    <div className="widgetLg">
      <h3 className="widgetLgTitle">Latest Transactions</h3>
      <table className="widgetLgTable">
        <tr className="widgetLgTr">
          <th className="widgetLgTh">Customer</th>
          <th className="widgetLgTh">Date</th>
          <th className="widgetLgTh">Amount</th>
          <th className="widgetLgTh">Status</th>
        </tr>
        {latestTransactions.map(
          ({ username, img, amount, date, status }, index) => (
            <tr className="widgetLgTr" key={index}>
              <td className="widgetLgUser">
                <img src={img} alt="" className="widgetLgImg" />
                <span className="widgetLgName">{username}</span>
              </td>
              <td className="widgetLgDate">{date}</td>
              <td className="widgetLgAmount">{amount}</td>
              <td className="widgetLgStatus">
                <Button type={status} />
              </td>
            </tr>
          )
        )}
      </table>
    </div>
  );
}
