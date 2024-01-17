"use client";
import * as React from "react";

import { QRCodeSVG } from "qrcode.react";
import { cn } from "../lib/utils";

const QRCode: React.FC<{
  value: string;
  className?: string;
  size?: number;
}> = ({ value, className, size }) => {
  return (
    <div className={cn("flex h-auto w-auto", className)}>
      <div className="bg-white p-4">
        <QRCodeSVG value={value} size={size ?? 200} />
      </div>
    </div>
  );
};

export { QRCode };
