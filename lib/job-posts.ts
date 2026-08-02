import { Prisma, Category } from "@/app/generated/prisma/client";
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

export async function updateJobPost(
    id: number,
    data: Prisma.JobPostUpdateInput
) {
    return prisma.jobPost.update({
        where: {
            id,
        },
        data,
    });
}

export async function deleteJobPost(id: number) {
    return prisma.jobPost.delete({
        where: {
            id,
        },
    });
}


export async function searchAndFilterJobPosts(
    search?: string,
    category?: Category
) {
    return prisma.jobPost.findMany({
        where: {
            ...(search && {
                OR: [
                    {
                        title: {
                            contains: search,
                        },
                    },
                    {
                        description: {
                            contains: search,
                        },
                    },
                ],
            }),

            ...(category && {
                category,
            }),
        },

        orderBy: {
            createdAt: "desc",
        },
    });
}
/**
createJobPost()
updateJobPost()
deleteJobPost()
searchJobPosts()
filterJobPosts()
**/