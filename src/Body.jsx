import axios from "axios";
import React, { useEffect, useState } from "react";

import Loader from "./Loader";
import Sidebar from "./Sidebar";
import PlotData from "./PlotData";
import NullState from "./NullState";

const Body = () => {
  const [loading, setLoading] = useState(false);
  const [chartData, setChartData] = useState(null);
  const [sidebarOptions, setSidebarOptions] = useState([]);
  const [selectedSidebarIndex, setSelectedSidebarIndex] = useState(null);

  useEffect(() => {
    fetchChartData();
  }, []);

  const createOptions = (data) => {
    const arr = [];
    if (!data?.length) return;

    data?.forEach((obj, i) => {
      const labelKey = Object?.keys(obj)
        ?.filter((key) => !key)
        ?.at(0);
      let label = obj?.[labelKey];
      label = label.substring(0, label?.lastIndexOf(" "));

      const data = { label, index: i };
      arr.push(data);
    });

    setSidebarOptions(arr);
  };

  const fetchChartData = async () => {
    try {
      setLoading(true);

      const res = await axios.get("https://sheetdb.io/api/v1/7u2bgybul3n1r");
      const data = res?.data || null;

      createOptions(data);

      if (!!data?.length) setChartData(data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const handleSidebarSelect = (i) => setSelectedSidebarIndex(i);

  if (loading) return <Loader />;

  return (
    <div className="flex flex-1 pt-2 pb-12 px-12 gap-x-12">
      <Sidebar
        options={sidebarOptions}
        handleSelect={handleSidebarSelect}
        selectedIndex={selectedSidebarIndex}
      />
      {chartData && selectedSidebarIndex === null && <NullState />}
      {selectedSidebarIndex !== null && (
        <PlotData chartData={chartData?.[selectedSidebarIndex]} />
      )}
    </div>
  );
};

export default Body;
