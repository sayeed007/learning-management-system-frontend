"use client";

import Link from "next/link";
import Image from "next/image";
import { NotificationPopover } from "@/components/NotificationPopover";
import { NotificationIcon, TafuriLogoIcon } from "./icons";

export function Header() {
  return (
    <header className="flex items-center justify-between px-[20px] py-[14px] bg-[linear-gradient(to_right,rgba(211,227,255,1),rgba(243,255,237,1))]">
      <div className="flex items-center gap-2">
        <Link href="/">
          <TafuriLogoIcon className="w-[138px] h-[29px] cursor-pointer" />
        </Link>
      </div>

      <nav className="flex gap-8 text-grey-2 font-medium">
        <Link href="#">
          <span
            className="text-dark border-b-2 border-earth-green pb-1"
            aria-current="page"
          >
            Dashboard
          </span>
        </Link>
        <Link href="/courses">Courses</Link>
        <Link href="#">Question Bank</Link>
        <Link href="#">Article </Link>
        <Link href="#">Reports</Link>
      </nav>

      {/* Right: User Info */}
      <div className="flex items-center gap-4">
        <NotificationPopover>
          <span
            className="text-2xl cursor-pointer"
            aria-label="Open notifications"
            tabIndex={0}
          >
            <NotificationIcon />
          </span>
        </NotificationPopover>
        <span className="text-grey-2">
          Welcome,
          <Link
            href="/profile"
            className="font-semibold text-dark cursor-pointer hover:underline px-2"
          >
            Hafiz
          </Link>
        </span>

        <Image
          src="/avatars/avatar2.jpg"
          alt="Profile"
          width={32}
          height={32}
          className="rounded-full border border-off-white-4"
        />
      </div>
    </header>
  );
}
