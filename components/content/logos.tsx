import Image from "next/image";
import { Container } from "../container";

export function Logos() {
  return (
    <Container>
      <div className="container flex flex-col items-center text-center">
        <p className="text-2xl font-cal-sans text-pretty lg:text-4xl">
          Trusted by students and researchers
        </p>
      </div>
      <div className="pt-10 md:pt-16 lg:pt-20">
        <div className="relative mx-auto flex items-center justify-center lg:max-w-5xl">
          <div className="mx-auto grid grid-cols-2 items-center gap-x-8 gap-y-12 sm:max-w-xl sm:grid-cols-3 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-6">
            <div className="col-span-1 flex h-16 items-center justify-center">
              <Image
                className="max-h-10 w-auto object-contain"
                src="/logos/mit_university.svg"
                alt="MIT"
                width={100}
                height={100}
              />
            </div>
            <div className="col-span-1 flex h-16 items-center justify-center">
              <Image
                className="max-h-10 w-auto object-contain"
                src="/logos/stanford_university.png"
                alt="Stanford University"
                width={676}
                height={963}
              />
            </div>
            <div className="col-span-1 flex h-16 items-center justify-center">
              <Image
                className="max-h-22 w-auto object-contain"
                src="/logos/princeton_university.png"
                alt="Princeton University"
                width={340}
                height={340}
              />
            </div>
            <div className="col-span-1 flex h-16 items-center justify-center">
              <Image
                className="max-h-22 w-auto object-contain"
                src="/logos/yale_university.png"
                alt="Yale University"
                width={1600}
                height={1067}
              />
            </div>
            <div className="col-span-1 flex h-16 items-center justify-center">
              <Image
                className="max-h-22 w-auto object-contain"
                src="/logos/columbia_university.png"
                alt="Columbia University"
                width={1024}
                height={1024}
              />
            </div>
            <div className="col-span-1 flex h-16 items-center justify-center">
              <Image
                className="max-h-10 w-auto object-contain"
                src="/logos/uc_berkeley.png"
                alt="UC Berkeley"
                width={2000}
                height={614}
              />
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}
