import CircularChart from "@/app/ui/projects/circular-chart";
import { projects } from "@/app/placeholder-data";

export default async function Page() {
  return (
    <div>
      <h1 className="text-2xl font-bold ">PROJELER</h1>
      <CircularChart data={projects} />
    </div>
  );
}
