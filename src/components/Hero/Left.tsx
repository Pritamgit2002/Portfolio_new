"use client";

import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";

export function Left() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" className="bg-white hover:bg-white">Left</Button>
      </SheetTrigger>
      <SheetContent side="left">
        <div></div>
      </SheetContent>
    </Sheet>
  );
}
