import { AreaChartInteractiveExample } from "@/components/AreaChartPage";
import DonutChartUsage from "@/components/DonutChartUsage";
import HomePage from "@/components/HomePage";

export default function Home() {
  return (
    <main className="">
      <HomePage />
      <div className="w-[95%] mx-auto grid grid-cols-2 gap-10">
        <AreaChartInteractiveExample />
        <DonutChartUsage/>
      </div>
    </main>
  );
}
