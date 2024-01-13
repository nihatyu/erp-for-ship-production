"use client";
import BarChart from "@/app/ui/reports/bar-chart";
import { projects } from "@/app/placeholder-data";
import ScatterChart from "@/app/ui/reports/scatter-chart";

const Page = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-8">
      {projects.map((project, index) => (
        <div key={index} className="bg-white p-4 rounded-md shadow-md">
          <h2 className="text-lg font-semibold dark:text-black mb-4">
            {project.projeAdi}
          </h2>
          <BarChart project={project} />
          <ScatterChart project={project} />
        </div>
      ))}
    </div>
  );
};

export default Page;
