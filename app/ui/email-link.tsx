export function EmailLink({
  email,
  children,
}: {
  email: string;
  children: React.ReactNode;
}) {
  return <a href={`mailto:${email}`}>{children}</a>;
}
