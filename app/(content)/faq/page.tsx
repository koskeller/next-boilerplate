import { FaqSection } from "@/components/content/faq";
import { SITE_TITLE } from "@/lib/const";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: `${SITE_TITLE} - FAQ`,
  description: "Example TODO",
};

export default function Page() {
  return (
    <>
      <FaqSection />
    </>
  );
}
