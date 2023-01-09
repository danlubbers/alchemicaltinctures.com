import { Link } from "@remix-run/react";
import logo from "~/assets/logo/alchemical-tinctures-logo.svg";

export default function Header() {
  return (
    <>
      <nav className="w-full h-1/8 mt-8 px-10 grid grid-cols-3 text-blue">
        <ul className="flex justify-center">
          <li>
            <Link
              className="hover:text-blueHover"
              prefetch="intent"
              to="/learn"
            >
              Learn
            </Link>
          </li>
        </ul>
        <Link
          className="flex justify-center items-start"
          prefetch="intent"
          to="/"
        >
          <img src={logo} alt="alchemical tinctures" width="150" />
        </Link>
        <ul className="flex justify-center">
          <li>
            <Link
              className="hover:text-blueHover"
              prefetch="intent"
              to="/products/turkey-tails"
            >
              Products
            </Link>
          </li>
        </ul>
        <h1 className="mt-4 col-start-1 col-end-4 text-center text-blue">
          Small batch & locally sourced Turkey Tails
        </h1>
      </nav>
    </>
  );
}
