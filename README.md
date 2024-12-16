# Next.js Supabase Starter

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app). It is a starter template using **Next.js**, **Tailwind CSS**, **Supabase**, and **TypeScript**.

## Features
- **Next.js 13+**: Built using the new App Router.
- **Tailwind CSS**: Pre-configured for utility-first styling.
- **Supabase**: Authentication and database integration with server and client setup.
- **TypeScript**: Fully typed codebase for better developer experience.
- **pnpm**: Efficient and fast dependency management.

---

## Getting Started

### 1. Install Dependencies

This project uses **pnpm** as the package manager. Install dependencies using:

```bash
pnpm install
```

If you don’t have `pnpm` installed globally, run:

```bash
npm install -g pnpm
```

### 2. Set Up Environment Variables

Create a `.env.local` file in the root of the project and add your Supabase credentials:

```env
NEXT_PUBLIC_SUPABASE_URL=your-supabase-url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
```

Replace `your-supabase-url` and `your-anon-key` with your Supabase project details.

### 3. Run the Development Server

Start the development server:

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

---

## Project Structure

```plaintext
app/                          # Next.js App Router directory
  ├── page.tsx                # Landing page
  ├── login/                  # Login page
  │   └── page.tsx            # Login UI with Google OAuth
  ├── auth/
  │   └── callback/           # Supabase auth callback route
  │       └── route.ts        # Handles code exchange for Supabase session
  ├── welcome/                # Protected welcome page
      └── page.tsx            # Displays user info after login

components/
  ├── workflows/              # Auth and reusable workflows
  │   └── auth/
  │       ├── SignInWithGoogle.tsx  # Google sign-in button
  │       └── SignOutUser.tsx       # Logout functionality

lib/
  └── supabase/
      ├── client.ts           # Supabase browser client
      ├── server.ts           # Supabase server client
      └── middleware.ts       # Supabase middleware client

public/                       # Static assets
styles/                       # Global CSS styles
```

---

## Authentication Flow

- **Login Page**:
  Users can sign in using Google OAuth via Supabase.
- **Callback Route**:
  `/auth/callback` handles the OAuth flow and redirects users after successful authentication.
- **Welcome Page**:
  Displays the logged-in user’s email and a logout button.
- **Protected Routes**:
  Middleware ensures unauthorized users are redirected to the login page.

---

## Learn More

To learn more about the technologies used in this project, check out:

- [Next.js Documentation](https://nextjs.org/docs) - Learn about Next.js features and API.
- [Tailwind CSS Documentation](https://tailwindcss.com/docs) - Learn how to style using Tailwind.
- [Supabase Documentation](https://supabase.com/docs) - Learn how to use Supabase for authentication and database management.

---

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

---