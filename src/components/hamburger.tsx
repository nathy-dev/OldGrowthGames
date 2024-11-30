import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";

type Props = {
  children: React.ReactNode;
};

export const Hamburger = ({ children }: Props) => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button>
          <Menu />
        </Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle className="font-nasa">WANING GIBBON</SheetTitle>
        </SheetHeader>
        <div>{children}</div>
        <SheetFooter></SheetFooter>
      </SheetContent>
    </Sheet>
  );
};
