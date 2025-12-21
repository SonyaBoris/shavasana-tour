'use client';

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const links = [
    { href: "/program", label: "Программа" },
    { href: "/masters", label: "Мастера" },
    { href: "/participation", label: "Участие" },
    { href: "/cancellation", label: "Условия отмены" },
];

export default function Navigation() {
    const [isOpen, setIsOpen] = useState(false);
    const pathname = usePathname();

    const isActive = (href: string) => {
        if (href === "/") {
            return pathname === "/";
        }

        return pathname.startsWith(href);
    };

    return (
        <header className="fixed inset-x-0 top-0 z-50">
            <div className="site-container relative flex items-center justify-between gap-3 py-3 md:py-4">
                <Link
                    href="/"
                    className="group relative inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-3 py-2 text-sm font-semibold uppercase tracking-[0.08em] text-white/80 shadow-lg backdrop-blur transition hover:border-white/30 hover:bg-white/10"
                >
                    <span className="relative h-11 w-11 overflow-hidden rounded-full ring-1 ring-white/30 shadow-lg shadow-[#0a1624]/40 transition duration-300 group-hover:scale-105">
                        <Image
                            src="/logo.jpg"
                            alt="Shavasana Tour"
                            fill
                            sizes="44px"
                            className="object-cover"
                            priority
                        />
                    </span>
                    <span className="leading-tight">
                        <span className="block text-white">Shavasana Tour</span>
                        <span className="block text-[11px] font-medium text-white/60">Андаманские острова</span>
                    </span>
                </Link>

                <nav className="hidden items-center gap-1 rounded-full border border-white/10 bg-white/5 px-2 py-1 shadow-lg backdrop-blur md:flex">
                    {links.map((link) => {
                        const active = isActive(link.href);

                        return (
                            <Link
                                key={link.label}
                                href={link.href}
                                className={`group relative inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold transition ${active ? "text-[#050b14]" : "text-white/80 hover:text-white"
                                    }`}
                            >
                                <span
                                    className={`absolute inset-[-1px] rounded-full bg-white transition duration-300 ${active ? "opacity-100 shadow-[0_18px_60px_-24px_rgba(255,255,255,0.8)]" : "opacity-0 group-hover:opacity-5"
                                        }`}
                                    aria-hidden="true"
                                />
                                <span
                                    className={`absolute inset-[-4px] -z-10 rounded-full bg-gradient-to-r from-[#8ef1ff]/60 via-[#8c7bff]/60 to-[#ff9bd8]/60 blur-md transition duration-300 ${active ? "opacity-100" : "opacity-0 group-hover:opacity-70"
                                        }`}
                                    aria-hidden="true"
                                />
                                <span className="relative z-10">{link.label}</span>
                            </Link>
                        );
                    })}
                </nav>

                <button
                    type="button"
                    className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white shadow-lg backdrop-blur transition hover:border-white/30 hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-white/70 md:hidden"
                    aria-expanded={isOpen}
                    aria-label="Открыть меню"
                    onClick={() => setIsOpen((prev) => !prev)}
                >
                    {isOpen ? <X className="size-5" /> : <Menu className="size-5" />}
                </button>
            </div>

            {isOpen && (
                <div className="md:hidden px-4 pb-4">
                    <div className="rounded-2xl border border-white/10 bg-[#0b1623]/95 p-4 shadow-2xl shadow-black/40 backdrop-blur">
                        <nav className="flex flex-col gap-2 text-base font-semibold uppercase tracking-[0.05em]">
                            {links.map((link) => {
                                const active = isActive(link.href);

                                return (
                                    <Link
                                        key={link.label}
                                        href={link.href}
                                        className={`flex items-center justify-between rounded-xl px-4 py-3 transition ${active
                                                ? "bg-white text-[#050b14] shadow-[0_15px_45px_-28px_rgba(255,255,255,0.9)]"
                                                : "bg-white/5 text-white/90 hover:bg-white/10"
                                            }`}
                                        onClick={() => setIsOpen(false)}
                                    >
                                        <span>{link.label}</span>
                                        <span className="text-xs text-white/60">{active ? "Сейчас" : "→"}</span>
                                    </Link>
                                );
                            })}
                        </nav>
                    </div>
                </div>
            )}
        </header>
    );
}
