export default function Home() {
  // To reproduce, run the server, then add `prose-sm`, `prose-lg`, or `prose-xl`
  // You will notice that it does not generate the classes for it
  return (
    <main className="prose">
      <h1>hello world</h1>
    </main>
  );
}
