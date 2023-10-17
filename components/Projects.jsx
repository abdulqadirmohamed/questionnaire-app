"use client";
import React, { useEffect, useState } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { ProjectsLists } from "./ProjectLists";

const Projects = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    ProjectsLists.getProductsMini().then((data) => setProducts(data));
  }, []);

  return (
    <div className="w-[95%] mx-auto">
      <DataTable value={products} tableStyle={{ minWidth: "50rem" }}>
       
        <Column
          field="name"
          header="Name"
          sortable
          style={{ width: "15%" }}
        ></Column>
        <Column
          field="status"
          header="Status"
          sortable
          style={{ width: "25%" }}
        ></Column>
        <Column
          field="owner"
          header="Owner"
          sortable
          style={{ width: "25%" }}
        ></Column>
        <Column
          field="datemodified"
          header="Date Modified"
          sortable
          style={{ width: "25%" }}
        ></Column>
        <Column
          field="datedeployed"
          header="Date Deployed"
          sortable
          style={{ width: "25%" }}
        ></Column>
        <Column
          field="submisions"
          header="Submisions"
          sortable
          style={{ width: "25%" }}
        ></Column>
      </DataTable>
    </div>
  );
};

export default Projects;
