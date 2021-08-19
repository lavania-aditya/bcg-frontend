import React, { useState } from "react";
import { Dropdown } from "react-bootstrap";
import BootstrapTable from "react-bootstrap-table-next";
import { BsCheck } from "react-icons/bs";
import moment from "moment";
import { data } from "../Data";

export const AllPolicies = (props) => {
  const [searchText, setSearchText] = useState("");
  const [sortType, setSortType] = useState("Policy ID");

  const searchChange = (e) => {
    setSearchText(e.tareget.value);
  };

  const sortTypeChange = (e, type) => {
    setSortType(type);
  };

  const tableColumns = [
    {
      dataField: "policy_id",
      text: "Policy ID",
    },
    {
      dataField: "date_of_purchase",
      text: "Purchase Date",
      formatter: (cell, row, rowIndex) => {
        return moment(row.date_of_purchase).format("MMM Do YYYY");
      },
    },
    {
      dataField: "customer_id",
      text: "Customer ID",
    },
    {
      dataField: "fuel",
      text: "Fuel Type",
    },
    {
      dataField: "vechile_segment",
      text: "Segment",
    },
    {
      dataField: "premium",
      text: "Premium",
    },
    {
      dataField: "customer_Income_group",
      text: "Income Group",
    },
    {
      dataField: "customer_region",
      text: "Region",
    },
  ];

  const rowEvents = {
    onClick: (e, row, rowIndex) => {
      return props.history.push({
        pathname: `/policy/${row.policy_id}`,
        state: row,
      });
    },
  };

  return (
    <div className="all-policies">
      <div className="user-action-row">
        <input
          type="text"
          placeholder="Search by Ploicy Details, Policy Id, Customer Id"
          onChange={(e) => searchChange(e)}
          value={searchText}
        />
        <Dropdown className="sort-dropdown">
          <Dropdown.Toggle id="dropdown-basic">{sortType}</Dropdown.Toggle>
          <Dropdown.Menu>
            {sortTypeList.map((data, idx) => (
              <Dropdown.Item
                key={idx}
                onClick={(e) => sortTypeChange(e, data)}
                className={sortType === data ? "sort-item active" : "sort-item"}
              >
                {data}
                {sortType === data && <BsCheck className="ml-3" />}
              </Dropdown.Item>
            ))}
          </Dropdown.Menu>
        </Dropdown>
      </div>

      <div className="policies-table">
        <BootstrapTable
          keyField="policy_id"
          data={data}
          columns={tableColumns}
          rowEvents={rowEvents}
        />
      </div>
    </div>
  );
};

const sortTypeList = ["Policy ID", "Purchase Date", "Customer ID", "Premium"];
