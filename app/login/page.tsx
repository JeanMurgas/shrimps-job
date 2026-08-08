"use client";

import Link from "next/link";
import { useActionState } from "react";
import { login } from "@/app/actions/auth";

export default function LoginPage() {
    const [state, formAction] = useActionState(login, {
        error: null,
    });

    const inputStyles =
        "w-full rounded-xl border border-slate-300 bg-white px-4 py-2.5 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-orange-500 focus:ring-2 focus:ring-orange-100";

    return (
        <main className="mx-auto max-w-md px-6 py-12">
            <div className="mb-8 text-center">
                <h1 className="text-3xl font-bold tracking-tight text-slate-900">
                    Iniciar sesión
                </h1>

                <p className="mt-2 text-sm text-slate-600">
                    Entra a tu cuenta para publicar y administrar tus ofertas.
                </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
                <form action={formAction} className="space-y-5">
                    <div>
                        <label
                            htmlFor="email"
                            className="mb-1.5 block text-sm font-medium text-slate-700"
                        >
                            Correo
                        </label>

                        <input
                            type="email"
                            id="email"
                            name="email"
                            className={inputStyles}
                            required
                        />
                    </div>

                    <div>
                        <label
                            htmlFor="password"
                            className="mb-1.5 block text-sm font-medium text-slate-700"
                        >
                            Contraseña
                        </label>

                        <input
                            type="password"
                            id="password"
                            name="password"
                            className={inputStyles}
                            required
                        />
                    </div>

                    {state.error && (
                        <p className="rounded-lg bg-red-50 px-3 py-2 text-sm text-red-600">
                            {state.error}
                        </p>
                    )}

                    <button
                        type="submit"
                        className="w-full rounded-xl bg-orange-600 px-4 py-2.5 font-medium text-white transition hover:bg-orange-700"
                    >
                        Iniciar sesión
                    </button>
                </form>

                <p className="mt-6 text-center text-sm text-slate-600">
                    ¿No tienes una cuenta?{" "}
                    <Link
                        href="/signup"
                        className="font-medium text-orange-600 hover:text-orange-700"
                    >
                        Regístrate
                    </Link>
                </p>
            </div>
        </main>
    );
}