import clsx from "clsx";

type TextElement = "h1" | "h2" | "h3" | "h4" | "p";
type StyleMod = TextElement | "title";

type Props = {
  as: TextElement;
  children: React.ReactNode;
  styleMod?: StyleMod[];
};

export const Typography = ({ as, children, styleMod }: Props) => {
  const Element = as;
  const styleMods = [];

  if (styleMod === undefined) {
    styleMods.push(as);
  } else {
    styleMod.forEach((variant) => {
      switch (variant) {
        case "h1":
          styleMods.push(
            "scroll-m-20 text-3xl font-extrabold tracking-tight lg:text-4xl"
          );
          break;
        case "h2":
          styleMods.push(
            "scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0"
          );
          break;
        case "h3":
          styleMods.push("scroll-m-20 text-2xl font-semibold tracking-tight");
          break;
        case "h4":
          styleMods.push("scroll-m-20 text-xl font-semibold tracking-tight");
        case "p":
          styleMods.push("leading-7 [&:not(:first-child)]:mt-6");
          break;
        case "title":
          styleMods.push("font-cinzelDisplay");
      }
    });
  }

  return <Element className={clsx(styleMods)}>{children}</Element>;
};
