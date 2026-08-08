import JobCard from "./JobCard";
import type { JobPost } from "@/app/generated/prisma/client";

export default function JobBoard({ jobs }: { jobs: JobPost[] }) {
  if (jobs.length === 0) {
    return (
      <div className="rounded-2xl border border-dashed border-slate-300 bg-white py-16 text-center">
        <p className="font-medium text-slate-700">
          No encontramos ofertas.
        </p>

        <p className="mt-1 text-sm text-slate-500">
          Prueba con otra búsqueda o categoría.
        </p>
      </div>
    );
  }

  return (
    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {jobs.map((job) => (
        <JobCard key={job.id} job={job} />
      ))}
    </div>
  );
}