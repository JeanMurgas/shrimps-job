import Link from "next/link";
import type { JobPost } from "@/app/generated/prisma/client";


export default function JobCard({ job }: { job: JobPost }) {
  return (
    <Link
      href={`/dashboard/jobs/${job.id}`}
      className="block rounded-lg border border-gray-200 bg-white p-6 shadow hover:bg-gray-100"
    >
      <h3 className="text-lg font-bold">{job.title}</h3>
      <p className="text-gray-600">{job.description}</p>
      <p className="text-green-500 font-bold">${job.price.toFixed(2)}</p>
    </Link>
  );
}