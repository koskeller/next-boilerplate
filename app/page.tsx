import { Container } from "@/components/container";
import { FaqSection } from "@/components/content/faq";
import { FeaturesSection } from "@/components/content/features";
import { Hero } from "@/components/content/hero";
import { Logos } from "@/components/content/logos";
import { Footer } from "@/components/footer";

export default function Page() {
  return (
    <Container className="mt-6">
      <Hero />

      <div className="space-y-24">
        <Logos />
        <FeaturesSection />
        <FaqSection />
        <Footer />
      </div>
    </Container>
  );
}
