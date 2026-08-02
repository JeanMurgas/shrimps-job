import { signup } from "@/app/actions/auth";

export default function SignupPage() {
    return (
        <main>
            <h1>Crear cuenta</h1>

            <form action={signup}>
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
            </form>
        </main>
    );
}