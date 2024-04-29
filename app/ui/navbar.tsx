import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="navbar wood-bg">
      <div className="container-fluid">
        <Link className="navbar-brand text-light pt-2" href="/">
          CH HardWood
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
          className="offcanvas offcanvas-top fs-7"
          tabIndex={-1}
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
          style={{ transition: "0.1s", height: "100vh" }}
        >
          <div className="offcanvas-header m-0 bg-primary">
            <h1
              className="offcanvas-title text-light border-0 navbar-brand"
              id="offcanvasNavbarLabel"
            >
              CH HardWood
            </h1>

            <button
              className="navbar-toggler text-light fs-2 ms-auto "
              type="button"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            >
              X
            </button>
          </div>

          <div
            className="offcanvas-body bg-primary navbar-text d-flex flex-column p-2"
            style={{ height: "fit-content" }}
          >
            <ul className="navbar-nav justify-content-start pt-5 flex-grow-1">
              <li className="nav-item text-light" data-bs-dismiss="offcanvas">
                <Link
                  className="nav-link active text-light"
                  aria-current="page"
                  href="/"
                >
                  HOME
                </Link>
              </li>

              <li className="nav-item " data-bs-dismiss="offcanvas">
                <Link
                  className="nav-link active text-light"
                  aria-current="page"
                  href="/services"
                >
                  SERVICES
                </Link>
              </li>

              <li className="nav-item" data-bs-dismiss="offcanvas">
                <Link
                  className="nav-link active text-light"
                  aria-current="page"
                  href="/gallery"
                >
                  GALLERY
                </Link>
              </li>

              <li className="nav-item dropdown ">
                <a
                  className="nav-link dropdown-toggle text-light"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  CONTACT US
                </a>

                <ul className="dropdown-menu bg-primary fs-7 ">
                  <li data-bs-dismiss="offcanvas">
                    <Link
                      className="dropdown-item text-tertiary"
                      href="/message"
                    >
                      Send Us A Message
                    </Link>
                  </li>

                  <li data-bs-dismiss="offcanvas">
                    <Link
                      className="dropdown-item text-tertiary"
                      href="/appointment"
                    >
                      Book An Appointment
                    </Link>
                  </li>

                  <li data-bs-dismiss="offcanvas">
                    <Link className="dropdown-item text-tertiary" href="/quote">
                      Get A Quote
                    </Link>
                  </li>
                </ul>
              </li>

              <li className="nav-item " data-bs-dismiss="offcanvas">
                <Link
                  className="nav-link active text-light"
                  aria-current="page"
                  href="/help"
                >
                  HELP
                </Link>
              </li>

              <li>
                <div className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle text-light"
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
              </li>
            </ul>
            <div className="mx-auto">
              <Image
                src="/chhardwood/images/logo.png"
                width={85}
                height={85}
                alt="CH Hardwood Floors Logo"
                objectFit="contain"
              />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
