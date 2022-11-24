export default function List({ properties, children }) {
  return (
    <section className="mb-5 grid gap-4 md:grid-cols-1 lg:grid-cols-2">
      {properties.map((property) => children(property))}
    </section>
  );
}
