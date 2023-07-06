import React from "react";
import { DopeTable } from "../components";

const DataAnalytics = () => {
  /**
   * Not everything needs a context. For example,
   * the DopeTable component may require data from some API.
   * There's no need to create a context to get the data into the DopeTable.
   * Simply rely on your standard useEffect API call to store the data
   * in state, and pass it to the DopeTable component as a prop.
   *
   * In general, if information/functions/etc. need only be shared between a parent
   * and one/several children/sibling components, just rely on props.
   */

  return (
    <>
      <DopeTable />
    </>
  );
};

export default DataAnalytics;
