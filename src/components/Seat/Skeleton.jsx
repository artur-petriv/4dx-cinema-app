import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export default function SeatSkeleton() {
  return (
    <Skeleton
      height={36}
      width={24}
      borderRadius="var(--border-radius-small)"
    ></Skeleton>
  );
}
