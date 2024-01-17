import { DashIcons } from "icons";
import { cn } from "lib/utils";
import { FC, ReactNode } from "react";
import { Button } from "./button";

const ActionCard: FC<{
  children: ReactNode;
  title: string;
  subTitle?: string;
  btnText: string;
  btnRef: any;
  backBtnRef: any;
  overlayRef: any;
  isActive: boolean;
  className?: string;
}> = ({
  children,
  title,
  subTitle,
  className,
  btnText,
  btnRef,
  backBtnRef,
  isActive,
  overlayRef,
}) => {
  console.log(isActive, "Is card active");
  return (
    <div
      ref={overlayRef}
      className={cn(
        "relative flex min-h-[450px] flex-col items-start overflow-hidden rounded-md bg-slate-700 transition-all",
        className,
      )}
    >
      <div
        className={cn(
          "group absolute inset-0 flex w-full flex-col items-start justify-between overflow-hidden bg-slate-600 p-3 transition-all hover:cursor-pointer hover:p-4",
          {
            "invisible opacity-0": isActive,
            "visible opacity-100": !isActive,
          },
        )}
      >
        <h2 className="font-sans text-xl font-medium animate-in">{title}</h2>
        <span>{subTitle ?? "Lorem ipsum..."}</span>
        <Button ref={btnRef}>
          {btnText}{" "}
          <DashIcons.arrowRight className="ml-1 text-xs transition-all group-hover:ml-3" />
        </Button>
      </div>
      <div className="flex h-full w-full flex-col p-4">
        <Button
          ref={backBtnRef}
          variant="subtle"
          className="w-[80px]"
          size="sm"
        >
          <DashIcons.arrowLeft className="mr-1 h-4 w-4 transition-all group-hover:ml-3" />
          Back
        </Button>
        {children}
      </div>
    </div>
  );
};

const TrackingCard: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <div
      className={cn(
        "group hidden min-h-[350px] flex-col items-start justify-start rounded-md bg-slate-800 p-4 md:flex",
      )}
    >
      {children}
    </div>
  );
};
