import Link from "next/link";

type Job = {
  id: number;
  title: string;
  description: string;
  category: string;
  location: string;
  price: number;
};

export default function JobCard({ job }: { job: Job }) {
  return (
    <Link href={`/job/${job.id}`}>
      <article className="rounded-xl border p-4">
        <h2>{job.title}</h2>
        <p>{job.description}</p>
        <p>{job.category} • {job.location}</p>
        <strong>${job.price}</strong>
      </article>
    </Link>
  );
}