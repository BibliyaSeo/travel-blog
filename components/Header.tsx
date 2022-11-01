import dayjs from "dayjs";
import Link from "next/link";
import DarkModeToggleButton from "./DarkModeToggleButton";

export default function Header() {
  const now = dayjs();
  const year = now.format("YYYY");
  const month = now.format("MMM").toUpperCase();
  const date = now.format("DD");

  return (
    <>
      <header>
        <div className="container mx-auto flex flex-wrap px-5 py-10 flex-col sm:flex-row items-center justify-between">
          <div className="hidden sm:flex sm:flex-col my-english-font4">
            <span>{year}</span>
            <span className="text-sm">
              {month} {date}
            </span>
          </div>
          <div className="flex flex-col">
            <div className="flex w-full justify-end pr-2 pb-1">
              <span className="my-english-font1 text-sm text-sky-300">personal blog</span>
            </div>
            <div>
              <h1 className="font-bold my-english-font4 text-3xl text-sky-400">Renew My Life</h1>
            </div>
            <div className="flex w-full justify-end pr-8 pt-1">
              <span className="my-english-font1 text-gray-700">BibliyaSeo</span>
            </div>
          </div>
          <div className="flex flex-col">
            <div className="hidden sm:flex sm:justify-end">
              <DarkModeToggleButton />
            </div>
            <nav className="mt-6 mb-0 sm:mt-4 my-english-font1">
              <Link legacyBehavior href={"/"}>
                <a className="mr-2">HOME</a>
              </Link>
              <Link legacyBehavior href={"/trip"}>
                <a className="ml-2">TRIP</a>
              </Link>
            </nav>
          </div>
        </div>
      </header>
    </>
  );
}
