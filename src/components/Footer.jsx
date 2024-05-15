import { Section } from "./Section";
import { socials } from "../constants";

export function Footer() {
  return (
    <Section crosses className="!px-0 !py-10">
      <div className="container flex items-center justify-center gap-10 max-sm:flex-col sm:justify-between">
        <p className="caption text-n-4 lg:block">
          &copy; {new Date().getFullYear()}. All rights reserved.
        </p>

        <ul className="flex flex-wrap gap-5">
          {socials.map((item) => (
            <a
              key={item.id}
              href={item.url}
              target="_blank"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-n-7 transition-colors hover:bg-n-6"
            >
              <img src={item.iconUrl} width={16} height={16} alt={item.title} />
            </a>
          ))}
        </ul>
      </div>
    </Section>
  );
}
