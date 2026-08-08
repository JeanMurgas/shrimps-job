import JobForm from "@/app/job/components/JobForm";
import { getJobPostById } from "@/lib/job-posts";
import { requireAuth } from "@/lib/auth";
import { notFound, redirect } from "next/navigation";

interface EditJobPageProps {
    params: Promise<{
        id: string;
    }>;
}

export default async function EditJobPage({
    params,
}: EditJobPageProps) {
    const user = await requireAuth();

    const { id } = await params;

    const job = await getJobPostById(Number(id));

    if (!job) {
        notFound();
    }

    if (job.userId !== user.id) {
        redirect("/dashboard");
    }

    return (
        <main className="mx-auto max-w-2xl px-6 py-10">
            <div className="mb-6">
                <h1 className="text-3xl font-bold tracking-tight text-slate-900">
                    Editar oferta
                </h1>

                <p className="mt-2 text-sm text-slate-600">
                    Actualiza la información de tu oferta de trabajo.
                </p>
            </div>

            <div className="rounded-xl border border-slate-200 bg-white p-8 shadow-sm">
                <JobForm job={job} />
            </div>
        </main>
    );
}