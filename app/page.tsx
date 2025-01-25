"use client";
import { Achievement } from "@/components/core/achievement";
import { Education } from "@/components/core/education";
import { Experience } from "@/components/core/experience";
import { Header } from "@/components/core/header";
import { Introduction } from "@/components/core/introduction";
import { Projects } from "@/components/core/projects";
import { Technologies } from "@/components/core/technologies";
import { ModeToggle } from "@/components/core/theme-toggle";
import {
  getDiscordIcon,
  getEmailIcon,
  getGithubIcon,
  getLinkedinIcon,
  getTwitterIcon,
} from "@/components/icons";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Header />
      <main className="container flex flex-1 flex-col pb-8 lg:px-96">
        <div className="space-y-12 pt-12 lg:pb-12">
          <Introduction />
          <Technologies />
          <Experience />
          <Education />
          <Projects />
          <Achievement />
        </div>
        {/* <svg
          className="animate-spotlight pointer-events-none absolute z-[1] h-[169%] w-[138%] opacity-0 lg:w-[84%] -top-40 left-0 md:-top-20 md:left-60"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 3787 2842"
          fill="none"
        >
          <g filter="url(#filter)">
            <ellipse
              cx="1924.71"
              cy="273.501"
              rx="1924.71"
              ry="273.501"
              transform="matrix(-0.822377 -0.568943 -0.568943 0.822377 3631.88 2291.09)"
              className="fill-orange-200 dark:fill-white/75"
              fill-opacity="0.21"
            ></ellipse>
          </g>
          <defs>
            <filter
              id="filter"
              x="0.860352"
              y="0.838989"
              width="3785.16"
              height="2840.26"
              filterUnits="userSpaceOnUse"
              color-interpolation-filters="sRGB"
            >
              <feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood>
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
              ></feBlend>
              <feGaussianBlur
                stdDeviation="151"
                result="effect1_foregroundBlur_1065_8"
              ></feGaussianBlur>
            </filter>
          </defs>
        </svg> */}
      </main>
    </>
  );
}
