import React from "react";
import { Visibility } from "@material-ui/icons";

import { newJoinUsers } from "../../newJoinUsers";

import "./widgetSm.css";

export default function WidgetSm() {
  return (
    <div className="widgetSm">
      <span className="widgetSmTitle">New Join Members</span>
      <ul className="widgetSmList">
        {newJoinUsers.map(({ username, title, img }, index) => (
          <li className="widgetSmListItem">
            <img src={img} alt="" className="widgetSmImg" />
            <div className="widgetSmUser">
              <span className="widgetSmUsername">{username}</span>
              <span className="widgetSmUserTitle">{title}</span>
            </div>
            <button className="widgetSmButton">
              <Visibility className="widgetSmIcon" />
              Display
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
