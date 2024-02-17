"use client";
import React from "react";
import { useState,useEffect } from "react";

import GroupByPriority from "./GroupBy/GroupByPriority.jsx";
import GroupByStatus from "./GroupBy/GroupByStatus.jsx";
import GroupByUser from "./GroupBy/GroupByUser.jsx";

import getBodyData from "../services/GlobalApi.jsx"

const Body = ({
  selectedGrouping,
  setSelectedGrouping,
  selectedOrdering,
  setSelectedOrdering,
}) => {
  const [data, setData] = useState(null);

  // Effect hook to fetch data when the component mounts
  useEffect(() => {
    getBodyData()
        .then(response => {

            setData(response.data);
        })
        .catch(error => {
            console.error(error);
        });
}, []);



  // Function to render the appropriate grouping component based on user selection
  const renderGroupingComponent = () => {
    switch (selectedGrouping) {
      case "Status":
        return (
          <GroupByStatus
            data={data}
            grouping={selectedGrouping}
            ordering={selectedOrdering}
          />
        );
      case "Priority":
        return (
          <GroupByPriority
            data={data}
            grouping={selectedGrouping}
            ordering={selectedOrdering}
          />
        );
      case "User":
        return (
          <GroupByUser
            data={data}
            grouping={selectedGrouping}
            ordering={selectedOrdering}
          />
        );
      default:
        return null;
    }
  };

  return (
    <div className="w-full h-auto  pb-[100px]">
      {/* Conditional rendering based on data availability */}
      {data ? (
        <div className="px-[20px]">{renderGroupingComponent()}</div>
      ) : (
        <p></p>
      )}
    </div>
  );
};

export default Body;
