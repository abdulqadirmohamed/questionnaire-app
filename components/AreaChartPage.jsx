'use client'
import { Card, Title, AreaChart } from "@tremor/react";
import { useState } from "react";

const chartdata2 = [
  {
    date: "Jan 23",
    "2022": 45,
    "2023": 78,
  },
  // ...
  {
    date: "Dec 23",
    "2022": 71,
    "2023": 33,
  },
];

export const AreaChartInteractiveExample = () => {
  const [value, setValue] = useState(null);
  return (
    <>
      <Card>
        <Title>Questionnaire</Title>
        <AreaChart
          className="h-72 mt-4"
          data={chartdata2}
          index="date"
          categories={["2022", "2023"]}
          colors={["neutral", "indigo"]}
          yAxisWidth={30}
          onValueChange={(v) => setValue(v)}
          connectNulls={true}
        />
      </Card>
      {/* <pre>{JSON.stringify(value)}</pre> */}
    </>
  );
};