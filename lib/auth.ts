import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

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

/*
hashPassword()

verifyPassword()

generateToken()

verifyToken()

getCurrentUser()
 */