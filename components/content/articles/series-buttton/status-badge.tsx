import React from "react";
import { statusConfig } from "@/lib/constants";

type StatusType = "ongoing" | "research" | "planning" | "completed";

type Props = {
  status: StatusType;
};

export default function StatusBadge({ status }: Props) {
  const config = statusConfig[status];

  return (
    <span
      className={`text-xs px-2 py-1 text-center rounded-full flex items-center justify-center ${config.className}`}
    >
      {config.label}
    </span>
  );
}