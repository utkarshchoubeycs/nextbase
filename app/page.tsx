import Image from "next/image";

export default function Home() {
  return (
      <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
        <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
          <Image
              className="dark:invert"
              src="/next.svg"
              alt="Next.js logo"
              width={180}
              height={38}
              priority
          />
          <ol className="list-inside list-decimal text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
            <li className="mb-2">
              <code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-semibold">
                Welcome to the Project Starter Template!
              </code>
              Edit this template to kick off your project.
            </li>
            <li>Authenticate and explore the provided starter features.</li>
          </ol>

          <div className="flex gap-4 items-center flex-col sm:flex-row">
            <a
                className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
                href="/login"
            >
              Get Started
            </a>
            <a
                className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44"
                href="https://nextjs.org/docs"
                target="_blank"
                rel="noopener noreferrer"
            >
              Learn Next.js
            </a>
          </div>
        </main>
        <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
          <a
              className="flex items-center gap-2 hover:underline hover:underline-offset-4"
              href="https://supabase.com"
              target="_blank"
              rel="noopener noreferrer"
          >
            <Image
                aria-hidden
                src="/globe.svg"
                alt="Globe icon"
                width={16}
                height={16}
            />
            Powered by Supabase
          </a>
        </footer>
      </div>
  );
}
