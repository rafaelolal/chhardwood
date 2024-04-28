import ImageList from "../ui/image-list";

type ImageType = {
  alt: string;
  link: string;
};

export default function Gallery() {
  const images: ImageType[] = [
    { alt: "Image 1", link: "/images/test1.jpg" },
    { alt: "Image 2", link: "/images/test2.jpg" },
    { alt: "Image 1", link: "/images/test3.jpg" },
    { alt: "Image 1", link: "/images/test1.jpg" },
    { alt: "Image 2", link: "/images/test2.jpg" },
    { alt: "Image 1", link: "/images/test3.jpg" },
    { alt: "Image 1", link: "/images/test1.jpg" },
    { alt: "Image 2", link: "/images/test2.jpg" },
    { alt: "Image 1", link: "/images/test3.jpg" },
  ];

  return (
    <main>
      <div className="row py-4">
        <h6 className="fs-4 text-center text-primary m-0 p-0">Gallery</h6>
        <h6 className="body-text fs-6 text-center m-0 mb-2">
          The best way to communicate what we do
        </h6>
        <div className="bar" />
      </div>

      <ImageList images={images} />
    </main>
  );
}
