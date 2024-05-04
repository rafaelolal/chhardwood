type PageHeadingProps = {
  title: string;
  subtitle: string;
};

export function PageHeading({ title, subtitle }: PageHeadingProps) {
  return (
    <header className="row w-100 m-0 py-5 wood-bg-2 border-bottom border-light border-5">
      <h1 className="text-center text-dark m-0 fs-4">{title}</h1>
      <h2 className=" fs-7 text-center text-quaternary m-0 mb-2">{subtitle}</h2>
      <div className="bar" />
    </header>
  );
}
