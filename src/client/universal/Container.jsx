export default function Container({ children }) {
  return (
    <section className="antialiased mx-auto h-lvh px-4 grid grid-cols-1 gap-4 list-none max-w-screen-xl md:grid-cols-3">
      {children}
    </section>
  );
}