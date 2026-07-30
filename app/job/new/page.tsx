
import JobForm from "../components/JobForm";

export default async function NewJobPage() {

    return (
        <main>
            <h1>Publicar oferta de trabajo</h1>
            <p>Completa el formulario para publicar una nueva oferta de trabajo.</p>
            <JobForm />
        </main>
    );
}