"use server";

import { prisma } from "@/lib/prisma";
import { hashPassword, verifyPassword, generateToken } from "@/lib/auth";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export type AuthState = {
    error: string | null;
};

export async function signup(_previousState: AuthState,
    formData: FormData
): Promise<AuthState> {
    const email = String(formData.get("email"));
    const password = String(formData.get("password"));

    if (!email || !password) {
        return {
            error: "Todos los campos son obligatorios.",
        };
    }

    const existingUser = await prisma.user.findUnique({
        where: {
            email,
        },
    });

    if (existingUser) {
        return {
            error: "El usuario ya existe.",
        };
    }

    const hashedPassword = await hashPassword(password);

    await prisma.user.create({
        data: {
            email,
            password: hashedPassword,
        },
    });

    redirect("/login");
}

export async function login(
    _previousState: {
        error: string | null;
    },
    formData: FormData
): Promise<{ error: string | null }> {

    const email = String(formData.get("email"));
    const password = String(formData.get("password"));

    if (!email || !password) {
        return {
            error: "Todos los campos son obligatorios.",
        };
    }

    const user = await prisma.user.findUnique({
        where: {
            email,
        },
    });

    if (!user) {
        return {
            error: "Correo o contraseña incorrectos.",
        };
    }

    const validPassword = await verifyPassword(
        password,
        user.password
    );

    if (!validPassword) {
    return {
        error: "Correo o contraseña incorrectos.",
    };
}

const token = generateToken(user.id);

const cookieStore = await cookies();

cookieStore.set("token", token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
});



redirect("/dashboard");

}