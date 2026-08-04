import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { cookies } from "next/headers";
import { prisma } from "./prisma";
import { redirect } from "next/dist/client/components/navigation";

const JWT_SECRET = process.env.JWT_SECRET!;

if (!JWT_SECRET) {
    throw new Error("JWT_SECRET no está definida.");
}

export async function hashPassword(password: string){
    return await bcrypt.hash(password, 10);
}

export async function verifyPassword(password: string, hashedPassword: string){
    return await bcrypt.compare(password, hashedPassword);
}

export function generateToken(userId: number){
    return jwt.sign({ userId }, JWT_SECRET, { expiresIn: '7d' });
}

export async function getCurrentUser() {
    const cookieStore = await cookies();

    const token = cookieStore.get("token")?.value;

    if (!token) {
        return null;
    }

    try {
        const payload = jwt.verify(token, JWT_SECRET) as {
            userId: number;
        };

        return prisma.user.findUnique({
            where: {
                id: payload.userId,
            },
        });
    } catch {
        return null;
    }
}

export async function requireAuth() {
    const user = await getCurrentUser();

    if (!user) {
        redirect("/login");
    }

    return user;
}

/*
hashPassword()

verifyPassword()

generateToken()

verifyToken()

getCurrentUser()
 */