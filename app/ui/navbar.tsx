import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="navbar bg-primary">
      <div className="container-fluid">
        <Link className="navbar-brand krona-one text-white py-2" href="/">
          CH Floors
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasNavbar"
          aria-controls="offcanvasNavbar"
          aria-label="Toggle navigation"
        >
          <span className="toggler-icon"></span>
          <span className="toggler-icon" style={{ margin: "7px auto" }}></span>
          <span className="toggler-icon"></span>
        </button>

        <div
          className="offcanvas offcanvas-end fs-7"
          tabIndex={-1}
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
        >
          <div className="offcanvas-header bg-light py-2 border-2 border-dark">
            <h1
              className="offcanvas-title navbar-brand py-2"
              id="offcanvasNavbarLabel"
            >
              CH Floors
            </h1>

            <button
              className="navbar-toggler fs-2 ms-auto krona-one text-dark"
              type="button"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            >
              X
            </button>
          </div>

          <div
            className="offcanvas-body bg-light navbar-text d-flex flex-column p-2 "
            style={{ height: "fit-content" }}
          >
            <ul className="navbar-nav justify-content-start pt-5 flex-grow-1 fs-6">
              <li className="nav-item text-dark" data-bs-dismiss="offcanvas">
                <Link
                  className="nav-link active text-dark fw-semibold"
                  aria-current="page"
                  href="/"
                >
                  HOME
                </Link>
              </li>

              <li className="nav-item " data-bs-dismiss="offcanvas">
                <Link
                  className="nav-link active text-dark fw-semibold"
                  aria-current="page"
                  href="/services"
                >
                  SERVICES
                </Link>
              </li>

              <li className="nav-item" data-bs-dismiss="offcanvas">
                <Link
                  className="nav-link active text-dark fw-semibold"
                  aria-current="page"
                  href="/gallery"
                >
                  GALLERY
                </Link>
              </li>

              <li className="nav-item" data-bs-dismiss="offcanvas">
                <Link
                  className="nav-link active text-dark fw-semibold"
                  aria-current="page"
                  href="/contact"
                >
                  CONTACT US
                </Link>
              </li>

              {/* <li className="nav-item " data-bs-dismiss="offcanvas">
                <Link
                  className="nav-link active text-dark"
                  aria-current="page"
                  href="/help"
                >
                  HELP
                </Link>
              </li> */}

              {/* <li>
                <div className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle text-dark"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    LANGUAGE
                  </a>
                  <ul className="dropdown-menu bg-primary fs-7">
                    <li>
                      <a className="dropdown-item text-tertiary" href="#">
                        English
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item text-tertiary" href="#">
                        Portuguese
                      </a>
                    </li>
                  </ul>
                </div>
              </li> */}
            </ul>
            <div className="mx-auto mb-3">
              <Image
                src="/images/logo.png"
                style={{ filter: "saturate(60%)" }}
                width={100}
                height={100}
                alt="CH Floors Logo"
              />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
