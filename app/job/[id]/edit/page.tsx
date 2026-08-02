import { notFound } from "next/navigation";
import { getJobPostById } from "@/lib/job-posts";
import JobForm from "@/app/job/components/JobForm";

interface EditJobPageProps {
    params: Promise<{
        id: string;
    }>;
}

export default async function EditJobPage({
    params,
}: EditJobPageProps) {
    const { id } = await params;

    const job = await getJobPostById(Number(id));

    if (!job) {
        notFound();
    }

    return (
        <main>
            <h1>Editar oferta</h1>

            <JobForm job={job} />
        </main>
    );
}