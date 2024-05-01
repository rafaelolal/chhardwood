export function PhoneLink({
  number,
  children,
}: {
  number: string;
  children: React.ReactNode;
}) {
  return <a href={`tel:${number}`}>{children}</a>;
}
