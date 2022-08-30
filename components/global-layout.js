export default function GlobalLayout({ children }) {
  return (
    <div>
      <header>Global layout</header>
      <main>{children}</main>
      <footer>Global layout footer</footer>
    </div>
  );
}
