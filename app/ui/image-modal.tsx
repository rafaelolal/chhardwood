import clsx from "clsx";
import Image from "next/image";

type ImageModalProps = {
  images: ImageType[];
};

export function ImageModal({ images }: ImageModalProps) {
  return (
    <div
      className="modal fade"
      id="exampleModal"
      tabIndex={-1}
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-body">
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>

            <div id="carouselExample" className="carousel slide">
              <div className="carousel-inner">
                {images.map((image, i) => {
                  return (
                    <div
                      className={clsx("carousel-item", {
                        active: i === 0,
                      })}
                      key={i}
                      style={{
                        height: "90vh",
                        maxHeight: "90vh",
                        maxWidth: "80vw",
                      }}
                    >
                      <div className="d-block w-100">
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

              <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExample"
                data-bs-slide="prev"
              >
                <span
                  className="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Previous</span>
              </button>

              <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#carouselExample"
                data-bs-slide="next"
              >
                <span
                  className="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>

                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
