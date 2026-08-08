import JobForm from "../components/JobForm";
import { requireAuth } from "@/lib/auth";

export default async function NewJobPage() {
    await requireAuth();

    return (
        <main className="mx-auto max-w-2xl">
            <div className="mb-8">
                <h1 className="text-3xl font-bold tracking-tight text-slate-900">
                    Publicar oferta de trabajo
                </h1>

                <p className="mt-2 text-slate-600">
                    Completa el formulario para publicar una nueva oferta de trabajo.
                </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
                <JobForm />
            </div>
        </main>
    );
}