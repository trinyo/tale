import SetView from "@/components/SetView";
import { DataSets } from "@/data/datasets";

export default function Home() {
  return (
    <>
      <h1 className="font-bold text-[64px]/[78px]">TALE</h1>
      {DataSets.map((x) => (
        <SetView key={x.id} {...x} />
      ))}
    </>
  );
}
