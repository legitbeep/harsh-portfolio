import Image from "next/image";
import { ModeToggle } from "./theme-toggle";

export const Header = () => {
  return (
    <header className="sticky top-0 z-50 border-b bg-background backdrop-blur supports-[backdrop-filter]:bg-background/25 dark:border-border/50">
      <div className="container flex items-center justify-between py-4 lg:px-96">
        <a
          className="flex gap-3 items-center transition-opacity hover:opacity-80"
          href="/"
        >
          <div
            className="h-10 w-10 rounded-lg"
            style={{
              backgroundImage: "url('/Kamal.Jpeg')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          ></div>
          <span className="text-gradient text-xl font-semibold tracking-tight">
            Kamal
          </span>
        </a>
        <div>
          <ModeToggle />
        </div>
      </div>
    </header>
  );
};
