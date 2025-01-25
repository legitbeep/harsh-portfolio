export const Achievement = () => {
  const ACHIEVEMENT_DATA = [
    {
      title:"🎖️ Spotlight Award ",
      description:" Bajaj Finserv Health LTD",
      link:"https://drive.google.com/file/d/1CGc3auLg5EbVuvSLRLfhjnfSgQeR7ZUl/view",
      dateData:"Mar 2024",
    },
    {
      title: "🥇 Product of the Day Award Winner",
      description: "Product Hunt",
      link: "https://www.producthunt.com/posts/getbyte",
      dateData: "Feb 2024",
    },
    {
      title: "🎖️ Securing 933rd rank",
      description: "Ninja Hire 2.0 Junior (2nd & 3rd year)",
      link: "https://ninjasfiles.s3.amazonaws.com/certificate_of_event_ninja_hire_2_0_junior_2nd_3rd_year_-4349889022140926431_1463522.pdf?utm_source=sendinblue&utm_campaign=Coding_event_certificate_template_new&utm_medium=email",
      dateData: "Nov 2020",
    }
  ];

  return (
    <div>
      <h2 className="text-xl font-semibold">🏅 Awards & Achievements </h2>
      <p className="mb-4 text-sm text-muted-foreground">
        Here are my awards and achievements!
      </p>
      <section className="grid gap-4">
        {ACHIEVEMENT_DATA.map(({ description, title, dateData, link }) => {
          return (
            <a key={Math.random()} href={link} target="_blank">
              <div className="sm:transition-transform hover:sm:-translate-y-0.5">
                <div className="group">
                  <div className="relative overflow-hidden rounded-lg p-px shadow-md ring-1 ring-border before:pointer-events-none before:absolute before:-left-48 before:-top-48 before:z-30 before:h-96 before:w-96 before:translate-x-[var(--mouse-x)] before:translate-y-[var(--mouse-y)] before:rounded-full before:bg-blue-500 before:opacity-0 before:blur-[100px] before:transition-opacity before:duration-500 after:absolute after:inset-0 after:z-10 after:rounded-[inherit] after:opacity-0 after:transition-opacity after:duration-500 after:[background:_radial-gradient(250px_circle_at_var(--mouse-x)_var(--mouse-y),theme(colors.slate.400),transparent)] before:hover:opacity-20 after:group-hover:opacity-100 dark:bg-zinc-700 dark:ring-0">
                    <div className="relative z-20 h-full overflow-hidden rounded-[inherit] bg-background p-4 text-sm">
                      <div className="space-y-1">
                        <div className="flex justify-between gap-2">
                          <h3 className="text-primary">{title}</h3>
                          <div className="flex items-center gap-2">
                            {dateData}
                          </div>
                        </div>
                        <p className="text-muted-foreground">{description}</p>
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
