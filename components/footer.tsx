import { FOOTER_NAV, SITE_NAME } from "@/lib/const";
import Link from "next/link";
import { Container } from "./container";

export function Footer() {
  return (
    <>
      <footer className="flex h-16 gap-4 border-t bg-background">
        <Container className="flex w-full">
          <nav className="flex flex-row items-center gap-5 text-sm lg:gap-6">
            <p>
              © {new Date().getFullYear()} {SITE_NAME}. All rights reserved.
            </p>
            {FOOTER_NAV.map((nav) => (
              <Link
                key={nav.href}
                href={nav.href}
                prefetch={false}
                className="text-muted-foreground transition-colors hover:text-foreground"
              >
                {nav.name}
              </Link>
            ))}
          </nav>
        </Container>
      </footer>
    </>
  );
}
