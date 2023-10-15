import React from "react";
import data from "../data.json";

const MySimpleForm = () => {
  return (
    <div className="w-1/3 mx-auto">
      {data.display}
      {data.components.map((data) => (
        <div>
          <h1>{data.label}</h1>
          <input type={data.type} />
        </div>
      ))}
      {/* <h1>{data.components[1]}</h1> */}
    </div>
  );
};

export default MySimpleForm;
