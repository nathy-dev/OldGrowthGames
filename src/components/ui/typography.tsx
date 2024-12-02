import clsx from "clsx";

type TextElement = "h1" | "h2" | "h3" | "h4" | "p" | "span";
type StyleMod = TextElement | "title" | "blur";

type Props = {
  as: TextElement;
  children: React.ReactNode;
  styleMod?: StyleMod[];
};

export const Typography = ({ as, children, styleMod }: Props) => {
  const Element = as;
  const styleMods: string[] = [];

  const getClass = (variant: StyleMod, styleMods: string[]) => {
    switch (variant) {
      case "h1":
        styleMods.push("scroll-m-20 text-3xl tracking-tight lg:text-4xl");
        break;
      case "h2":
        styleMods.push(
          "scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight first:mt-0"
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
        break;
      case "blur":
        styleMods.push("bg-[radial-gradient(circle, green, blue)]");
    }
  };

  if (styleMod === undefined) {
    getClass(as, styleMods);
  } else {
    styleMod.forEach((variant) => {
      getClass(variant, styleMods);
    });
  }

  return <Element className={clsx(styleMods)}>{children}</Element>;
};
