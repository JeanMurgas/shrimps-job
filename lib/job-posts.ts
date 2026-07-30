import { Prisma } from "@/app/generated/prisma/client";
import { prisma } from "@/lib/prisma";

export async function getJobPosts() {
    return prisma.jobPost.findMany({
        orderBy: {
            createdAt: "desc" 
            }
        })
}

export async function getJobPostById(id: number) {
    return prisma.jobPost.findUnique({
         where: { 
            id 
        } 
    })
}

export async function createJobPost(data: Prisma.JobPostCreateInput) {
    return prisma.jobPost.create({
         data, 
        })
}

/**
createJobPost()
updateJobPost()
deleteJobPost()
searchJobPosts()
filterJobPosts()
**/