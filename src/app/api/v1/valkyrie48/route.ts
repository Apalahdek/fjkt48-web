import { NextResponse, NextRequest } from "next/server";
import { retrieveData, retrieveDataById } from "@/lib/firebase/service";

export async function GET(request: NextRequest) {
  const id = request.nextUrl.searchParams.get("member");
  if (id) {
    const data = await retrieveDataById("valkyrie48", id);
    if (data) {
      return NextResponse.json({
        status: 200,
        message: "Success",
        content: data,
      });
    }
    return NextResponse.json({
      status: 404,
      message: "Not Found",
      content: {},
    });
  }
  return NextResponse.json({
    status: 200,
    message: "Success",
    content: await retrieveData("valkyrie48"),
  });
}
