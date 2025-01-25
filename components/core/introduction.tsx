import {
  getCalendarIcon,
  getEmailIcon,
  getGithubIcon,
  getLinkedinIcon,
  getTwitterIcon,
  getProductHuntIcon
} from "../icons";

export const Introduction = () => {
  return (
    <div>
      <h1 className="mb-2 text-3xl font-bold tracking-tight">
        <span className="text-gradient mr-1">Hey, I&apos;m Kamal!</span> 👋
      </h1>
      <p className="mb-4 text-muted-foreground">
        I&rsquo;m a software developer with Two years of experience,
        specializing in building  efficient and scalable applications that provide seamless user experience.<br/>
        Find me on my socials below for a chat!
      </p>
      <div className="flex space-x-4">
        <a
          rel="noreferrer"
          href="https://calendly.com/kamaljoshi1582001/lets-connect"
          target="_blank"
        >
          {getCalendarIcon()}
        </a>
        <a rel="noreferrer" href="https://github.com/mr-joshi" target="_blank">
          {getGithubIcon()}
        </a>
        <a
          rel="noreferrer"
          href="https://www.linkedin.com/in/kamal-kishore-joshi-11904829/"
          target="_blank"
        >
          {getLinkedinIcon()}
        </a>
        <a rel="noreferrer" href="https://twitter.com/kamalj0s4i" target="_blank">
          {getTwitterIcon()}
        </a>
        <a rel="noreferrer" href="https://www.producthunt.com/@kamal_kishore_joshi" target="_blank">
          {getProductHuntIcon()}
        </a>
        <a
          rel="noreferrer"
          href="mailto:kamaljoshi1582001@gmail.com"
          target="_blank"
        >
          {getEmailIcon()}
        </a>
      </div>
    </div>
  );
};
