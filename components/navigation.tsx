'use client';

import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
} from "@/components/ui/navigation-menu"
import { Menu, X } from "lucide-react";
import { useState } from "react";
import Link from "next/link";

export default function Navigation() {
    const [isOpen, setIsOpen] = useState(false);

    const links = [
        { href: "/program", label: "Программа" },
        { href: "/masters", label: "Мастера" },
        { href: "/participation", label: "Участие" },
        { href: "/cancellation", label: "Условия отмены" },
    ];

    return (
        <div className="fixed left-0 top-0 z-30 flex w-full justify-center px-4 py-4 sm:px-6 sm:py-5 font-sans bg-gradient-to-b from-[#060b11] via-[#0f1f2b]/80 to-transparent text-white backdrop-blur-md shadow-lg shadow-black/30">
            <div className="site-container flex items-center justify-between">
                <div className="text-sm font-semibold tracking-wide uppercase text-white/80">Shavasana Tour</div>

                <button
                    type="button"
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white shadow-md backdrop-blur transition hover:border-white/40 hover:bg-white/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-white/60 md:hidden"
                    aria-expanded={isOpen}
                    aria-label="Открыть меню"
                    onClick={() => setIsOpen((prev) => !prev)}
                >
                    {isOpen ? <X className="size-5" /> : <Menu className="size-5" />}
                </button>

                <NavigationMenu className="hidden w-full justify-end md:flex">
                    <NavigationMenuList>
                        {links.map((link) => (
                            <NavigationMenuItem key={link.label}>
                                <NavigationMenuLink asChild>
                                    <Link href={link.href}>{link.label}</Link>
                                </NavigationMenuLink>
                            </NavigationMenuItem>
                        ))}
                    </NavigationMenuList>
                </NavigationMenu>
            </div>

            {isOpen && (
                <div className="absolute left-4 right-4 top-full mt-3 md:hidden">
                    <div className="rounded-2xl border border-white/15 bg-[#0f1f2b]/95 p-4 shadow-xl backdrop-blur">
                        <nav className="flex flex-col gap-3 text-base font-semibold uppercase tracking-[0.05em]">
                            {links.map((link) => (
                                <Link
                                    key={link.label}
                                    href={link.href}
                                    className="rounded-xl px-3 py-2 text-white transition hover:bg-white/10"
                                    onClick={() => setIsOpen(false)}
                                >
                                    {link.label}
                                </Link>
                            ))}
                        </nav>
                    </div>
                </div>
            )}
        </div>
    );
}
