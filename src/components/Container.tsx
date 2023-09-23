import React from "react";

interface IProps {
  className?: string;
}

export default function Container({ children, className }: React.PropsWithChildren<IProps>) {
  return <div className={`m-auto w-11/12 sm:w-10/12 lg:w-9/12 xl:w-7/12 ${className != undefined && className}`}>{children}</div>;
}
