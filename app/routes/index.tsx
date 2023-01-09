import Header from "~/components/header";
import Footer from "~/components/footer";

export default function Index() {
  return (
    <div className="grid grid-rows-[200px_minmax(900px,_1fr)_100px]">
      <Header />
      <div className="w-full mt-10 px-10 flex flex-col justify-start">
        <p className=" text-brown">
          I call these “small batch” because this is a fun hobby of mine and the
          purpose was to get enough to boost up my immune system and gut health.
          From my first batch, I had extra which I gifted to some friends. Those
          friends reached back out later inquiring about more for themselves and
          some for their friends, which prompted me to design and create labels
          and that’s how “Alchemical Tinctures” was started. This is still a
          side project/hobby to stay healthy and keep my friends and whomever
          purchases a bottle on the healing path. When I run out, I run out,
          until it's season and I have time to forage more.
        </p>
      </div>
      <Footer />
    </div>
  );
}
