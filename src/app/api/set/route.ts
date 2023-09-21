import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  if (!request.nextUrl.searchParams.has("setid")) {
    return NextResponse.json({ ok: false, error_code: "missing_param", error: "setid param missing in request" });
  }

  return NextResponse.json({ ok: true, data: { cardFront: "cardBack" } });
}
