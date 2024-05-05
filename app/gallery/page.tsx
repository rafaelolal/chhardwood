import ImageList from "../ui/image-list";
import { Metadata } from "next";
import { InstagramEmbed } from "../ui/instagram-embed";
import { PageHeading } from "../ui/page-heading";
import path from "path";
import { promises as fs } from "fs";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Gallery | CH Floors",
  description:
    "View our gallery of hardwood flooring installations, refinishing, sanding, and repair services. CH Floors serves the Tri-State Area.",
  keywords:
    "flooring, hardwood, wood, floors, installation, refinishing, sanding, repair, Tri-State Area, New York, Pennsylvania, South Jersey, gallery, images, photos, installations, refinishing, sanding, repair, services",
};

export default async function Gallery() {
  const imageDirectory = path.join(process.cwd(), "/public/images/gallery");
  const imageFilenames = await fs.readdir(imageDirectory);

  const images: ImageType[] = [
    {
      alt: "Demonstration of cleaning services.",
      link: "/images/cleaning1.jpeg",
    },
    {
      alt: "Example installation of hardwood flooring.",
      link: "/images/installation1.jpeg",
    },
    {
      alt: "Example installation of finishing on hardwood floor.",
      link: "/images/installation2.jpeg",
    },
    {
      alt: "Example of process of installation of hardwood flooring.",
      link: "/images/repair1.jpeg",
    },
    {
      alt: "Example of polish finish on hardwood flooring.",
      link: "/images/test.jpg",
    },
    {
      alt: "Example of hardwood stairs finishing.",
      link: "/images/test1.jpg",
    },
    {
      alt: "Example of kitchen hardwood floor finish.",
      link: "/images/test2.jpg",
    },
    {
      alt: "Example of large studio hardwood floor polishing.",
      link: "/images/test3.jpg",
    },
  ];

  return (
    <>
      <PageHeading
        title="Gallery"
        subtitle="The best way to communicate what we do"
      />

      <main>
        <section className="container mt-3 mb-5 d-flex flex-column align-items-center">
          <InstagramEmbed />

          <Link
            href="/services"
            className="btn btn-tertiary mx-auto d-block mt-5 text-black"
          >
            See Services
          </Link>
        </section>

        <section className="px-3 px-md-5 my-4">
          <ImageList
            className="row g-3 g-lg-4 row-cols-2 row-cols-sm-3 row-cols-md-4"
            images={imageFilenames.map((filename) => ({
              link: `/images/gallery/${filename}`,
              alt: "Gallery image.",
            }))}
          />
        </section>
      </main>
    </>
  );
}
