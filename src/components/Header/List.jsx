import { Button } from "../ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";
import { ItemList } from "./ItemList";

export const List = () => {
  return (
    <Sheet>
      <SheetTrigger>
        <div className="flex items-center gap-1">
          <p>0</p>
          <i className="ri-file-list-3-line"></i>
        </div>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Liste Ingredient:</SheetTitle>
          <SheetDescription>
            <ItemList />
          </SheetDescription>
        </SheetHeader>
        <SheetFooter>
          <Button className="absolute bottom-3 left-2 right-2">
            Generer la list
          </Button>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
};
