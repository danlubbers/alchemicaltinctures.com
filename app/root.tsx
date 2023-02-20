import { json } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useCatch,
  useLoaderData,
  useLocation,
} from "@remix-run/react";
import type { LinksFunction, MetaFunction } from "@remix-run/node";

import { useEffect } from "react";
import * as gtag from "~/utils/gtags.client";

import styles from "./tailwind.css";
import Header from "./components/header";
import Footer from "./components/footer";

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
    <html lang="en" className="flex w-full justify-center">
      <head>
        <Meta />
        <Links />
      </head>
      <body className="h-full max-w-6xl bg-grey">
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
        <Header />
        <Outlet />
        <Footer />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}

export function CatchBoundary() {
  const caught = useCatch();
  if (caught.status === 404) {
    return (
      <html lang="en">
        <head>
          <title>Oh no!</title>
          <Meta />
          <Links />
        </head>
        <body className="w-full bg-grey text-center">
          <Header />
          <div className="my-10 flex h-1/2 w-full flex-col items-center justify-center px-10 text-brown">
            <h1 className="">Status: {caught.status}</h1>
            <p>You have reached a page that does not exist!</p>
          </div>
          <Scripts />
        </body>
      </html>
    );
  }
  throw new Error(`Unexpected caught response with status: ${caught.status}`);
}

export function ErrorBoundary({ error }: { error: Error }) {
  console.error("*** ERROR ***", error);
  return (
    <html lang="en">
      <head>
        <title>Oh no!</title>
        <Meta />
        <Links />
      </head>
      <body className="w-full bg-grey text-center">
        <Header />
        <div className="my-10 flex h-1/2 w-full flex-col items-center justify-center px-10 text-brown">
          <h1>Error</h1>
          <em>{error.message}</em>
          <p>The stack trace is:</p>
          <pre>{error.stack}</pre>
        </div>
        <Scripts />
      </body>
    </html>
  );
}
