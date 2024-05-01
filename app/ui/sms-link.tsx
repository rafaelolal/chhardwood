export function SmsLink({
  number,
  children,
}: {
  number: string;
  children: React.ReactNode;
}) {
  return <a href={`sms:${number}`}>{children}</a>;
}
