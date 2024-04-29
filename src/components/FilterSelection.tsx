import React from "react";
import '../style/FilterSelection.css'

function FilterSelection(props: any) {
  const { filter, selectedFilter, setSelectedFilter} = props;

  return (
    <p 
    className={ filter === selectedFilter ? "filterSelected" : "filterSelection"}
    onClick={() => setSelectedFilter(filter)}
    >
      { filter }
    </p>
  )
}

export default FilterSelection;
