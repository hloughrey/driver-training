interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  backgroundMuted?: boolean;
  children?: React.ReactNode;
}

export function Section({ backgroundMuted, children, ...props }: SectionProps) {
  return (
    <section
      className={`py-8 md:py-12 lg:py-20 ${
        backgroundMuted ? "bg-gray-100" : ""
      }`.trim()}
      {...props}
    >
      {children}
    </section>
  );
}
