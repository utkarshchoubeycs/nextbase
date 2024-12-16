import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import {createSupabaseServerClient} from "@/lib/supabase/server";

export async function GET(request: Request) {
  // The `/auth/callback` route is required for the server-side auth flow implemented
  // by the Auth Helpers package. It exchanges an auth code for the user's session.
  // https://supabase.com/docs/guides/auth/auth-helpers/nextjs#managing-sign-in-with-code-exchange

  const requestUrl = new URL(request.url);

  const code = requestUrl.searchParams.get("code");

  if (code) {
    const cookieStore = cookies();
    const supabase = createSupabaseServerClient(cookieStore);

    const { error } = await supabase.auth.exchangeCodeForSession(code)
    if (!error) {
      return NextResponse.redirect(`${requestUrl.origin}/welcome`);
    }
  }

  // TODO: return the user to an error page with instructions
  return NextResponse.redirect(`${origin}/auth/error`)
}
