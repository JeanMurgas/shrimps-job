import { getCurrentUser } from "@/lib/auth";
import JobBoard from "./components/JobBoard";
import SearchBar from "./components/SearchBar";
import Filters from "./components/Filters";
import type { Category } from "@/app/generated/prisma/client";
import { getJobPosts, searchAndFilterJobPosts } from "@/lib/job-posts";


interface DashboardPageProps {
    searchParams: Promise<{
        search?: string;
        category?: string;
    }>;
}

export default async function DashboardPage({ searchParams, }: DashboardPageProps) {


    const { search, category } = await searchParams;

    const jobs = search || category
        ? await searchAndFilterJobPosts(search, category as Category)
        : await getJobPosts();

    const user = await getCurrentUser();

    console.log(user);
    return (
        <main>
            <h1>Tablón de ofertas</h1>
            <p>Trabajos disponibles cerca de la comunidad.</p>

            <form
                action="/dashboard"
                className="mb-6 flex flex-col gap-3 sm:flex-row"
            >
                <SearchBar />

                <Filters />

                <button
                    type="submit"
                    className="rounded-xl border px-4 py-2"
                >
                    Buscar
                </button>
            </form>

            <section>
                <JobBoard jobs={jobs} />
            </section>
        </main>
    );
}