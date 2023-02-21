import React from "react";
import "../styles/dashboard.css";
import SingleCard from "../components/reuseable/SingleCard";
import MileCharts from "../charts/MileCharts";
import CarStatsCharts from "../charts/CarStatsCharts";
import RecommendCarCard from "../components/UI/RecommendCarCard";
import recommendCars from "../assets/dummy-data/recommendCars";

const carObj = {
  title: "Total cars",
  totalNumber: 750,
  icon: "ri-police-car-line",
};

const tripObj = {
  title: "Daily trip",
  totalNumber: 1697,
  icon: "ri-steering-2-line",
};

const clientObj = {
  title: "Clients Annully",
  totalNumber: "85K",
  icon: "ri-user-line",
};

const distanceObj = {
  title: "Kilometers Daily",
  totalNumber: 2167,
  icon: "ri-timer-flash-line",
};

const Dashboard = () => {
  return (
    <div className="dashboard">
      <div className="dashboard__wrapper">
        <div className="dashboard__cards">
          <SingleCard item={carObj} />
          <SingleCard item={tripObj} />
          <SingleCard item={clientObj} />
          <SingleCard item={distanceObj} />
        </div>
        <div className="statics">
          <div className="stats">
            <h3 className="stats__title">Miles Statistics</h3>
            <MileCharts />
          </div>
          <div className="stats">
            <h3 className="stats__title">Cars Statistics</h3>
            <CarStatsCharts />
          </div>
        </div>
        <div className="recommend__cars-wrapper">
          {recommendCars.map((item, index) => (
            <RecommendCarCard item={item} key={item.id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
