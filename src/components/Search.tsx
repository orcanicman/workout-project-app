"use client";
import Image from "next/image";
import { ChangeEvent } from "react";

export const Search = ({
  onChange,
}: {
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}) => {
  return (
    <div className="bg-slate-100 rounded-xl flex p-3 space-x-2">
      <Image
        src={"/search-icon.svg"}
        alt="menu button"
        width={24}
        height={24}
      />
      <input
        onChange={onChange}
        type="text"
        className="bg-slate-100 grow"
        placeholder="Search"
      />
    </div>
  );
};
