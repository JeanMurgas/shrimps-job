import JobBoard from "./components/JobBoard";
import SearchBar from "./components/SearchBar";
import Filters from "./components/Filters";

const jobs = [
    {
        id: 1,
        title: "Reparar computadora lenta",
        category: "PROGRAMMING",
        location: "Vista Alegre",
        price: 25,
        description: "Necesito ayuda revisando una laptop que está muy lenta.",
    },
    {
        id: 2,
        title: "Limpiar patio pequeño",
        category: "CLEANING",
        location: "Arraiján",
        price: 30,
        description: "Busco alguien que pueda limpiar hojas y basura del patio.",
    },
];

export default function DashboardPage() {
    return (
        <main>
            <h1>Tablón de ofertas</h1>
            <p>Trabajos disponibles cerca de la comunidad.</p>

            <section className="mb-6 flex flex-col gap-3 sm:flex-row">
                <SearchBar />
                <Filters />
            </section>

            <section>
                <JobBoard jobs={jobs} />
            </section>
        </main>
    );
}