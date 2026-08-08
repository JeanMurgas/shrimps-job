import Link from "next/link";
import type { JobPost } from "@/app/generated/prisma/client";

export default function JobCard({ job }: { job: JobPost }) {

  const categoryStyles = {
    PROGRAMMING: "bg-blue-100 text-blue-700",
    CLEANING: "bg-emerald-100 text-emerald-700",
    DELIVERY: "bg-amber-100 text-amber-700",
    REPAIR: "bg-orange-100 text-orange-700",
    DESIGN: "bg-purple-100 text-purple-700",
    OTHER: "bg-slate-100 text-slate-700",
};
    return (
        <Link
            href={`/job/${job.id}`}
            className="group block rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
        >
            <div className="mb-3 flex items-center justify-between gap-3">
                <span className={`rounded-full px-3 py-1 text-xs font-medium ${categoryStyles[job.category]}`}>
                    {job.category}
                </span>

                <span className="text-lg font-bold text-slate-900">
                    ${job.price.toFixed(2)}
                </span>
            </div>

            <h3 className="text-lg font-semibold text-slate-900 group-hover:text-slate-700">
                {job.title}
            </h3>

            <p className="mt-2 line-clamp-2 text-sm leading-6 text-slate-600">
                {job.description}
            </p>

            <div className="mt-5 border-t border-slate-100 pt-4">
                <p className="text-sm text-slate-500">
                    {job.location}
                </p>
            </div>
        </Link>
    );
}