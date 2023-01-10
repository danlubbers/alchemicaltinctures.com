import { Link } from "@remix-run/react";
import logo from "~/assets/logo/alchemical-tinctures-logo.svg";

export default function Header() {
  return (
    <>
      <nav className="w-full h-1/8 mt-6 px-10 grid grid-cols-3 text-blue">
        <ul className="pt-4 pr-10 flex justify-end">
          <li>
            <Link
              className="hover:text-blueHover"
              prefetch="intent"
              to="/learn/turkey-tails"
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
        <ul className="pt-4 pl-10 flex justify-start">
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
        <h1 className="mt-4 col-start-1 col-end-4 text-center text-blue text-xs">
          Small batch, locally sourced fungi
        </h1>
      </nav>
    </>
  );
}
