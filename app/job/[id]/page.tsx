import { notFound } from "next/navigation";
import { getJobPostById } from "@/lib/job-posts";

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

  return (
    <main>
      <h1>{job.title}</h1>

      <p>{job.description}</p>

      <p>
        <strong>Precio:</strong> ${job.price.toFixed(2)}
      </p>

      <p>
        <strong>Categoría:</strong> {job.category}
      </p>

      <p>
        <strong>Ubicación:</strong> {job.location}
      </p>

      <p>
        <strong>Contacto:</strong> {job.contactInfo}
      </p>
    </main>
  );
}