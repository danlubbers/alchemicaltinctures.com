import { json } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData,
  useLocation,
} from "@remix-run/react";
import type { LinksFunction, MetaFunction } from "@remix-run/node";

import { useEffect } from "react";
import * as gtag from "~/utils/gtags.client";

import styles from "./tailwind.css";

// Load the GA tracking id from the .env
export const loader = async () => {
  return json({ gaTrackingId: process.env.GA_TRACKING_ID });
};

export const links: LinksFunction = () => [{ rel: "stylesheet", href: styles }];

export const meta: MetaFunction = () => ({
  charset: "utf-8",
  title: "Alchemical Tinctures",
  description:
    'Locally foraged fungi / mushrooms / flowers around the Ohio Valley region in the USA! All of our tinctures are created from fruiting bodies / aerial flower parts using the double extraction process that involves a 6 week alcohol maceration in 100 proof "gluten free" vodka followed by an 8 hour hot water decoction using spring water for optimal extraction of both alcohol and water soluble constituents. ',
  viewport: "width=device-width,initial-scale=1",
});

export default function App() {
  const location = useLocation();
  const { gaTrackingId } = useLoaderData<typeof loader>();

  useEffect(() => {
    if (gaTrackingId?.length) {
      gtag.pageview(location.pathname, gaTrackingId);
    }
  }, [location, gaTrackingId]);

  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
      </head>
      <body className="h-full bg-grey">
        <>
          <script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=${gaTrackingId}`}
          />
          <script
            async
            id="gtag-init"
            dangerouslySetInnerHTML={{
              __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${gaTrackingId}', {
                  page_path: window.location.pathname,
                });
              `,
            }}
          />
        </>
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
