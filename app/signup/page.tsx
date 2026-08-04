"use client";

import { useActionState } from "react";
import { signup } from "@/app/actions/auth";

export default function SignupPage() {
    const [state, formAction] = useActionState(signup, {
        error: null,
    });

    return (
        <main>
            <h1>Crear cuenta</h1>

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
                    Registrarse
                </button>
                {state.error && (
                    <p>{state.error}</p>
                )}
            </form>
        </main>
    );
}