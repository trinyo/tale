import React from "react";

interface IProps {
  name: string;
  count: number;
  id: string;
}

export default function SetView({ name, count, id }: IProps) {
  return (
    <div>
      <h6>{name}</h6>
      <span>{count} card</span>
    </div>
  );
}
