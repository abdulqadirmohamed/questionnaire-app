import { AreaChartInteractiveExample } from "@/components/AreaChartPage";
import DonutChartUsage from "@/components/DonutChartUsage";
import HomePage from "@/components/HomePage";
import Projects from "@/components/Projects";

export default function Home() {
  return (
    <main className="">
      
      <Projects/>
      <HomePage />
      <div className="w-[95%] mx-auto grid grid-cols-2 gap-10">
        <AreaChartInteractiveExample />
        <DonutChartUsage/>
      </div>
    </main>
  );
}
