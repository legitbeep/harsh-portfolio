import {
  getCalendarIcon,
  getEmailIcon,
  getGithubIcon,
  getLinkedinIcon,
  getTwitterIcon,
} from "../icons";

export const Introduction = () => {
  return (
    <div>
      <h1 className="mb-2 text-3xl font-bold tracking-tight">
        <span className="text-gradient mr-1">Hey, I&apos;m Harsh!</span> 👋
      </h1>
      <p className="mb-4 text-muted-foreground">
        I&rsquo;m a software developer with Three years of experience, expertise
        in building efficient, scalable web and mobile applications, seamless
        full-stack architectures, and Ethereum-based dApps.
        <br />
        Find me on my socials below for a chat!
      </p>
      <div className="flex space-x-4">
        <a
          rel="noreferrer"
          href="https://calendly.com/h4rsh-dev/connect"
          target="_blank"
        >
          {getCalendarIcon()}
        </a>
        <a rel="noreferrer" href="https://github.com/legitbeep" target="_blank">
          {getGithubIcon()}
        </a>
        <a
          rel="noreferrer"
          href="https://www.linkedin.com/in/harsh-yadav-11906014/"
          target="_blank"
        >
          {getLinkedinIcon()}
        </a>
        <a rel="noreferrer" href="https://x.com/beep_dev" target="_blank">
          {getTwitterIcon()}
        </a>
        <a rel="noreferrer" href="mailto:h4rsh.dev@gmail.com" target="_blank">
          {getEmailIcon()}
        </a>
      </div>
    </div>
  );
};
