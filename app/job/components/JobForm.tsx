import { createJob, updateJob  } from "@/app/actions/jobs";
import { JobPost } from "@/app/generated/prisma/client";

interface JobFormProps {
    job?: JobPost;
}
export default function JobForm({ job }: JobFormProps) {
    const formAction = job
    ? updateJob.bind(null, job.id)
    : createJob;
    return (
        <form action={formAction}>
            <h2>Información principal</h2>
            <label htmlFor="title">Título del trabajo</label>
            <input type="text" id="title" name="title" defaultValue={job?.title} required />

            <label htmlFor="description">Descripción del trabajo</label>
            <textarea id="description" name="description" defaultValue={job?.description} required></textarea>

            <h2>Detalles</h2>
            <label htmlFor="category">Categoría</label>
            <select id="category" name="category" defaultValue={job?.category} required>
                <option value="">Seleccionar categoría</option>
                <option value="PROGRAMMING">Programación</option>
                <option value="CLEANING">Limpieza</option>
                <option value="DELIVERY">Delivery</option>
                <option value="REPAIR">Reparaciones</option>
                <option value="DESIGN">Diseño</option>
                <option value="OTHER">Otro</option>
            </select>

            <label htmlFor="price">Precio</label>
            <input type="number" id="price" name="price" min="0" step="0.01" required />

            <h2>Contacto</h2>
            <label htmlFor="location">Ubicación</label>
            <input type="text" id="location" name="location" defaultValue={job?.location} required />

            <label htmlFor="contactInfo">Información de contacto</label>
            <textarea id="contactInfo" name="contactInfo" defaultValue={job?.contactInfo} required></textarea>

            <button type="submit" >{job ? "Guardar cambios" : "Publicar oferta"}</button>
        </form>
    );
}