import { NextResponse } from "next/server";

export const config = {
  runtime: "edge",
};

export default (request) => {
  console.log("test");
  return NextResponse.next();
};
