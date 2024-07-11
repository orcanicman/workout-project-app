import Image from "next/image";
import Link from "next/link";

export default function Login() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-between pt-24">
      <header className="px-12 flex flex-col items-center text-center">
        <h1 className="font-bold text-4xl mb-4">Login</h1>
        <p>
          By signing in you agree to our{" "}
          <Link href={"#"} className="underline text-blue-700">
            Terms and conditions.
          </Link>
        </p>
      </header>

      <main className="flex flex-col w-full px-12 mb-12">
        <form action="" className="flex flex-col w-full">
          <section className="border-b flex items-center space-x-2 my-2">
            <Image
              src={"/envelope.svg"}
              alt="Lock"
              width={24}
              height={24}
              className="text-gray-400"
            />
            <input
              type="text"
              placeholder="Email adress"
              className="py-1 grow"
            />
          </section>
          <section className="border-b flex items-center space-x-2 my-2">
            <Image
              src={"/lock-closed.svg"}
              alt="Lock"
              width={24}
              height={24}
              className="text-gray-400"
            />
            <input
              type="password"
              placeholder="Password"
              className="py-1 grow"
            />
          </section>
          <section className="flex items-center my-6 justify-between">
            <span className="flex items-center space-x-2">
              <input type="checkbox" className="w-4 h-4" id="checkbox" />
              <label htmlFor="checkbox">Remember me</label>
            </span>
            <span>
              <Link href={"#"} className="underline text-gray-400">
                Forgot password?
              </Link>
            </span>
          </section>
          <section className="flex items-center my-2">
            <button
              type="submit"
              className="w-full bg-blue-700 text-white p-2 rounded"
            >
              Login
            </button>
          </section>
        </form>
      </main>
      <footer>
        <Image
          alt="BottomImage"
          src={"/login-footer.svg"}
          width={500}
          height={250}
          className="w-screen sm:-my-12 md:hidden"
        />
      </footer>
    </div>
  );
}
