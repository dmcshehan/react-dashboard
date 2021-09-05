import React from "react";

import { userData } from "../../dummyData";

import FeaturedInfo from "../../components/featuredInfo/FeaturedInfo";
import Chart from "../../components/chart/Chart";
import WidgetSm from "../../components/widgetSm/WidgetSm";
import WidgetLg from "../../components/widgetLg/WidgetLg";

import "./home.css";

export default function home() {
  return (
    <div className="home">
      <FeaturedInfo />
      <Chart
        data={userData}
        title="User Analytics"
        grid
        dataKey="Active Users"
      />
      <div className="homeWidgets">
        <WidgetSm />
        <WidgetLg />
      </div>
    </div>
  );
}
