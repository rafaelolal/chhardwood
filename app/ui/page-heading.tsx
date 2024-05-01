type PageHeadingProps = {
  title: string;
  subtitle: string;
};

export function PageHeading({ title, subtitle }: PageHeadingProps) {
  return (
    <div className="row w-100 m-0 py-5 wood-bg-2 border-bottom border-top border-light border-3">
      <h1 className="fs-4 text-center text-light m-0 p-0">{title}</h1>
      <h2 className="body-text fs-6 text-center m-0 mb-2 text-secondary">
        {subtitle}
      </h2>
      <div className="bar" />
    </div>
  );
}
