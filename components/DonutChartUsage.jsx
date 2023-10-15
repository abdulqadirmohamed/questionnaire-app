"use client"
import { Card, Title, DonutChart } from "@tremor/react";
import React, { useState } from "react";

const cities = [
  {
    name: "Garowe",
    sales: 9800,
  },
  // ...
  {
    name: "Galkacyo",
    sales: 1398,
  },
];

const valueFormatter = (number) =>
  `$ ${new Intl.NumberFormat("us").format(number).toString()}`;

const DonutChartUsage = () => {
  const [value, setValue] = useState(null);

  return (
    <>
      <Card className="mx-auto">
        <Title>Data</Title>
        <DonutChart
          className="mt-6"
          data={cities}
          category="sales"
          index="name"
          colors={["rose", "yellow", "orange", "indigo", "blue", "emerald"]}
          onValueChange={(v) => setValue(v)}
        />
      </Card>
    </>
  );
};

export default DonutChartUsage;
