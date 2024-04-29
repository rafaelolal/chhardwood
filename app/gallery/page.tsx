import ImageList from "../ui/image-list";

type ImageType = {
  alt: string;
  link: string;
};

export default function Gallery() {
  const images: ImageType[] = [
    { alt: "Image 1", link: "/chhardwood/images/test1.jpg" },
    { alt: "Image 2", link: "/chhardwood/images/test2.jpg" },
    { alt: "Image 1", link: "/chhardwood/images/test3.jpg" },
    { alt: "Image 1", link: "/chhardwood/images/test1.jpg" },
    { alt: "Image 2", link: "/chhardwood/images/test2.jpg" },
    { alt: "Image 1", link: "/chhardwood/images/test3.jpg" },
    { alt: "Image 1", link: "/chhardwood/images/test1.jpg" },
    { alt: "Image 2", link: "/chhardwood/images/test2.jpg" },
    { alt: "Image 1", link: "/chhardwood/images/test3.jpg" },
  ];

  return (
    <main>
      <div className="row w-100 m-0 py-5 wood-bg-2 border-bottom border-top border-light border-3">
        <h1 className="fs-4 text-center text-light m-0 p-0">Gallery</h1>
        <h2 className="body-text fs-6 text-center m-0 mb-2 text-secondary">
          The best way to communicate what we do
        </h2>
        <div className="bar" />
      </div>
      <div className="px-3 px-md-5 pt-3 pb-5">
        <ImageList images={images} />
      </div>
    </main>
  );
}
