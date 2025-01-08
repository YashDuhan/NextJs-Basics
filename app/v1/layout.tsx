import React from "react";

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div>
      <header>
        <h1>Get 20% Off</h1>
      </header>
      {children}
    </div>
  );
}
