import React from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import {
  viewState,
  searchTextState,
  productFilteredState,
  filteredCounts,
} from "../../recoil/productRecoil";
const Sidebar = () => {
  const [view, setView] = useRecoilState(viewState);
  const [searchText, setSearchText] = useRecoilState(searchTextState);
  const [filter, setFilter] = useRecoilState(productFilteredState);
  const totalItems = useRecoilValue(filteredCounts);
  return (
    <div className="columns is-multiline">
      <div className="column is-12">
        <h2 className="subtitle">({totalItems}) products</h2>
        <div className="field has-addons">
          <div className="control">
            <button
              className={`button ${view === "column" ? `is-dark` : null}`}
              onClick={() => setView("column")}
            >
              <i className="fas fa-th-large"></i>
            </button>
          </div>
          <div className="control">
            <button
              className={`button ${view === "row" ? `is-dark` : null}`}
              onClick={() => setView("row")}
            >
              <i className="fas fa-grip-horizontal"></i>
            </button>
          </div>
        </div>
        <h3 className="subtitle is-6 mb-2">Search Products</h3>
        <input
          className="input"
          type="text"
          placeholder="Search your product..."
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
      </div>
      <div className="column is-12">
        <h3 className="subtitle is-6 mb-2">Filter</h3>
        <div className="select is-fullwidth">
          <select value={filter} onChange={(e) => setFilter(e.target.value)}>
            <option value="">show all</option>
            <option value="fruit">fruit</option>
            <option value="vegetables">vegatables</option>
            <option value="meals">meals</option>
            <option value="beverages">beverages</option>
            <option value="utensils">utensils</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
