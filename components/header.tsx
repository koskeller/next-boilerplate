import { HEADER_NAV, SITE_NAME } from "@/lib/const";
import Link from "next/link";
import Image from "next/image";
import { Container } from "./container";

export async function Header() {
  return (
    <header className="flex h-16 border-b bg-background">
      <Container className="flex w-full">
        <nav className="flex flex-row items-center justify-between gap-5 text-sm lg:gap-6 w-full">
          <div className="flex items-center gap-5 lg:gap-6">
            <Link
              href="/"
              className="flex items-center gap-3 text-xl font-semibold"
            >
              <Image
                src="/logo.png"
                alt={SITE_NAME}
                width={32}
                height={32}
                className="h-8 w-8"
              />
              <span className="font-cal-sans">{SITE_NAME}</span>
            </Link>
            {HEADER_NAV.map((nav) => (
              <Link
                key={nav.href}
                href={nav.href}
                className="text-muted-foreground transition-colors hover:text-foreground"
              >
                {nav.name}
              </Link>
            ))}
          </div>
        </nav>
      </Container>
    </header>
  );
}
