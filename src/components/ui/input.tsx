import * as React from "react";

import { cn } from "../lib/utils";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  suffix?: React.ReactNode | JSX.Element;
  prefix?: any;
  contentPadding?: string;
  prefixClass?: string;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    { className, suffix, prefix, contentPadding, prefixClass, ...props },
    ref,
  ) => {
    if (prefix) {
      return (
        <div className={cn("relative flex items-center", contentPadding)}>
          <div
            className={cn(
              "pointer-events-none absolute top-[calc(50%-5px)] ml-3 h-5 w-5",
              prefixClass,
            )}
          >
            {prefix}
          </div>
          <input
            className={cn(
              "flex h-10 w-full rounded-md border border-slate-300 bg-transparent py-2 px-10 text-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 dark:border-slate-700 dark:text-slate-50 dark:focus:ring-slate-400 dark:focus:ring-offset-slate-900",
              className,
            )}
            ref={ref}
            {...props}
          />
        </div>
      );
    }
    if (suffix) {
      return (
        <div className="relative flex items-center">
          <input
            className={cn(
              "flex h-10 w-full rounded-md border border-slate-300 bg-transparent py-2 px-3 pr-10 text-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 dark:border-slate-700 dark:text-slate-50 dark:focus:ring-slate-400 dark:focus:ring-offset-slate-900",
              className,
            )}
            ref={ref}
            {...props}
          />
          <div
            className={cn(
              "absolute right-1 top-[calc(50%-11px)] mr-2 flex h-6 w-auto items-center justify-items-center",
              {
                "pointer-events-auto": suffix,
              },
            )}
          >
            {suffix}
          </div>
        </div>
      );
    }
    return (
      <input
        className={cn(
          "flex h-10 w-full rounded-md border border-slate-300 bg-transparent py-2 px-3 text-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 dark:border-slate-700 dark:text-slate-50 dark:focus:ring-slate-400 dark:focus:ring-offset-slate-900",
          className,
        )}
        ref={ref}
        {...props}
      />
    );
  },
);
Input.displayName = "Input";

export { Input };
