import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";

import { authOptions } from "../auth/[...nextauth]/route";

export async function GET() {
  const session = await getServerSession(authOptions);

  const res = {
    name: session?.user?.name,
    email: session?.user?.email,
    image: session?.user?.image
  }
  return NextResponse.json(res || { name: 'Not Logged in' });
}