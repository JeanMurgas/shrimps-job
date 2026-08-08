import { createJob, updateJob } from "@/app/actions/jobs";
import { JobPost } from "@/app/generated/prisma/client";

interface JobFormProps {
    job?: JobPost;
}

export default function JobForm({ job }: JobFormProps) {
    const formAction = job
        ? updateJob.bind(null, job.id)
        : createJob;

    const inputStyles =
        "w-full rounded-xl border border-slate-300 bg-white px-4 py-2.5 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-orange-500 focus:ring-2 focus:ring-orange-100";

    return (
        <form action={formAction} className="space-y-8">

            {/* Información principal */}
            <section>
                <h2 className="mb-4 text-lg font-semibold text-slate-900">
                    Información principal
                </h2>

                <div className="space-y-4">
                    <div>
                        <label
                            htmlFor="title"
                            className="mb-1.5 block text-sm font-medium text-slate-700"
                        >
                            Título del trabajo
                        </label>

                        <input
                            type="text"
                            id="title"
                            name="title"
                            defaultValue={job?.title}
                            className={inputStyles}
                            required
                        />
                    </div>

                    <div>
                        <label
                            htmlFor="description"
                            className="mb-1.5 block text-sm font-medium text-slate-700"
                        >
                            Descripción del trabajo
                        </label>

                        <textarea
                            id="description"
                            name="description"
                            defaultValue={job?.description}
                            rows={4}
                            className={inputStyles}
                            required
                        />
                    </div>
                </div>
            </section>

            {/* Detalles */}
            <section>
                <h2 className="mb-4 text-lg font-semibold text-slate-900">
                    Detalles
                </h2>

                <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                        <label
                            htmlFor="category"
                            className="mb-1.5 block text-sm font-medium text-slate-700"
                        >
                            Categoría
                        </label>

                        <select
                            id="category"
                            name="category"
                            defaultValue={job?.category ?? ""}
                            className={inputStyles}
                            required
                        >
                            <option value="">Seleccionar categoría</option>
                            <option value="PROGRAMMING">Programación</option>
                            <option value="CLEANING">Limpieza</option>
                            <option value="DELIVERY">Delivery</option>
                            <option value="REPAIR">Reparaciones</option>
                            <option value="DESIGN">Diseño</option>
                            <option value="OTHER">Otro</option>
                        </select>
                    </div>

                    <div>
                        <label
                            htmlFor="price"
                            className="mb-1.5 block text-sm font-medium text-slate-700"
                        >
                            Precio
                        </label>

                        <input
                            type="number"
                            id="price"
                            name="price"
                            min="0"
                            step="0.01"
                            defaultValue={job?.price}
                            className={inputStyles}
                            required
                        />
                    </div>
                </div>
            </section>

            {/* Contacto */}
            <section>
                <h2 className="mb-4 text-lg font-semibold text-slate-900">
                    Contacto
                </h2>

                <div className="space-y-4">
                    <div>
                        <label
                            htmlFor="location"
                            className="mb-1.5 block text-sm font-medium text-slate-700"
                        >
                            Ubicación
                        </label>

                        <input
                            type="text"
                            id="location"
                            name="location"
                            defaultValue={job?.location}
                            className={inputStyles}
                            required
                        />
                    </div>

                    <div>
                        <label
                            htmlFor="contactInfo"
                            className="mb-1.5 block text-sm font-medium text-slate-700"
                        >
                            Información de contacto
                        </label>

                        <textarea
                            id="contactInfo"
                            name="contactInfo"
                            defaultValue={job?.contactInfo}
                            rows={3}
                            className={inputStyles}
                            required
                        />
                    </div>
                </div>
            </section>

            <div className="flex justify-end border-t border-slate-200 pt-6">
                <button
                    type="submit"
                    className="rounded-xl bg-orange-600 px-6 py-2.5 font-medium text-white transition hover:bg-orange-700"
                >
                    {job ? "Guardar cambios" : "Publicar oferta"}
                </button>
            </div>
        </form>
    );
}