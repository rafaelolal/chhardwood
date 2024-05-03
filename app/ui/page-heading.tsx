type PageHeadingProps = {
  title: string;
  subtitle: string;
};

export function PageHeading({ title, subtitle }: PageHeadingProps) {
  return (
    <header className="row w-100 m-0 py-5 wood-bg-2 border-bottom border-top border-dark border-5">
      <h1 className="text-center text-dark m-0 p-0">{title}</h1>
      <h2 className=" fs-7 text-center m-0 mb-2">{subtitle}</h2>
      <div className="bar" />
    </header>
  );
}
