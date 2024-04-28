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
          className="offcanvas offcanvas-top h-100"
          tabIndex={-1}
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
          style={{ transition: "0.1s" }}
        >
          <div className="offcanvas-header m-0 bg-primary">
            <h1
              className="offcanvas-title text-light border-0 navbar-brand"
              id="offcanvasNavbarLabel"
            >
              CH HardWood
            </h1>

            <button
              type="button"
              className="btn-close text-light"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            >
              X
            </button>
          </div>
          <div className="offcanvas-body bg-primary navbar-text ">
            <ul className="navbar-nav justify-content-start h-100 pt-5">
              <li className="nav-item text-light">
                <Link
                  className="nav-link active text-light"
                  aria-current="page"
                  href="/"
                >
                  HOME
                </Link>
              </li>

              <li className="nav-item ">
                <Link
                  className="nav-link active text-light"
                  aria-current="page"
                  href="/services"
                >
                  SERVICES
                </Link>
              </li>

              <li className="nav-item">
                <Link
                  className="nav-link active text-light"
                  aria-current="page"
                  href="/gallery"
                >
                  GALLERY
                </Link>
              </li>

              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle text-light"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  CONTACT US
                </a>

                <ul className="dropdown-menu bg-tertiary">
                  <li>
                    <Link className="dropdown-item" href="/message">
                      Send Us A Message
                    </Link>
                  </li>

                  <li>
                    <Link className="dropdown-item" href="/appointment">
                      Book An Appointment
                    </Link>
                  </li>

                  <li>
                    <Link className="dropdown-item" href="/quote">
                      Get A Quote
                    </Link>
                  </li>
                </ul>
              </li>

              <li className="nav-item ">
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
                  <ul className="dropdown-menu bg-tertiary">
                    <li>
                      <a className="dropdown-item" href="#">
                        English
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Portuguese
                      </a>
                    </li>
                  </ul>
                </div>
              </li>

              <li className="nav-item position-relative logo mx-auto d-block">
                <Image
                  src="/images/logo.png"
                  fill
                  alt="CH Hardwood Floors Logo"
                  objectFit="contain"
                />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}
