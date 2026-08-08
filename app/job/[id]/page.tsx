import { notFound } from "next/navigation";
import { getJobPostById } from "@/lib/job-posts";
import { deleteJob } from "@/app/actions/jobs";
import { getCurrentUser } from "@/lib/auth";
import Link from "next/link";

interface JobDetailPageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function JobDetailPage({
  params,
}: JobDetailPageProps) {
  const { id } = await params;

  const job = await getJobPostById(Number(id));

  if (!job) {
    notFound();
  }
  const user = await getCurrentUser();

  return (
    <main className="mx-auto max-w-3xl px-6 py-10">
      <Link
        href="/dashboard"
        className="mb-6 inline-block text-sm font-medium text-slate-500 transition hover:text-orange-600"
      >
        ← Volver a ofertas
      </Link>

      <div className="rounded-xl border border-slate-200 bg-white p-8 shadow-sm">
        <div className="mb-6 border-b border-slate-200 pb-6">
          <span className="mb-3 inline-block rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600">
            {job.category}
          </span>

          <h1 className="text-3xl font-bold tracking-tight text-slate-900">
            {job.title}
          </h1>

          <p className="mt-3 text-slate-600">
            {job.description}
          </p>
        </div>

        <div className="space-y-5">
          <div>
            <p className="text-sm text-slate-500">Precio</p>
            <p className="text-2xl font-bold text-slate-900">
              ${job.price.toFixed(2)}
            </p>
          </div>

          <div>
            <p className="text-sm text-slate-500">Ubicación</p>
            <p className="font-medium text-slate-900">
              {job.location}
            </p>
          </div>

          <div>
            <p className="text-sm text-slate-500">
              Información de contacto
            </p>
            <p className="font-medium text-slate-900">
              {job.contactInfo}
            </p>
          </div>
        </div>

        {user?.id === job.userId && (
          <div className="mt-8 flex items-center gap-3 border-t border-slate-200 pt-6">
            <Link
              href={`/job/${job.id}/edit`}
              className="rounded-lg bg-orange-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-orange-700"
            >
              Editar oferta
            </Link>

            <form action={deleteJob.bind(null, job.id)}>
              <button
                type="submit"
                className="rounded-lg border border-red-200 px-4 py-2 text-sm font-medium text-red-600 transition hover:bg-red-50"
              >
                Eliminar oferta
              </button>
            </form>
          </div>
        )}
      </div>
    </main>
  );
}