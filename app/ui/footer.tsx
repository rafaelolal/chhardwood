import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <div className="container-fluid m-0 bg-primary">
      <div className="row">
        <div className="col-12">
          <div className="position-relative logo">
            <Image
              src="/images/logo.png"
              fill
              alt="CH HardWood Logo"
              style={{ objectFit: "contain" }}
            />
          </div>

          <h5 className="text-light">CH HardWood</h5>
        </div>

        <div className="col-12"></div>
        <div className="col-12"></div>
        <div className="col-12"></div>
      </div>
    </div>
  );
}
