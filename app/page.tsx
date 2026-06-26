import Link from "next/link";

export default function Home() {
  return (
    <main>
      <h1>Shrimp&apos;s Job</h1>
      <p>Encuentra y publica trabajos comunitarios.</p>

      <Link href="/dashboard">Ver tablón de ofertas</Link>
    </main>
  );
}