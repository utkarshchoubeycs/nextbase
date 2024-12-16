"use client"

import { GoogleColorIcon } from "@/components/icons";
import { createSupabaseBrowserClient } from "@/utils/supabase/client"
import { Button } from "@nextui-org/button";

const SignInWithGoogle = () => {

	const supabase = createSupabaseBrowserClient();

	const loginWithGoogle = () => {
		supabase.auth.signInWithOAuth({
			provider: 'google',
			options: {
				redirectTo: `${origin}/auth/callback`,
			}
		});
	};

	return (
		<Button
			className={"w-full bg-white/[0.2] hover:bg-white hover:text-black"}
			onClick={loginWithGoogle}
		>
			<GoogleColorIcon className="w-5 h-5" fill={'white'} />
			<span>Continue with Google</span>
		</Button>
	);
};

export default SignInWithGoogle