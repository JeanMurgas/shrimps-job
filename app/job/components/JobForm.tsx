import { createJob } from "@/app/actions/jobs";

export default function JobForm() {
    return (
        <form action={createJob}>
            <h2>Información principal</h2>
            <label htmlFor="title">Título del trabajo</label>
            <input type="text" id="title" name="title" required />

            <label htmlFor="description">Descripción del trabajo</label>
            <textarea id="description" name="description" required></textarea>

            <h2>Detalles</h2>
            <label htmlFor="category">Categoría</label>
            <select id="category" name="category" required>
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
            <input type="text" id="location" name="location" required />

            <label htmlFor="contactInfo">Información de contacto</label>
            <textarea id="contactInfo" name="contactInfo" required></textarea>

            <button type="submit">Publicar oferta</button>
        </form>
    );
}