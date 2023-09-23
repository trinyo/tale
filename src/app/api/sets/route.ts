import { DataSets } from "@/data/datasets";
import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({ ok: true, data: DataSets.map((x) => x.id) });
}
