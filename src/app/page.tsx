import SetView from "@/components/SetView";
import Image from "next/image";
import { DataSets } from "@/data/datasets";

export default function Home() {
  return (
    <>
      <div className="flex flex-row gap-4 items-center">
        <Image src="/icon.png" alt="logo" width={80} height={80} className="rounded-[25px]" />
        <h1 className="font-bold text-display">TALE</h1>
      </div>
      {DataSets.map((x) => (
        <SetView key={x.id} {...x} />
      ))}
    </>
  );
}
