import { Link } from "@remix-run/react";
import oneOunceBottle from "~/assets/images/alchemical-tinctures-1fl-oz.png";

export default function TurkeyTails() {
  return (
    <div className="w-full h-1/2 px-10 flex flex-col justify-center items-center">
      <p className="mt-6 text-brown">
        Turkey Tail is one of the most-studied beneficial mushrooms. It
        invigorates immune cells while simultaneously making sure the immune
        response doesn’t overreact. As a prebiotic food for our probiotic
        microflora, it has also shown to improve the gut microbiome.
      </p>
      <div className="w-full flex px-0 md:px-28 justify-around items-center">
        <img src={oneOunceBottle} alt="1 ounce bottle" width={150} />
        <ul className="mt-6 text-blue list-disc">
          <h2>MICROBIOME & IMMUNE SUPPORT:</h2>
          <li>Supports beneficial microflora in the gut microbiome.</li>
          <li>Promotes digestive and gastrointestinal health.</li>
          <li>Supports an engaged and balanced immune response.</li>
        </ul>
      </div>

      <p className="mt-6 text-brown">
        All of the Turkey Tails foraged are away from major interstates, roads
        or highways and found in dense forested areas where the climate is
        thriving. Only the fresh Turkey Tails are taken with white bottoms and I
        never harvest more than 50% of what is found on any given particular
        tree so that the ecosystem can thrive and be sustainable. More often
        than not, I am leaving what I find in the forest. A few times I’ve found
        fresh fungi with little slugs, caterpillars, etc on them and I will
        always leave those behind. I love seeing them munch on fungi. I put all
        that are collected in a netted bag and it’s tied to the outside of my
        pack so the spores disperse as I continue to hike around.
      </p>
      <p className="mt-6 text-brown">
        All of our tinctures are created from fruiting bodies / aerial flower
        parts using the double extraction process that involves a 6 week alcohol
        maceration in 100 proof "gluten free" vodka followed by an 8 hour hot
        water decoction using spring water for optimal extraction of both
        alcohol and water soluble constituents.
      </p>
      <p className="mt-6 text-brown">
        During the maceration process, each jar sits atop speakers playing
        various
        <a
          className="hover:text-brownHover text-brownHover md:text-brown"
          href="https://meditativemind.org/benefits-of-music-based-on-7-solfeggio-frequencies/"
          target="_blank"
          rel="norel noreferrer"
        >
          {" "}
          “solfeggio frequencies”{" "}
        </a>
        based on the scientific research by
        <a
          className="hover:text-brownHover text-brownHover md:text-brown"
          href="https://thewellnessenterprise.com/emoto/"
          target="_blank"
          rel="norel noreferrer"
        >
          {" "}
          Dr. Masaru Emoto’s theories on “Water Consciousness.”{" "}
        </a>
      </p>
      <p className="my-4 text-blue text-sm">
        This tincture is made with love so that it may assist you on your
        healing journey.
      </p>

      <p className="text-brown text-sm">
        Learn more about the benefits of Turkey Tails{" "}
        <Link
          className="hover:text-brownHover text-brownHover md:text-brown"
          to="/learn/turkey-tails"
        >
          here
        </Link>
      </p>
    </div>
  );
}
