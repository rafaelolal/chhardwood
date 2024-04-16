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
    <>
      {Array.from({ length: Math.ceil(images.length / 2) }).map((_, i) => {
        const firstImage = images[2 * i];
        const secondImage = images[2 * i + 1];
        return (
          <div className="row" key={i}>
            <div className="col">
              {firstImage && (
                <Image
                  src={firstImage.link}
                  alt={firstImage.alt}
                  width={500}
                  height={300}
                />
              )}
            </div>

            <div className="col">
              {secondImage && (
                <Image
                  src={secondImage.link}
                  alt={secondImage.alt}
                  width={500}
                  height={300}
                />
              )}
            </div>
          </div>
        );
      })}
    </>
  );
}
