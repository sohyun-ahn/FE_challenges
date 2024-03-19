import React, { PropsWithChildren } from "react";

interface PageProps {
  title?: string;
}

function Page({ title, children }: PropsWithChildren<PageProps>) {
  return (
    <main>
      {title && (
        <h1 style={{ fontSize: 20, fontWeight: 700, marginBottom: 20 }}>
          {title}
        </h1>
      )}
      {children}
    </main>
  );
}

export default Page;
