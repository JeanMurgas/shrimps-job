type Props = {
  params: Promise<{
    id: string;
  }>;
};

export default async function JobDetailPage({ params }: Props) {
  const { id } = await params;

  return (
    <main>
      <h1>Oferta #{id}</h1>
      <p>Aquí veremos el detalle de la oferta.</p>
    </main>
  );
}