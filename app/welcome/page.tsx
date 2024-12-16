"use client";

import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import { createSupabaseBrowserClient } from "@/lib/supabase/client";
import { signOutUser } from "@/components/auth/SignOutUser";

const WelcomePage = () => {
    const [user, setUser] = useState(null);
    const router = useRouter();
    const supabase = createSupabaseBrowserClient();

    useEffect(() => {
        const fetchUser = async () => {
            const { data, error } = await supabase.auth.getUser();
            if (error) {
                console.error("Error fetching user:", error);
                router.push("/login");
                return;
            }
            setUser(data?.user ?? null);
        };

        fetchUser();
    }, [router, supabase]);

    const handleLogout = async () => {
        try {
            await signOutUser();
            router.push("/");
        } catch (error) {
            console.error("Error during logout:", error);
        }
    };

    return (
        <div className="min-h-screen flex flex-col justify-center items-center gap-4 p-8">
            {user ? (
                <>
                    <h1 className="text-2xl font-bold">Welcome, {user.email}</h1>
                    <button
                        className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
                        onClick={handleLogout}
                    >
                        Logout
                    </button>
                </>
            ) : (
                <h1 className="text-2xl font-bold">Redirecting to Login...</h1>
            )}
        </div>
    );
};

export default WelcomePage;
