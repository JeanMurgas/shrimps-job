import Link from "next/link";
import { getCurrentUser } from "@/lib/auth";
import { logout } from "@/app/actions/auth";

export default async function Navbar() {
  const user = await getCurrentUser();

  return (
    <header className="border-b px-6 py-4">
      <nav className="border-b border-slate-200 bg-white" >
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">

          <Link
            href="/dashboard"
            className="text-xl font-bold tracking-tight text-orange-600"
          >
            🦐 Shrimp&apos;s Job
          </Link>

          <div className="flex items-center gap-4">
            <Link
              href="/dashboard"
              className="text-sm font-medium text-slate-600 hover:text-slate-900"
            >
              Ofertas
            </Link>

            {user ? (
              <>
                <Link
                  href="/job/new"
                  className="rounded-lg bg-orange-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-orange-700"
                >
                  Publicar oferta
                </Link>

                <form action={logout}>
                  <button
                    type="submit"
                    className="text-sm font-medium text-slate-600 hover:text-slate-900"
                  >
                    Cerrar sesión
                  </button>
                </form>
              </>
            ) : (
              <>
                <Link
                  href="/login"
                  className="text-sm font-medium text-slate-600 hover:text-slate-900"
                >
                  Iniciar sesión
                </Link>

                <Link
                  href="/signup"
                  className="rounded-lg bg-orange-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-orange-700"
                >
                  Registrarse
                </Link>
              </>
            )}

          </div>
        </div>
      </nav>
    </header>
  );
}