import Link from "next/link";

export default function Root() {
  return (
    <main className="flex min-h-screen flex-col items-start p-24">
      <h1>Available pages:</h1>
      <section className="flex flex-col">
        <ul>
          <li>
            <Link href={"/login"} className="underline">
              Login
            </Link>
          </li>
          <li>
            <Link href={"/home"} className="underline">
              Home
            </Link>
          </li>
        </ul>
      </section>
    </main>
  );
}
