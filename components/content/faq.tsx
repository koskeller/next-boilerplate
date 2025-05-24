import { FAQS } from "@/lib/content";
import { Container } from "../container";

export function FaqSection() {
  return (
    <Container id="faq">
      <div className="text-center">
        <span
          data-slot="badge"
          className="inline-flex items-center justify-center rounded-md border px-2 py-0.5 w-fit whitespace-nowrap shrink-0 [&>svg]:size-3 gap-1 [&>svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden border-transparent bg-primary text-primary-foreground [a&]:hover:bg-primary/90 text-xs font-medium"
        >
          FAQ
        </span>
        <h2 className="mt-4 text-center text-4xl lg:text-5xl mb-16">
          Common Questions &amp; Answers
        </h2>
      </div>
      <div className="mx-auto mt-14 sm:px-16">
        {FAQS.map((faq, index) => (
          <div key={index} className="mb-8 flex gap-4">
            <span className="flex size-8 shrink-0 items-center justify-center rounded-sm bg-secondary font-mono text-lg text-primary">
              {index + 1}
            </span>
            <div>
              <div className="mb-2 flex items-center justify-between">
                <h3 className="text-2xl">{faq.question}</h3>
              </div>
              <p className="text-lg xs:text-base font-normal mt-2 xs:mt-1">
                {faq.answer}
              </p>
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
}
