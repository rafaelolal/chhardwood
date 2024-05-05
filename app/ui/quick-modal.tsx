import Link from "next/link";

export default function QuickModal() {
  const quickAccessItems = [
    {
      icon: "bi bi-house-door-fill",
      name: "Book a Visit",
      link: "/visit",
    },
    {
      icon: "bi bi-person-fill",
      name: "Message Us",
      link: "/message",
    },
    {
      icon: "bi bi-currency-dollar",
      name: "Get a Quote",
      link: "/quote",
    },
    {
      icon: "bi bi-telephone-fill",
      name: "Call",
      link: "/contact",
    },
    {
      icon: "bi bi-chat-fill",
      name: "SMS",
      link: "/contact",
    },
    {
      icon: "bi bi-star-fill",
      name: "Reviews",
      link: "https://g.page/r/Cbs6GDoU0NDIEB0/review",
    },
  ];

  return (
    <>
      <i
        className="bi bi-info-circle-fill text-tertiary fs-1 fixed-bottom m-2"
        data-bs-toggle="offcanvas"
        data-bs-target="#quickOffCanvas"
        aria-controls="quickOffCanvas"
      ></i>

      <div
        className="offcanvas offcanvas-bottom"
        style={{ width: "60%", height: "50%", maxWidth: "300px" }}
        tabIndex={-1}
        id="quickOffCanvas"
        aria-labelledby="quickOffCanvasLabel"
      >
        {/* <div className="offcanvas-header">
          <h5 className="offcanvas-title" id="quickOffCanvasLabel">
            Quick Menu
          </h5>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div> */}

        <div className="offcanvas-body small">
          {quickAccessItems.map((item, index) => (
            <div
              className="d-flex"
              key={index}
              data-bs-toggle="offcanvas"
              data-bs-target="#quickOffCanvas"
            >
              <i className={`${item.icon} text-secondary fs-1 me-3`}></i>
              <Link className="nav-link my-auto" href={item.link}>
                {item.name}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
