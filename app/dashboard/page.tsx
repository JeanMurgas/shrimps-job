import JobBoard from "./components/JobBoard";
import SearchBar from "./components/SearchBar";
import Filters from "./components/Filters";
import { getJobPosts } from "@/lib/job-posts";

export default async function DashboardPage() {

    const jobs = await getJobPosts();

    return (
        <main>
            <h1>Tablón de ofertas</h1>
            <p>Trabajos disponibles cerca de la comunidad.</p>

            <section className="mb-6 flex flex-col gap-3 sm:flex-row">
                <SearchBar />
                <Filters />
            </section>

            <section>
                <JobBoard jobs = {jobs} />
            </section>
        </main>
    );
}