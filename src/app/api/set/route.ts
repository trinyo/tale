import { DataSets } from "@/data/datasets";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  if (!request.nextUrl.searchParams.has("setid")) {
    return NextResponse.json({ ok: false, error_code: "missing_param", error: "setid param missing in request" });
  }

  const id = request.nextUrl.searchParams.get("setid");
  const set = DataSets.find((x) => x.id === id);

  if (!set) {
    return NextResponse.json({ ok: false, error_code: "invalid_param", error: "set with id does not exists" });
  }

  return NextResponse.json({ ok: true, data: set });
}
