import JobForm from "../components/JobForm";
import { requireAuth } from "@/lib/auth";

export default async function NewJobPage() {

    const user = await requireAuth();

    return (
        <main>
            <h1>Publicar oferta de trabajo</h1>
            <p>Completa el formulario para publicar una nueva oferta de trabajo.</p>
            <JobForm />
        </main>
    );
}