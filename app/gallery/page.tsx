import ImageList from "../ui/image-list";

type ImageType = {
  alt: string;
  link: string;
};

export default function Gallery() {
  const images: ImageType[] = [
    { alt: "Image 1", link: "/test1.jpg" },
    { alt: "Image 2", link: "/test2.jpg" },
    { alt: "Image 1", link: "/test3.jpg" },
    { alt: "Image 1", link: "/test1.jpg" },
    { alt: "Image 2", link: "/test2.jpg" },
    { alt: "Image 1", link: "/test3.jpg" },
    { alt: "Image 1", link: "/test1.jpg" },
    { alt: "Image 2", link: "/test2.jpg" },
    { alt: "Image 1", link: "/test3.jpg" },
  ];

  return (
    <main>
      <h1>Gallery</h1>
      <p>The best way to communicate what we do</p>

      <ImageList images={images} />
    </main>
  );
}
