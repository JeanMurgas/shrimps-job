import {prisma } from "@/lib/prisma";

export async function getJobPosts() {
    return prisma.jobPost.findMany({orderBy: {createdAt: "desc" }})
}

