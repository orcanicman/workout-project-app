import { Search } from "@/components/Search";
import { MenuItem } from "@/types/MenuItem";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <NavigationBar />
      <section className="mb-4 px-6">
        <h2 className="text-xl">Welcome back</h2>
        <h1 className="text-2xl font-bold">USER</h1>
      </section>

      <section className="mb-6 px-6">
        <Search />
      </section>

      <section
        className="overflow-y-auto pt-0 p-6"
        style={{
          maxHeight: "calc(100vh - 260px)",
          height: "calc(100vh - 260px)",
        }}
      >
        <ul className="grid grid-cols-2 gap-4">
          <Card
            name="Plan workout"
            description="Description"
            link="#"
            img="/logo.svg"
            className="bg-blue-700"
          />
          {new Array(8).fill("", 0, 8).map((_e, i) => (
            <Card
              key={i}
              name="In development"
              description="Coming soon..."
              link="#"
              img="/lock-closed.svg"
              className="bg-slate-400"
            />
          ))}
        </ul>
      </section>
    </main>
  );
}

const Card = ({ className, img, name, link, description }: MenuItem) => {
  return (
    <li className={`${className} rounded-xl`}>
      <Link href={link} className="flex flex-col p-4 h-40 text-white">
        <section className="grow self-start">
          <div className="bg-white self-start p-2 rounded-full">
            <Image alt="Card logo" src={img} width={24} height={24} />
          </div>
        </section>

        <section>
          <h2 className="font-semibold">{name}</h2>
          <h3 className="font-light text-xs">{description}</h3>
        </section>
      </Link>
    </li>
  );
};

const NavigationBar = () => {
  return (
    <nav className="flex justify-between items-center mb-4 p-6">
      <section>
        <button className="w-12 flex justify-center h-12 rounded-full bg-ownBlueHighlight items-center">
          <Image src={"/menu.svg"} alt="menu button" width={24} height={24} />
        </button>
      </section>
      <section className="space-x-2 flex">
        <button className="w-12 flex justify-center h-12 rounded-full items-center bg-white">
          <Image src={"/bell.svg"} alt="menu button" width={24} height={24} />
        </button>
        <button className="w-12 flex justify-center h-12 rounded-full items-center overflow-hidden">
          <Image src={"/user.svg"} alt="menu button" width={48} height={48} />
        </button>
      </section>
    </nav>
  );
};
