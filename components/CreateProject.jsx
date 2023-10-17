"use client";
import React, { useState } from "react";
import { Button } from "primereact/button";
import { Dialog } from "primereact/dialog";
import NewProject from "./NewProject";

export default function CreateProject() {
  const [visible, setVisible] = useState(false);
  const [position, setPosition] = useState("center");
  const footerContent = (
    <div>
      <Button
        label="Close"
        icon="pi pi-times"
        onClick={() => setVisible(false)}
        className="p-button-text bg-red-500 px-4 py-2 rounded-md my-2"
      />
    </div>
  );

  const show = (position) => {
    setPosition(position);
    setVisible(true);
  };

  return (
    <div className=" flex justify-content-center">
      <Button
        label="New"
        icon="pi pi-arrow-down"
        onClick={() => show("top")}
        className="p-button-warning"
        style={{ minWidth: "10rem" }}
      />

      <Dialog
        header="Create project"
        visible={visible}
        position={position}
        style={{ width: "50vw" }}
        onHide={() => setVisible(false)}
        footer={footerContent}
        draggable={false}
        resizable={false}
      >
        <p className="m-0 bg-white px-16 py-10 shadow-xl">
          <NewProject/>
        </p>
      </Dialog>
    </div>
  );
}
