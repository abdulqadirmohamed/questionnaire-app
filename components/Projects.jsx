"use client";
import React, { useEffect, useState } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { ProjectsLists } from "./ProjectLists";
import Link from "next/link";

const Projects = () => {
  const [products, setProducts] = useState([]);
  const columns = [
    { field: "name", header: "Project Name" },
    { field: "status", header: "Status" },
    { field: "DateModified", header: "Date Modified" },
    { field: "dateDeployed", header: "Date Deployed" },
    { field: "submission", header: "Submission" },
  ];
  useEffect(() => {
    ProjectsLists.getProductsMini().then((data) => setProducts(data));
  }, []);

  return (
    <div className="w-[95%] mx-auto my-5">
      <h1 className="font-bold my-2">My Projects</h1>
      <DataTable value={products} sortMode="multiple"  tableStyle={{ minWidth: "50rem" }} className="min-h-[100px] bg-white p-4">
        {columns.map((col, i) => (
            <Column key={col.field} sortable  field={col.field} header={col.header} className="py-2">
            </Column>
        ))}
      </DataTable>
    </div>
  );
};

export default Projects;
