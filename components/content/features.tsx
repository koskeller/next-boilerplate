import { FEATURES } from "@/lib/content";
import { Container } from "../container";

export function FeaturesSection() {
  return (
    <Container id="features">
      <h2 className="text-center text-4xl lg:text-5xl mb-16">Features</h2>

      <div className="mx-auto grid grid-cols-1 gap-8 mt-10 xl:gap-x-5 sm:grid-cols-2 sm:gap-4">
        {FEATURES.map((feature, index) => (
          <div key={index} className="bg-muted rounded-3xl p-6">
            <h2 className="text-2xl mb-4">{feature.title}</h2>
            <p className="text-lg xs:text-base font-normal mt-2 xs:mt-1">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </Container>
  );
}
