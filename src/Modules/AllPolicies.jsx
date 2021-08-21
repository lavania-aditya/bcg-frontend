import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import ToolkitProvider, { Search } from "react-bootstrap-table2-toolkit";
import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory from "react-bootstrap-table2-paginator";
import moment from "moment";

export const AllPolicies = (props) => {
  const [tableData, setTableData] = useState([]);

  const allPolicies = useSelector((state) => state);

  const { SearchBar } = Search;

  useEffect(() => {
    setTableData(allPolicies);
  }, [allPolicies, tableData]);

  const tableColumns = [
    {
      dataField: "policy_id",
      text: "Policy ID",
    },
    {
      dataField: "date_of_purchase",
      text: "Purchase Date",
      formatter: (cell, row, rowIndex) =>
        moment(row.date_of_purchase).format("MMM Do YYYY"),
      searchable: false,
    },
    {
      dataField: "customer_id",
      text: "Customer ID",
    },
    {
      dataField: "fuel",
      text: "Fuel Type",
      searchable: false,
    },
    {
      dataField: "vechile_segment",
      text: "Segment",
      searchable: false,
    },
    {
      dataField: "premium",
      text: "Premium",
      searchable: false,
    },
    {
      dataField: "customer_income_group",
      text: "Income Group",
      searchable: false,
    },
    {
      dataField: "customer_region",
      text: "Region",
      searchable: false,
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
      <ToolkitProvider
        keyField="policy_id"
        data={tableData}
        columns={tableColumns}
        search
      >
        {(props) => (
          <>
            <div className="user-action-row">
              <SearchBar
                {...props.searchProps}
                placeholder="Search by Policy Id, Customer Id"
              />
            </div>

            <div className="policies-table">
              <BootstrapTable
                {...props.baseProps}
                pagination={paginationFactory()}
                rowEvents={rowEvents}
                noDataIndication={"No Policy Records"}
              />
            </div>
          </>
        )}
      </ToolkitProvider>
    </div>
  );
};
