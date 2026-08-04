"use client";

import { useActionState } from "react";
import { login } from "@/app/actions/auth";

export default function LoginPage() {
    const [state, formAction] = useActionState(login, {
        error: null,
    });

    return (
        <main>
            <h1>Iniciar sesión</h1>

            <form action={formAction}>
                <label htmlFor="email">Correo</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    required
                />

                <label htmlFor="password">Contraseña</label>
                <input
                    type="password"
                    id="password"
                    name="password"
                    required
                />

                <button type="submit">
                    Iniciar sesión
                </button>

                {state.error && (
                    <p className="text-red-500">
                        {state.error}
                    </p>
                )}
            </form>
        </main>
    );
}