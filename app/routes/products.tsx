import { Outlet } from "@remix-run/react";
import Footer from "~/components/footer";
import Header from "~/components/header";

export default function Products() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}
