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

  return <div>{JSON.stringify(set)}</div>;
}
