import Image from "next/image";
// import { ImageModal } from "./image-modal";

type ImageListProps = {
  className: string;
  images: ImageType[];
};

export default function ImageList({ className, images }: ImageListProps) {
  return (
    <>
      {/* <ImageModal images={images} /> */}

      <div className={className}>
        {images.map((image, i) => {
          return (
            <div className="col" key={i}>
              <div
                className="position-relative card-img"
                style={{ width: "100%", height: "300px" }}
                // data-bs-toggle="modal"
                // data-bs-target="#exampleModal"
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
    </>
  );
}
