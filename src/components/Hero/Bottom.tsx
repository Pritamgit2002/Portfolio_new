"use client";
import Home from "@/app/projects/page";
import { Button } from "../ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "../ui/sheet";
import Image from "next/image";

export function Bottom() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" className="bg-white hover:bg-white">Bottom</Button>
      </SheetTrigger>

      <SheetContent side="bottom" className="bg-red-400 h-screen w-full overflow-y-scroll">

        <div className=" flex items-center justify-center mt-12 h-max">
          <Home/>
        </div>
      </SheetContent>
    </Sheet>
  );
}
