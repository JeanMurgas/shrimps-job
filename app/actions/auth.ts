"use server";

import { prisma } from "@/lib/prisma";
import { hashPassword, verifyPassword, generateToken } from "@/lib/auth";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export async function signup(formData: FormData) {
    const email = String(formData.get("email"));
    const password = String(formData.get("password"));

    if (!email || !password) {
        throw new Error("Todos los campos son obligatorios.");
    }

    const existingUser = await prisma.user.findUnique({
        where: {
            email,
        },
    });

    if (existingUser) {
        throw new Error("El usuario ya existe.");
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