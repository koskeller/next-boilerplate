import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { HERO_CONTENT } from "@/lib/content";
import { Star } from "lucide-react";
import Image from "next/image";

export function Hero() {
  return (
    <section id="home" className="py-4">
      <div className="container text-center">
        <div className="mx-auto flex max-w-screen-lg flex-col gap-6">
          <div className="flex justify-center">
            <Image
              src="/logo.png"
              width={512}
              height={512}
              alt="Logo"
              className="h-20 w-auto"
            />
          </div>

          <h1 className="text-4xl font-semibold lg:text-6xl">
            {HERO_CONTENT.heading}
          </h1>
          <p className="text-balance text-muted-foreground lg:text-lg">
            {HERO_CONTENT.description}
          </p>
        </div>
        <div className="mx-auto mt-10 flex w-fit flex-col items-center gap-4 sm:flex-row">
          <span className="mx-4 inline-flex items-center -space-x-4">
            {HERO_CONTENT.reviews.avatars.map((avatar, index) => (
              <Avatar key={index} className="size-12 border">
                <AvatarImage src={avatar.src} alt={avatar.alt} />
              </Avatar>
            ))}
          </span>
          <div>
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, index) => (
                <Star
                  key={index}
                  className="size-4 fill-yellow-400 text-yellow-400"
                />
              ))}
              <span className="mr-1 text-sm font-semibold">
                {HERO_CONTENT.reviews.rating?.toFixed(1)}
              </span>
            </div>
            <p className="text-left font-medium text-sm text-muted-foreground">
              from {HERO_CONTENT.reviews.count}+ reviews
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
