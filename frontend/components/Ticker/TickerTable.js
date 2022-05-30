import React from "react";
import Main from "./Main";
import Holding from "./Holding";

function TickerTable({ categoryName }) {
  if (categoryName === "main") {
    return ( 
      <Main />
    );
  } else if (categoryName === "holding") {
    return (
      <Holding />
    )
  } else if(categoryName === "interest") {
    // return (
    //   // <Interest />
    // );
  }
  return null;
}

export default TickerTable;
