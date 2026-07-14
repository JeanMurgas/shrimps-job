import JobCard from "./JobCard";
import type { JobPost } from "@/app/generated/prisma/client";

export default function JobBoard({ jobs }: { jobs: JobPost[] }) {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {jobs.map((job) => (
        <JobCard key={job.id} job={job} />
      ))}
    </div>
  );
}