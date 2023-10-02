import Flashcard from "@/components/Flashcard";
import { DataSets } from "@/data/datasets";
import { redirect, useRouter } from "next/navigation";
import React from "react";

function useSet(id: string) {
  const set = DataSets.find((x) => x.id === id);

  if (!set) {
    return { ok: false, error_code: "invalid_param", error: "set with id does not exists" };
  }

  return { ok: true, data: set };
}

export default function SetPage({ params }: { params: { id: string } }) {
  const set = useSet(params.id);

  if (!set.ok) {
    redirect("/");
  }

  const difficulity = Object.values(set.data!.data).sort((a, b) => b.length - a.length)[0].length;

  return (
    <>
      <h1 className="font-bold text-display">{set.data!.name}</h1>
      <div className="font-light text-label text-dark-outline">
        <span className="font-medium">Tip: </span>
        <div className="p-[1px] rounded bg-dark-2-normal h-7 w-7 inline-block mr-1">
          <div className="rounded-[3px] bg-dark-3-normal h-[93%] flex justify-center items-center">F11</div>
        </div>
        for better focus
      </div>
      <Flashcard data={set.data!.data} difficulity={difficulity} />
    </>
  );
}
