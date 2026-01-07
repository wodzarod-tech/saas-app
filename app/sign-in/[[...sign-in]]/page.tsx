import { SignIn } from '@clerk/nextjs'

// Clerk: Build a sign-in-or-up page
export default function Page() {
  return <main className="flex items-center justify-center">
    <SignIn />
  </main>
}
