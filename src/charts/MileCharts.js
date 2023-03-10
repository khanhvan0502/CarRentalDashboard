import { ResponsiveContainer, BarChart, Bar, XAxis, Tooltip } from "recharts";
import React from "react";
import mileStaticsData from "../assets/dummy-data/mileStatics";

const MileCharts = () => {
  return (
    <ResponsiveContainer width="100%">
      <BarChart data={mileStaticsData}>
        <XAxis dataKey="name" stroke="#fff" />
        <Bar dataKey="mileStats" stroke="#fff" fill="#2884ff" barSize={30} />
        <Tooltip wrapperClassName="tooltip__style" cursor={false} />-
      </BarChart>
    </ResponsiveContainer>
  );
};

export default MileCharts;
