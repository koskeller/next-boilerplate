import { FOOTER_NAV, SITE_NAME, TWITTER } from "@/lib/const";
import Link from "next/link";
import { Container } from "./container";

export function Footer() {
  return (
    <>
      <footer className="flex min-h-16 gap-4 border-t bg-background">
        <Container className="flex w-full py-4">
          <div className="flex w-full items-center justify-between">
            <nav className="flex flex-col items-start gap-3 md:flex-row md:items-center md:gap-5 lg:gap-6">
              <p>
                © {new Date().getFullYear()}{" "}
                <span className="font-cal-sans">{SITE_NAME}</span>. All rights
                reserved.
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
            <Link
              href={TWITTER}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground transition-colors hover:text-foreground"
              aria-label="Follow us on Twitter"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="size-5"
              >
                <path
                  d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"
                  fill="currentColor"
                />
              </svg>
            </Link>
          </div>
        </Container>
      </footer>
    </>
  );
}
