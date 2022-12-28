import type { MetaFunction } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import type { LinksFunction } from "@remix-run/node";

import styles from "./tailwind.css";

export const links: LinksFunction = () => [{ rel: "stylesheet", href: styles }];

export const meta: MetaFunction = () => ({
  charset: "utf-8",
  title: "Alchemical Tinctures",
  description:
    'Locally foraged fungi / mushrooms / flowers around the Ohio Valley region in the USA! All of our tinctures are created from fruiting bodies / aerial flower parts using the double extraction process that involves a 6 week alcohol maceration in 100 proof "gluten free" vodka followed by an 8 hour hot water decoction using spring water for optimal extraction of both alcohol and water soluble constituents. ',
  viewport: "width=device-width,initial-scale=1",
});

export default function App() {
  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
      </head>
      <body className="h-full bg-grey">
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
