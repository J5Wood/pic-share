import { createMiddlewareClient } from "@supabase/auth-helpers-nextjs";
import { NextResponse } from "next/server";

export async function middleware(req) {
  // const res = NextResponse.next();
  // const supabase = createMiddlewareClient({ req, res });
  // supabase.auth.getSession();
}
