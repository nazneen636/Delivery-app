"use client";

import * as React from "react";
import * as SeparatorPrimitive from "@radix-ui/react-separator";

import { cn } from "@/lib/utils";

function Separator({
  className,
  orientation = "horizontal",
  decorative = true,
  ...props
}: React.ComponentProps<typeof SeparatorPrimitive.Root>) {
  return (
    <SeparatorPrimitive.Root
      orientation={orientation}
      className={`bg-gray-300 shrink-0 ${
        orientation === "horizontal" ? "h-[1px] w-full" : "h-6 w-[2px]"
      } ${className}`}
      {...props}
    />
  );
}

export { Separator };
