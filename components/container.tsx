export function Container({
  children,
  className,
  ...rest
}: {
  children: React.ReactNode;
  className?: string;
} & React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={`mx-auto max-w-screen-xl px-4 sm:px-6 md:px-8 lg:px-10 py-2 sm:py-2 md:py-4 ${className}`}
      {...rest}
    >
      {children}
    </div>
  );
}
