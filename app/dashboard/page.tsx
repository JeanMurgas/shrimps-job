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
            <section className="mb-8">
                <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
                    Encuentra trabajo cerca de ti
                </h1>

                <p className="mt-2 max-w-2xl text-slate-600">
                    Explora oportunidades publicadas por personas de tu comunidad.
                </p>
            </section>

            <section className="mb-8 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
                <div className="flex flex-col gap-3 sm:flex-row">
                    <SearchBar />
                    <Filters />
                </div>
            </section>

            <section>
                <div className="mb-4 flex items-center justify-between">
                    <h2 className="text-xl font-semibold">
                        Ofertas disponibles
                    </h2>
                </div>

                <JobBoard jobs={jobs} />
            </section>
        </main>
    );
}