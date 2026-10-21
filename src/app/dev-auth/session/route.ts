import { NextResponse } from "next/server";

/**
 * Dev-only: expose JWT bypass tokens to the browser without baking them into
 * the Next client bundle via NEXT_PUBLIC_* (which can break Fast Refresh).
 */
export async function GET() {
  if (process.env.NODE_ENV === "production") {
    return NextResponse.json({ error: "Not available" }, { status: 404 });
  }

  const access =
    process.env.DEV_ACCESS_TOKEN?.trim() ||
    process.env.NEXT_PUBLIC_DEV_ACCESS_TOKEN?.trim() ||
    "";
  const refresh =
    process.env.DEV_REFRESH_TOKEN?.trim() ||
    process.env.NEXT_PUBLIC_DEV_REFRESH_TOKEN?.trim() ||
    "";

  if (!access) {
    return NextResponse.json({ access_token: null, refresh_token: null });
  }

  return NextResponse.json({
    access_token: access,
    refresh_token: refresh || null,
  });
}
