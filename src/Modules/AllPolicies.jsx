import React, { useState, useEffect } from "react";
// import { Dropdown } from "react-bootstrap";
import { useSelector } from "react-redux";
import ToolkitProvider, { Search } from "react-bootstrap-table2-toolkit";
import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory from "react-bootstrap-table2-paginator";
// import { BsCheck } from "react-icons/bs";
import moment from "moment";

export const AllPolicies = (props) => {
  // const [searchText, setSearchText] = useState("");
  // const [sortType, setSortType] = useState("Policy ID");
  const [tableData, setTableData] = useState([]);

  const allPolicies = useSelector((state) => state);

  const { SearchBar } = Search;

  useEffect(() => {
    setTableData(allPolicies);
  }, [allPolicies, tableData]);

  // const searchChange = (e) => {

  // let val = e.target.value;

  // if (val) {
  //   if (/^\d+$/.test(val) === false) {
  //     val = val.replace(/[^\d]/g, "");
  //   }
  //   if (val.length > 1000000) {
  //     let a = val.replace(/[^\d]/g, "");
  //     val = a.substring(0, val.length - 1);
  //   }
  // }

  // let newFormData = { ...formData };
  // newFormData.premium = val;
  // setFormData(newFormData);

  // let val = e.target.value;
  // setSearchText(val);

  // let newTableData = [...tableData];

  // for (let i = 0; i < tableData.length; i++) {
  //   let test = `${tableData[i].policy_id}`.includes(val);
  //   let test2 = `${tableData[i].customer_id}`.includes(val);
  //   let test3 = test || test2;

  //   debugger;
  //   if (
  //     `${tableData[i].policy_id}`.includes(val) ||
  //     `${tableData[i].customer_id}`.includes(val)
  //   ) {
  //     newTableData.push(tableData[i]);
  //   }
  // }

  // newTableData.filter(
  //   (data) => data.policy_id === Number(val)
  //   // || `${data.customer_id}`===val
  // );
  // debugger;

  // setTableData(newTableData);
  // };

  // const sortTypeChange = (type) => {
  //   setSortType(type);
  // };

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
        // rowEvents={rowEvents}
        //  pagination={paginationFactory()}
        search
      >
        {(props) => (
          <>
            <div className="user-action-row">
              <SearchBar
                {...props.searchProps}
                placeholder="Search by Policy Id, Customer Id"
                // onChange={(e) => searchChange(e)}
                // value={searchText}
              />
              {/* <input
          type="text"
          placeholder="Search by Ploicy Details, Policy Id, Customer Id"
          
        /> */}
              {/* <Dropdown className="sort-dropdown">
                <Dropdown.Toggle id="dropdown-basic">
                  {sortType}
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  {sortTypeList.map((data, idx) => (
                    <Dropdown.Item
                      key={idx}
                      onClick={() => sortTypeChange(data)}
                      className={
                        sortType === data ? "sort-item active" : "sort-item"
                      }
                    >
                      {data}
                      {sortType === data && <BsCheck className="ml-3" />}
                    </Dropdown.Item>
                  ))}
                </Dropdown.Menu>
              </Dropdown> */}
            </div>

            <div className="policies-table">
              <BootstrapTable
                {...props.baseProps}
                pagination={paginationFactory()}
                // keyField="policy_id"
                // data={tableData}
                // columns={tableColumns}
                rowEvents={rowEvents}
                // pagination={paginationFactory()}
              />
            </div>
          </>
        )}
      </ToolkitProvider>
    </div>
  );
};

// const sortTypeList = ["Policy ID", "Purchase Date", "Customer ID", "Premium"];
