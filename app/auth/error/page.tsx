export default function ErrorPage() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen text-center">
            <h1 className="text-2xl font-bold text-red-500">Authentication Error</h1>
            <p className="mt-4">Something went wrong during login. Please try again.</p>
            <a
                href="/login"
                className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            >
                Back to Login
            </a>
        </div>
    );
}
