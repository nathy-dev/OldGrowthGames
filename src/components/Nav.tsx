import * as React from "react";

import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Hamburger } from "./hamburger";
import { Typography } from "./ui/typography";

const team: { title: string; href: string; description: string }[] = [
  {
    title: "Nathy",
    href: "/party?focus=nathy",
    description: "Engineer and Narrative designer",
  },
  {
    title: "Luke",
    href: "/party?focus=luke",
    description: "Gameplay Designer",
  },
  {
    title: "Cubby",
    href: "/party?focus=cubby",
    description: "3d Artist & Illustrator",
  },
];

const games: { title: string; href?: string; description: string }[] = [
  {
    title: "Cub Scout",
    href: "/cubscout",
    description: "A short and narrative heavy souls-like",
  },
  // {
  //   title: "Foxtrot",
  //   href: "/foxtrot",
  //   description: "A creature collecting mobile game, incentivizing fitness",
  // },
  {
    title: "Stay Tuned for More",
    description: "Check back later for more releases.",
  },
];

const contact = [{ email: "nathy@oldgrowthgames.xyz" }];

const GamesLinks = ({ mobile }: { mobile?: boolean }) => (
  <ul className="grid gap-3 p-2  md:p-6 md:w-[500px] md:grid-cols-[.75fr_1fr]">
    {!mobile && (
      <li className="row-span-3">
        <NavigationMenuLink asChild>
          <a
            className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
            href="/"
          >
            <div className="mb-2 mt-4 text-lg font-medium">Our Games</div>
            <p className="text-sm leading-tight text-muted-foreground">
              We forge desktop and console games inspired by the games we grew
              up on with modern twists.
            </p>
          </a>
        </NavigationMenuLink>
      </li>
    )}
    {mobile ? (
      <ListItem title={games[0].title} href={games[0].href}>
        {games[0].description}
      </ListItem>
    ) : (
      games.map((component) => (
        <ListItem
          key={component.title}
          title={component.title}
          href={component.href}
        >
          {component.description}
        </ListItem>
      ))
    )}
  </ul>
);

const PartyLinks = () => (
  <ul className="grid w-content gap-3 p-2 md:p-6 md:w-[500px] md:grid-cols-2">
    {team.map((component) => (
      <ListItem
        key={component.title}
        title={component.title}
        href={component.href}
      >
        {component.description}
      </ListItem>
    ))}
  </ul>
);

export function Nav() {
  return (
    <NavigationMenu>
      <div className="flex md:hidden">
        <Hamburger>
          <Typography as="h2">Games</Typography>
          <GamesLinks mobile />
          <Typography as="h2">Lance fournie</Typography>
          <PartyLinks />
          <Typography as="h2">Contact</Typography>
        </Hamburger>
      </div>
      <div className="hidden md:flex">
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Games</NavigationMenuTrigger>
            <NavigationMenuContent>
              <GamesLinks />
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Lance fournie</NavigationMenuTrigger>
            <NavigationMenuContent>
              <PartyLinks />
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Contact us
            </NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
      </div>
    </NavigationMenu>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, href, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        {href ? (
          <a
            ref={ref}
            className={cn(
              "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
              className
            )}
            href={href}
            {...props}
          >
            <div className="text-sm font-medium leading-none">{title}</div>
            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
              {children}
            </p>
          </a>
        ) : (
          <span
            ref={ref}
            className={cn(
              "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors focus:bg-accent focus:text-accent-foreground",
              className
            )}
            {...props}
          >
            <div className="text-sm font-medium leading-none">{title}</div>
            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
              {children}
            </p>
          </span>
        )}
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
