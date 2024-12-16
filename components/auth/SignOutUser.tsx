'use server';

import { createSupabaseServerClient } from "@/utils/supabase/server";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export const signOutUser = async () => {

    const cookieStore = cookies();
    const supabase = createSupabaseServerClient(cookieStore);
    await supabase.auth.signOut();
    return redirect("/");
  };