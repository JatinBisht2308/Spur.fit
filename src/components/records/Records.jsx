import React from "react";
import DropDown from "../../assets/DropDown.png";
import Filter from "../../assets/Funnel.png";
import AddNew from "../../assets/AddNew.png";
import Search from '../../assets/Records-Search.png'
import "./records.css";
const Records = () => {
  return (
    <div className="Records">
      <div className="recordsHeader">
        <div className="left-header">
          <button className="active lh-in">
            Active<span className="num">16</span>
          </button>
          <button className="Pending lh-in">
            Pending<span className="num">16</span>
          </button>
          <button className="Archived lh-in">
            Archived<span className="num">8</span>
          </button>
        </div>
        <div className="right-header">
          <button className="addnew">
            <img src={AddNew} alt="" />
            Add New
          </button>
          <div className="recordsdash"></div>
          <div className="records-searchbar">
          <img src={Search} alt="" className="recordsSearch" />
          <input type="search" placeholder="Search Anything" />
          </div>
          <button className="filter-btn">
            <img src={Filter} alt="" className="funnel" />
            Filter by
            <img src={DropDown} alt="" className="dropdown"/>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Records;
