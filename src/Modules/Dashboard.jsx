import React, { useState, useEffect } from "react";
import { Dropdown } from "react-bootstrap";
import { useSelector } from "react-redux";
import { Bar } from "react-chartjs-2";
import { BsCheck } from "react-icons/bs";
import moment from "moment";

const regionSelectList = ["All Region", "East", "West", "North", "South"];
export const Dashboard = () => {
  const [selectedRegion, setSelectedRegion] = useState("All Region");
  const [chartData, setChartData] = useState({});

  const allPolicies = useSelector((state) => state);

  useEffect(() => {
    prepareChartData(allPolicies);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const prepareChartData = (policiesData) => {
    let dataSet = [];

    let janCount = 0;
    let febCount = 0;
    let marCount = 0;
    let aprilCount = 0;
    let mayCount = 0;
    let juneCount = 0;
    let julyCount = 0;
    let augCount = 0;
    let septCount = 0;
    let octCount = 0;
    let novCount = 0;
    let decCount = 0;

    for (let i = 0; i < policiesData.length; i++) {
      let month = moment(policiesData[i].date_of_purchase).format("MMMM");

      switch (month) {
        case "January":
          janCount = janCount + 1;
          break;
        case "February":
          febCount = febCount + 1;
          break;
        case "March":
          marCount = marCount + 1;
          break;
        case "April":
          aprilCount = aprilCount + 1;
          break;
        case "May":
          mayCount = mayCount + 1;
          break;
        case "June":
          juneCount = juneCount + 1;
          break;
        case "July":
          julyCount = julyCount + 1;
          break;
        case "August":
          augCount = augCount + 1;
          break;
        case "September":
          septCount = septCount + 1;
          break;
        case "October":
          octCount = octCount + 1;
          break;
        case "November":
          novCount = novCount + 1;
          break;
        case "December":
          decCount = decCount + 1;
          break;
        default:
          break;
      }
    }

    dataSet.push(janCount);
    dataSet.push(febCount);
    dataSet.push(marCount);
    dataSet.push(aprilCount);
    dataSet.push(mayCount);
    dataSet.push(juneCount);
    dataSet.push(julyCount);
    dataSet.push(augCount);
    dataSet.push(septCount);
    dataSet.push(octCount);
    dataSet.push(novCount);
    dataSet.push(decCount);

    let newChartData = { ...chartData };

    newChartData.labels = allMonthsList;

    newChartData.datasets = [
      {
        label: "No. of Policies",
        data: dataSet,
        backgroundColor: [
          "rgba(66, 5, 22, 0.6)",
          "rgba(191, 162, 219, 0.6)",
          "rgba(23, 0, 85, 0.6)",
          "rgba(134, 84, 57, 0.6)",
          "rgba(223, 46, 46, 0.6)",
          "rgba(127, 200, 169, 0.6)",
          "rgba(68, 73, 65, 0.6)",
          "rgba(152, 109, 142, 0.6)",
          "rgba(223, 113, 27, 0.6)",
          "rgba(189, 75, 75, 0.6)",
          "rgba(255, 103, 231, 0.6)",
          "rgba(255, 63, 0, 0.6)",
        ],
        borderColor: [
          "rgba(66, 5, 22, 1)",
          "rgba(191, 162, 219, 1)",
          "rgba(23, 0, 85, 1)",
          "rgba(134, 84, 57, 1)",
          "rgba(223, 46, 46, 1)",
          "rgba(127, 200, 169, 1)",
          "rgba(68, 73, 65, 1)",
          "rgba(152, 109, 142, 1)",
          "rgba(223, 113, 27, 1)",
          "rgba(189, 75, 75, 1)",
          "rgba(255, 103, 231, 1)",
          "rgba(255, 63, 0, 1)",
        ],
      },
    ];

    setChartData(newChartData);
  };

  const selectRegionChange = (item) => {
    setSelectedRegion(item);

    let newPoliciesData = allPolicies;

    if (item !== "All Region") {
      newPoliciesData = allPolicies.filter(
        (data) => data.customer_region === item
      );
    }
    prepareChartData(newPoliciesData);
  };

  return (
    <div className="dashboard">
      <div className="chart-heading">
        <h1>Policies Bought Every Month</h1>
        <Dropdown className="region-dropdown">
          <Dropdown.Toggle
            id={
              selectedRegion === ""
                ? "dropdown-basic placedholder"
                : "dropdown-basic"
            }
          >
            {selectedRegion === "" ? "Filter by Region" : selectedRegion}
          </Dropdown.Toggle>
          <Dropdown.Menu>
            {regionSelectList.map((data, idx) => (
              <Dropdown.Item
                key={idx}
                onClick={() => selectRegionChange(data)}
                className={
                  selectedRegion === data ? "sort-item active" : "sort-item"
                }
              >
                {data}
                {selectedRegion === data && <BsCheck className="ml-3" />}
              </Dropdown.Item>
            ))}
          </Dropdown.Menu>
        </Dropdown>
      </div>
      <div className="chart-display">
        <Bar data={chartData}  />
      </div>
    </div>
  );
};

const allMonthsList = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
