"use server"

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

import { Prisma } from "@/app/generated/prisma/client";
import { createJobPost } from "@/lib/job-posts";



export async function createJob(formData: FormData) {
    const data: Prisma.JobPostCreateInput = {
        title: String(formData.get("title")),
        description: String(formData.get("description")),
        category: formData.get("category") as Prisma.JobPostCreateInput["category"],
        price: Number(formData.get("price")),
        location: String(formData.get("location")),
        contactInfo: String(formData.get("contactInfo")),

        user: {
            connect: {
                id: 1,
            },
        },
    };

    await createJobPost(data);

    revalidatePath("/dashboard");
    redirect("/dashboard");
}