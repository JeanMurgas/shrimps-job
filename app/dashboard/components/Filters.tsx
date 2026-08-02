export default function Filters() {
  return (
    <select
      name="category"
      className="rounded-xl border px-3 py-2"
    >
      <option value="">Todas las categorías</option>
      <option value="PROGRAMMING">Programación</option>
      <option value="CLEANING">Limpieza</option>
      <option value="DELIVERY">Delivery</option>
      <option value="REPAIR">Reparaciones</option>
      <option value="DESIGN">Diseño</option>
      <option value="OTHER">Otros</option>
    </select>
  );
}