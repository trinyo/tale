import Link from "next/link";
import React from "react";

interface IProps {
  name: string;
  count: number;
  id: string;
}

export default function SetView({ name, count, id }: IProps) {
  return (
    <Link href={`/set/${id}`} className="bg-dark-1-normal hover:bg-dark-1-hover rounded-8 p-3 flex flex-col">
      <h6 className="font-medium text-body2">{name}</h6>
      <div className="font-light text-dark-outline text-label">{count} card</div>
    </Link>
  );
}
