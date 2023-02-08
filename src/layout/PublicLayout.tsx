import React, { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export default function PublicLayout({ children }: Props) {
  return (
    <>
      <div>PublicLayout test</div>
      <div>{children}</div>
    </>
  );
}
