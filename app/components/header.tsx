import { Link } from "@remix-run/react";
import logo from "~/assets/logo/alchemical-tinctures-logo.svg";

export default function Header() {
  return (
    <>
      <nav className="h-1/8 mt-6 grid w-full grid-cols-3 px-10 text-blue">
        <ul className="flex justify-end pt-4 pr-10">
          <li>
            <Link prefetch="intent" to="/learn/turkey-tails">
              Learn
            </Link>
          </li>
        </ul>
        <Link
          className="flex items-start justify-center"
          prefetch="intent"
          to="/"
        >
          <img src={logo} alt="alchemical tinctures" width="150" />
        </Link>
        <ul className="flex justify-between pt-4 pl-10">
          <li>
            <Link prefetch="intent" to="/products/turkey-tails">
              Products
            </Link>
          </li>
          {/* <li>
            <Link
              className="hover:text-blueHover"
              prefetch="intent"
              to="/contact"
            >
              Contact
            </Link>
          </li> */}
        </ul>
        <h1 className="col-start-1 col-end-4 mt-4 text-center text-sm text-blue">
          Small batch, locally sourced fungi
        </h1>
      </nav>
    </>
  );
}
