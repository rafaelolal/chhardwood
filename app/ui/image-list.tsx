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
    <div className="row py-2 justify-content-evenly">
      {images.map((image, i) => {
        return (
          <div className="col-auto p-0" key={i}>
            <Image src={image.link} alt={image.alt} width={500} height={300} />
          </div>
        );
      })}
    </div>
  );
}
