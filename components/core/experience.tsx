import { getNextJSIcon } from "../icons";

export const Experience = () => {
  const EXPERIENCE_DATA = [
    {
      company: "🇮🇳 MindPeers",
      title: "Software Developer",
      dateData: "Jun, 2023 - Present",
    },
    {
      company: "🇮🇳 Rapid Innovations ",
      title: "SDE Frontend",
      dateData: "Mar, 2022 - May, 2023",
    },
    {
      company: "🇮🇳 Eyudh ",
      title: "Co-Founder",
      dateData: "Nov, 2020 - Feb, 2022",
    },
  ];

  return (
    <div>
      <h2 className="text-xl font-semibold">👨🏻‍💻 Experience</h2>
      <p className="mb-4 text-sm text-muted-foreground">
        Here&apos;s my professional record!
      </p>
      <section className="grid gap-4">
        {EXPERIENCE_DATA.map(({ company, title, dateData }) => {
          return (
            <a
              key={Math.random()}
              rel="noreferrer"
              href="https://www.linkedin.com/in/harsh-yadav-11906014/details/experience/"
              target="_blank"
            >
              <div className="sm:transition-transform hover:sm:-translate-y-0.5">
                <div className="group">
                  <div className="relative overflow-hidden rounded-lg p-px shadow-md ring-1 ring-border before:pointer-events-none before:absolute before:-left-48 before:-top-48 before:z-30 before:h-96 before:w-96 before:translate-x-[var(--mouse-x)] before:translate-y-[var(--mouse-y)] before:rounded-full before:bg-blue-500 before:opacity-0 before:blur-[100px] before:transition-opacity before:duration-500 after:absolute after:inset-0 after:z-10 after:rounded-[inherit] after:opacity-0 after:transition-opacity after:duration-500 after:[background:_radial-gradient(250px_circle_at_var(--mouse-x)_var(--mouse-y),theme(colors.slate.400),transparent)] before:hover:opacity-20 after:group-hover:opacity-100 dark:bg-zinc-700 dark:ring-0">
                    <div className="relative z-20 h-full overflow-hidden rounded-[inherit] bg-background p-4 text-sm">
                      <div className="space-y-1">
                        <div className="flex justify-between gap-2">
                          <h3 className="text-primary">{company}</h3>
                          <div className="flex items-center gap-2">
                            {dateData}
                          </div>
                        </div>
                        <p className="text-muted-foreground">{title}</p>
                      </div>
                      <svg
                        aria-hidden="true"
                        className="pointer-events-none absolute inset-0 h-full w-full fill-zinc-400/25 mt-2"
                      >
                        <defs>
                          <pattern
                            x="0"
                            y="0"
                            id=":r7:"
                            width="16"
                            height="16"
                            patternUnits="userSpaceOnUse"
                            patternContentUnits="userSpaceOnUse"
                          >
                            <circle cx="1" cy="1" r="1"></circle>
                          </pattern>
                        </defs>
                        <rect
                          width="100%"
                          height="100%"
                          stroke-width="0"
                          fill="url(#:r7:)"
                        ></rect>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </a>
          );
        })}
      </section>
    </div>
  );
};
