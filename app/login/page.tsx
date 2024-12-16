"use client";

import SignInWithGoogle from "@/components/auth/SignInWithGoogle";
import { useState, useEffect } from "react";

const LoginPage = () => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const fetchUser = async () => {
            const { data } = await supabase.auth.getUser();
            setUser(data?.user ?? null);
        };
        fetchUser();
    }, []);

    return (
        <div className="min-h-screen flex flex-col justify-center items-center gap-4 p-8">
            {!user ? (
                <>
                    <h1 className="text-2xl font-bold">Login</h1>
                    <SignInWithGoogle />
                </>
            ) : (
                <div className="flex flex-col items-center gap-4">
                    <h1 className="text-2xl font-bold">Welcome, {user.email}</h1>
                    <a
                        href="/welcome"
                        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                    >
                        Proceed to Dashboard
                    </a>
                </div>
            )}
        </div>
    );
};

export default LoginPage;
