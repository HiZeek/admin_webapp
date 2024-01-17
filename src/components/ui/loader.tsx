import React from "react";
import { cn } from "../lib/utils";

export interface LoaderProps extends React.HTMLAttributes<HTMLDivElement> {}

const Loader = React.forwardRef<HTMLDivElement, LoaderProps>(
  ({ className, ...props }, ref) => (
    <div
      className={cn(
        "absolute right-1/2 bottom-1/2  translate-x-1/2 translate-y-1/2 transform",
      )}
      ref={ref}
      {...props}
    >
      <div
        className={cn(
          "h-5 w-5 animate-spin  rounded-full border-2 border-solid border-slate-50 border-t-transparent dark:border-slate-900",
          className,
        )}
      ></div>
    </div>
  ),
);

Loader.displayName = "Loader";

export { Loader };
