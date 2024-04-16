import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <div className="card text-bg-dark">
        <Image
          src="/test.jpg"
          width={500}
          height={500}
          className="card-img"
          alt="..."
        />
        <div className="card-img-overlay">
          <h1 className="card-title">CH Hardwood</h1>
          <h5 className="card-text">Timeless Elegance</h5>
          <h5 className="card-text">Meets Exceptional</h5>
          <h5 className="card-text">CRAFTSMANSHIP</h5>
          <p className="card-text">
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer.
          </p>
          <Link href="/message" className="btn btn-primary">
            Primary
          </Link>
        </div>
      </div>

      <h2>Our Story</h2>

      <p>
        With a passion for natural beauty and a commitment to excellence, we
        take pride in transforming spaces into stunning showcases with our
        exquisite hardwood flooring solutions.
      </p>

      <div className="row">
        <div className="col">
          <Image
            src="/test.jpg"
            width={500}
            height={500}
            className="card-img"
            alt="..."
          />
        </div>

        <div className="col">
          <Image
            src="/test.jpg"
            width={500}
            height={500}
            className="card-img"
            alt="..."
          />
        </div>
      </div>

      <Link href="/gallery" className="btn btn-primary">
        Gallery
      </Link>
    </main>
  );
}
