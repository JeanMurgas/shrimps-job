import JobCard from "./JobCard";

type Job = {
  id: number;
  title: string;
  description: string;
  category: string;
  location: string;
  price: number;
};

export default function JobBoard({ jobs }: { jobs: Job[] }) {
  return (
    <section className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {jobs.map((job) => (
        <JobCard key={job.id} job={job} />
      ))}
    </section>
  );
}