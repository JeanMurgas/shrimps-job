import Link from "next/link";

export default function Navbar() {
  return (
    <header className="border-b px-6 py-4">
      <nav className="flex items-center justify-between">
        <Link href="/" className="font-bold">
          Shrimp&apos;s Job
        </Link>

        <div className="flex gap-4">
          <Link href="/dashboard">Dashboard</Link>
          <Link href="/login">Login</Link>
          <Link href="/signup">Registro</Link>
        </div>
      </nav>
    </header>
  );
}