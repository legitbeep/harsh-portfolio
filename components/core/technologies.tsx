import {
  getEthersIcon,
  getFirebaseIcon,
  getGithubIcon,
  getJSIcon,
  getMongoDBIcon,
  getNextJSIcon,
  getNodeJsIcon,
  getReactIcon,
  getReactQueryIcon,
  getReduxIcon,
  getTSIcon,
  getTailwindIcon,
  getWeb3Icon,
  getZustandIcon,
} from "../icons";

export const Technologies = () => {
  return (
    <div>
      <h2 className="text-xl font-semibold">🔮 Technologies</h2>
      <p className="mb-4 text-sm text-muted-foreground">
        Software and services I use often.
      </p>
      <div className="grid grid-cols-5 items-center gap-x-4 gap-y-6 text-xs">
        <div className="flex justify-center">
          <a
            className="group flex w-fit flex-col items-center gap-1"
            rel="noreferrer"
            href="https://react.dev"
          >
            {getReactIcon()}
            <span className="whitespace-nowrap text-muted-foreground">
              React
            </span>
          </a>
        </div>
        <div className="flex justify-center">
          <a
            className="group flex w-fit flex-col items-center gap-1"
            rel="noreferrer"
            href="https://nextjs.org"
          >
            {getNextJSIcon()}
            <span className="whitespace-nowrap text-muted-foreground">
              Next.js
            </span>
          </a>
        </div>
        <div className="flex justify-center">
          <a
            className="group flex w-fit flex-col items-center gap-1"
            rel="noreferrer"
            href="https://nodejs.org/en"
          >
            {getNodeJsIcon()}
            <span className="whitespace-nowrap text-muted-foreground">
              NodeJS
            </span>
          </a>
        </div>
        <div className="flex justify-center">
          <a
            className="group flex w-fit flex-col items-center gap-1"
            rel="noreferrer"
            href="https://www.mongodb.com/"
          >
            {getMongoDBIcon()}
            <span className="whitespace-nowrap text-muted-foreground">
              MongoDB
            </span>
          </a>
        </div>
        <div className="flex justify-center">
          <a
            className="group flex w-fit flex-col items-center gap-1"
            rel="noreferrer"
            href="https://www.javascript.com/"
          >
            {getJSIcon()}
            <span className="whitespace-nowrap text-muted-foreground">
              JavaScript
            </span>
          </a>
        </div>
        <div className="flex justify-center">
          <a
            className="group flex w-fit flex-col items-center gap-1"
            rel="noreferrer"
            href="https://www.typescriptlang.org"
          >
            {getTSIcon()}
            <span className="whitespace-nowrap text-muted-foreground">
              TypeScript
            </span>
          </a>
        </div>
        <div className="flex justify-center">
          <a
            className="group flex w-fit flex-col items-center gap-1"
            rel="noreferrer"
            href="https://redux.js.org/"
          >
            {getReduxIcon()}
            <span className="whitespace-nowrap text-muted-foreground">
              Redux
            </span>
          </a>
        </div>
        <div className="flex justify-center">
          <a
            className="group flex w-fit flex-col items-center gap-1"
            rel="noreferrer"
            href="https://tailwindui.com/"
          >
            {getTailwindIcon()}
            <span className="whitespace-nowrap text-muted-foreground">
              Tailwind
            </span>
          </a>
        </div>
        <div className="flex justify-center">
          <a
            className="group flex w-fit flex-col items-center gap-1"
            rel="noreferrer"
            href="https://github.com"
          >
            {getGithubIcon()}
            <span className="whitespace-nowrap text-muted-foreground">
              GitHub
            </span>
          </a>
        </div>
        <div className="flex justify-center">
          <a
            className="group flex w-fit flex-col items-center gap-1"
            rel="noreferrer"
            href="https://firebase.google.com"
          >
            {getFirebaseIcon()}
            <span className="whitespace-nowrap text-muted-foreground">
              Firebase
            </span>
          </a>
        </div>
      </div>
    </div>
  );
};
