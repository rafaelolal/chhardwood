import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="navbar bg-body-tertiary">
      <div className="container-fluid">
        <Link className="navbar-brand" href="/">
          CH HardWood
        </Link>

        <div className="nav-item dropdown">
          <a
            className="nav-link dropdown-toggle"
            href="#"
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Language
          </a>
          <ul className="dropdown-menu">
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

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasNavbar"
          aria-controls="offcanvasNavbar"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className="offcanvas offcanvas-end"
          tabIndex={-1}
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
        >
          <div className="offcanvas-header">
            <h5 className="offcanvas-title" id="offcanvasNavbarLabel">
              CH HardWood
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>
          <div className="offcanvas-body">
            <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" href="/">
                  Home
                </Link>
              </li>

              <li className="nav-item">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  href="/services"
                >
                  Services
                </Link>
              </li>

              <li className="nav-item">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  href="/gallery"
                >
                  Gallery
                </Link>
              </li>

              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Contact Us
                </a>

                <ul className="dropdown-menu">
                  <li>
                    <Link className="dropdown-item" href="/message">
                      Send Us A Message
                    </Link>
                  </li>

                  <li>
                    <Link className="dropdown-item" href="/appointment">
                      Schedule An Appointment
                    </Link>
                  </li>

                  <li>
                    <Link className="dropdown-item" href="/quote">
                      Get A Quote
                    </Link>
                  </li>
                </ul>
              </li>

              <li className="nav-item">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  href="/help"
                >
                  Help
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}
