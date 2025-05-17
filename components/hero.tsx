import { Container } from "./container";
import { TypographyH1, TypographyLead } from "./ui/topygraphy";

export function ArticleHero({
  title,
  subtitle,
}: {
  title: string;
  subtitle: string;
}) {
  return (
    <>
      <Container>
        <TypographyH1>{title}</TypographyH1>
        <TypographyLead className="pt-2">{subtitle}</TypographyLead>
      </Container>
    </>
  );
}
