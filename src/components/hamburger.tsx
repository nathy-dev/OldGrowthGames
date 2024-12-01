import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Map } from "lucide-react";

type Props = {
  children: React.ReactNode;
};

export const Hamburger = ({ children }: Props) => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" size="max">
          <Map size={24} />
        </Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader className="sr-only">
          <SheetTitle>Old Growth Games</SheetTitle>
        </SheetHeader>
        <div>{children}</div>
        <SheetFooter></SheetFooter>
      </SheetContent>
    </Sheet>
  );
};
