import { Link } from "@remix-run/react";
import oneOunceBottle from "~/assets/images/alchemical-tinctures-1fl-oz-8x10.jpg";
// import oneOunceBottle from "~/assets/images/alchemical-tinctures-1fl-oz.png";

export default function TurkeyTails() {
  return (
    <div className="w-full h-1/2 px-10 flex flex-col justify-center items-center">
      <p className="w-full my-6 text-brown">
        Turkey Tail <em>(trametes versicolor)</em> is one of the most-studied
        beneficial mushrooms. It invigorates immune cells while simultaneously
        making sure the immune response doesn’t overreact. As a prebiotic food
        for our probiotic microflora, it has also shown to improve the gut
        microbiome.
      </p>
      <div className="w-full flex flex-col lg:flex-row md:px-28 justify-around items-center">
        <div className="w-full flex flex-col">
          <img
            className="rounded-3xl self-center"
            src={oneOunceBottle}
            alt="1 ounce bottle"
            width={300}
          />
          <p className="my-4 text-blue text-sm text-center">
            * This tincture is made with love so that it may assist you on your
            healing journey *
          </p>
        </div>
        <div className="self-center lg:self-start">
          <h2 className="mt-6 text-blue">MICROBIOME & IMMUNE SUPPORT:</h2>
          <ul className="text-blue list-disc">
            <li>Supports beneficial microflora in the gut microbiome.</li>
            <li>Promotes digestive and gastrointestinal health.</li>
            <li>Supports an engaged and balanced immune response.</li>
          </ul>
          <div className="mt-10 text-brown">
            <p>1fl oz = $20</p>
            <p>2fl oz = $35</p>
            <p className="mt-4 md:mt-2 text-blue text-sm">
              Sold locally ( Web sales not currently setup ):{" "}
              <a
                className="text-blueHover hover:text-blueHover lg:text-blue"
                href="mailto:info@alchemicaltinctures.com?subject=Mailed from alchemicaltinctures.com"
              >
                info@alchemicaltinctures.com
              </a>
            </p>
          </div>
        </div>
      </div>
      <div>
        <p className="mt-6 text-brown">
          This tincture is created from wild foraged fruiting bodies of trametes
          versicolor and created using the double extraction process that
          involves a 6 week alcohol maceration in 100 proof "gluten free" vodka
          followed by an 8 hour hot water decoction using spring water for
          optimal extraction of both alcohol and water soluble constituents.
        </p>
        <p className="mt-6 text-brown">
          During the maceration process, each jar sits atop speakers playing
          various
          <a
            className="hover:text-brownHover text-brownHover lg:text-brown"
            href="https://meditativemind.org/benefits-of-music-based-on-7-solfeggio-frequencies/"
            target="_blank"
            rel="norel noreferrer"
          >
            {" "}
            “solfeggio frequencies”{" "}
          </a>
          based on the scientific research by
          <a
            className="hover:text-brownHover text-brownHover lg:text-brown"
            href="https://thewellnessenterprise.com/emoto/"
            target="_blank"
            rel="norel noreferrer"
          >
            {" "}
            Dr. Masaru Emoto’s theories on “Water Consciousness.”{" "}
          </a>
        </p>

        <p className="mt-6 text-center text-brown text-sm">
          Learn more about the benefits of
          <Link
            className="hover:text-brownHover text-brownHover lg:text-brown"
            to="/learn/turkey-tails"
          >
            {" "}
            Turkey Tails
          </Link>
        </p>
      </div>
    </div>
  );
}
