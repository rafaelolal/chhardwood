import Image from "next/image";

type ImageType = {
  alt: string;
  link: string;
};

type ImageListProps = {
  images: ImageType[];
};

export default function ImageList({ images }: ImageListProps) {
  return (
    <div className="row g-3 g-lg-4 row-cols-2 row-cols-sm-3 row-cols-md-4">
      {images.map((image, i) => {
        return (
          <div className="col" key={i}>
            <div
              className="position-relative card-img"
              style={{ width: "100%", height: "300px" }}
            >
              <Image
                src={image.link}
                alt={image.alt}
                fill
                style={{ objectFit: "cover" }}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
}
