'use client'
import Link from "next/link";
import { NotificationPopover } from "@/components/NotificationPopover";
import Image from "next/image";

export function Header() {
    return (
        <header className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-2">
                {/* Replace with your logo */}
                <span className="text-earth-green font-bold text-24">Tafuri<span className="text-info">HR</span></span>
            </div>
            <nav className="flex gap-8 text-grey-2 font-medium">
                <a className="text-dark border-b-2 border-earth-green pb-1" href="#">Dashboard</a>
                <a href="#">Courses</a>
                <a href="#">Question Bank</a>
                <a href="#">Article</a>
                <a href="#">Reports</a>
            </nav>
            <div className="flex items-center gap-4">
                <span className="text-grey-2">
                    Welcome, {" "}
                    <Link href="/profile">
                        <span className="font-semibold text-dark cursor-pointer hover:underline">Hafiz</span>
                    </Link>
                </span>
                <NotificationPopover>
                    <span
                        className="text-2xl cursor-pointer"
                        aria-label="Open notifications"
                        tabIndex={0}
                    >
                        🔔
                    </span>
                </NotificationPopover>
                {/* Optionally, show user avatar */}
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