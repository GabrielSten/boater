"use client";
import { places } from "@/app/conf";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function NavBar() {
  const [active, setActive] = useState("");
  useEffect(() => {
    const lastURL = window.location.href.split("/").at(-1);
    setActive(String(lastURL));
  }, []);

  function setActiveColor(placeName: string): string {
    if (active === placeName) {
      return "dark:text-active";
    }
    return "dark:text-inactive";
  }

  return (
    <div className="sticky top-0 flex w-full flex-col dark:bg-dark-banner scroll-auto z-10">
      <div className="flex items-center justify-between p-4 pl-1 min-w-[360px]">
        <ul className="font-medium flex flex-row space-x-4">
          {places.map(({ name }, index) => {
            return (
              <div key={index + "_menu_item"}>
                <li>
                  <Link
                    href={name}
                    className={`transition-all py-2 pl-4 pr-4  hover:text-active hover:dark:text-active ${setActiveColor(
                      name,
                    )}`}
                    aria-current="page"
                  >
                    {name}
                  </Link>
                </li>
              </div>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
