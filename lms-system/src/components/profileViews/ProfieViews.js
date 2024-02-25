import React, { useState, useEffect } from "react";
import "./ProfilevIiews.css";
import ReactApexChart from "react-apexcharts";
import Dropdown from "react-bootstrap/Dropdown";
import { MdOutlinePerson } from "react-icons/md";
import profileview from "../../Assets/profile.png";

const ProfieViews = () => {
  // maoing Data.....................//
  const profileData = [
    {
      id: 1,
      name: "Hamish Marsh",
      role: "teacher",
      school: "High School",
    },
    {
      id: 2,
      name: "Hamish Marsh",
      role: "teacher",
      school: "High School",
    },
    {
      id: 3,
      name: "john bai",
      role: "teacher",
      school: "High School",
    },
    {
      id: 4,
      name: "Hamish Marsh",
      role: "teacher",
      school: "High School",
    },
    {
      id: 5,
      name: "Hamish Marsh",
      role: "teacher",
      school: "High School",
    },
  ];

  ////////////////////////////////
  const [selectedOption, setSelectedOption] = useState("This Week");
  const [chartState, setChartState] = useState({
    series: [{ name: "Session Duration", data: [] }],
    options: {
      chart: {
        height: 50,
        type: "line",
        zoom: { enabled: false },
      },
      dataLabels: { enabled: false },
      legend: {
        tooltipHoverFormatter: (val, opts) => {
          return (
            val +
            " - <strong>" +
            opts.w.globals.series[opts.seriesIndex][opts.dataPointIndex] +
            "</strong>"
          );
        },
      },
      markers: { size: 0, hover: { sizeOffset: 2 } },
      xaxis: {
        show: false,
        axisBorder: { show: false },
        labels: { show: false },
      },
      yaxis: {
        show: false,
      },
      tooltip: {
        y: [
          { title: { formatter: (val) => val + " (mins)" } },
          { title: { formatter: (val) => val + " per session" } },
          { title: { formatter: (val) => val } },
        ],
      },
      grid: { show: false },
      toolbar: { show: false },
      contextMenu: { show: false },
      colors: ["#24D164"],
    },
  });

  useEffect(() => {
    fetchChartData(selectedOption);
  }, [selectedOption]);

  const handleDropdownSelect = (eventKey) => {
    setSelectedOption(eventKey);
  };

  const fetchChartData = (selectedOption) => {
    const newData = getPlaceholderData(selectedOption);
    updateChart(newData);
  };

  const updateChart = (newData) => {
    setChartState((prevChartState) => ({
      ...prevChartState,
      series: [{ name: "Session Duration", data: newData }],
    }));
  };

  const getPlaceholderData = (selectedOption) => {
    switch (selectedOption) {
      case "This Week":
        return [0, 1, 5, 2, 10, 7, 8, 2];
      case "This Month":
        return [5, 10, 15, 20, 25, 30, 35, 40];
      case "This Year":
        return [50, 45, 55, 60, 70, 65, 75, 80];
      default:
        return [];
    }
  };

  return (
    <div className="profileView-main">
      <div className="profileView-main-child-1">
        <div className="profile-main-child-2">
          <h2>Profile Viewer</h2>
          <p>(This week)</p>
        </div>

        <div id="chart">
          <ReactApexChart
            key={selectedOption} // Add key prop here
            className="ReactApexChart-profile"
            options={chartState.options}
            series={chartState.series}
            type="line"
            height={100}
            width={200}
          />
        </div>
        <div className="profileView-main-child-3">
          <MdOutlinePerson className="MdOutlinePerson-profile" />
          <p>2323</p>
          <span>+12%</span>
        </div>
        <div className="profileView-main-child-4">
          <Dropdown onSelect={handleDropdownSelect}>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
              {selectedOption}
            </Dropdown.Toggle>
            <Dropdown.Menu className="profile-dropdown">
              <Dropdown.Item eventKey="This Week">This Week</Dropdown.Item>
              <Dropdown.Item eventKey="This Month">This Month</Dropdown.Item>
              <Dropdown.Item eventKey="This Year">This Year</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
      </div>
      <div>
        {profileData.map((profile) => (
          <div
            className="profileView-main-child-4"
            key={profile.id}
            style={{ marginTop: "22px" }}
          >
            <img src={profileview} alt="" />
            <div className="profile-main-child-5">
              <h4>{profile.name}</h4>
              <div className="profile-main-child-6">
                <h6>{profile.role}</h6>
                <p>({profile.school})</p>
              </div>
              <button>View Profile</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProfieViews;
