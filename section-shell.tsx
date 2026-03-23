import type { ReactNode } from "react";

type SectionShellProps = {
  id: string;
  children: ReactNode;
  className?: string;
};

export function SectionShell({ id, children, className = "" }: SectionShellProps) {
  return (
    <section id={id} className={`scroll-mt-28 py-16 sm:py-20 ${className}`}>
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">{children}</div>
      {id !== "contact" ? (
        <div className="mx-auto mt-16 hidden max-w-4xl px-4 sm:block sm:px-6 lg:px-8">
          <div className="section-separator" />
        </div>
      ) : null}
    </section>
  );
}
