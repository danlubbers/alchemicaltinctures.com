import { Link } from "@remix-run/react";
import oneOunceBottle from "~/assets/images/alchemical-tinctures-1fl-oz-8x10.jpg";
// import oneOunceBottle from "~/assets/images/alchemical-tinctures-1fl-oz.png";

export default function TurkeyTails() {
  return (
    <div className="my-10 flex h-1/2 w-full flex-col items-center justify-center px-10">
      <h1 className="text-brown">Turkey Tail Tuncture</h1>
      <p className="my-6 w-full text-brown">
        Turkey Tail <em>(trametes versicolor)</em> is one of the most-studied
        beneficial mushrooms. It invigorates immune cells while simultaneously
        making sure the immune response doesn’t overreact. As a prebiotic food
        for our probiotic microflora, it has also shown to improve the gut
        microbiome.
      </p>
      <div className="flex w-full flex-col md:px-10 lg:flex-row">
        <div className="flex w-full flex-col pr-0 lg:pr-6">
          <img
            className="self-center rounded-3xl"
            src={oneOunceBottle}
            alt="1 ounce bottle"
            width={300}
          />
          <p className="my-4 text-center text-sm text-blue">
            * This tincture is made with love so that it may assist you on your
            healing journey *
          </p>
        </div>
        <div className="self-center lg:self-start">
          <h4 className="text mt-6 text-blue lg:mt-0">
            MICROBIOME & IMMUNE SUPPORT:
          </h4>
          <ul className="list-disc text-blue">
            <li>Supports beneficial microflora in the gut microbiome.</li>
            <li>Promotes digestive and gastrointestinal health.</li>
            <li>Supports an engaged and balanced immune response.</li>
          </ul>
          <p className="mt-4 text-center text-xs text-brown">
            <Link
              className="text-brownHover hover:text-brownHover lg:text-brown"
              to="/learn/turkey-tails"
            >
              * Learn more about the benefits of Turkey Tails *
            </Link>
          </p>
        </div>
      </div>
      <div className="my-4 flex w-full flex-col items-center md:flex-row  md:justify-around">
        <div className="my-4 w-full rounded-xl p-4 text-blue outline outline-1 sm:w-2/3 md:w-1/3">
          <h5 className="text-center">*SOLD OUT*</h5>
          <p className="my-2 text-sm">
            Location: <span className="text-brown">Red River Gorge, KY</span>
          </p>
          <p className="my-2 text-sm">
            Alchemy Date: <span className="text-brown">10-28-2022</span>
          </p>
          <div className="flex justify-around text-brown">
            <p>1fl oz = $20</p>
            <p>2fl oz = $35</p>
          </div>
        </div>
        <div className="my-4 w-full rounded-xl p-4 text-blue outline outline-1 sm:w-2/3 md:w-1/3">
          <h5 className="text-center">Currently being sold</h5>
          <p className="my-2 text-sm">
            Location:{" "}
            <span className="text-brown">Hoosier National Forest, IN</span>
          </p>
          <p className="my-2 text-sm">
            Alchemy Date: <span className="text-brown">12-5-2022</span>
          </p>
          <div className="flex justify-around text-brown">
            <p>1fl oz = $20</p>
            <p>2fl oz = $35</p>
          </div>
        </div>
      </div>
      <div className="text-brown">
        <p className="mt-4 text-center text-sm text-blue md:mt-2">
          Sold locally ( Web sales not currently setup ):{" "}
          <a
            className="text-blueHover lg:text-blue"
            href="mailto:info@alchemicaltinctures.com?subject=Mailed from alchemicaltinctures.com"
          >
            info@alchemicaltinctures.com
          </a>
        </p>
      </div>
      <div>
        <p className="mt-6 text-brown">
          This tincture is created from wild foraged fruiting bodies of{" "}
          <em>trametes versicolor</em> and created using the double extraction
          process that involves a 6 week alcohol maceration in 100 proof "gluten
          free" vodka followed by an 8 hour hot water decoction using spring
          water for optimal extraction of both alcohol and water soluble
          constituents.
        </p>
        <p className="mt-6 text-brown">
          During the maceration process, each jar sits atop speakers playing
          various
          <a
            className="text-brownHover hover:text-brownHover lg:text-brown"
            href="https://meditativemind.org/benefits-of-music-based-on-7-solfeggio-frequencies/"
            target="_blank"
            rel="norel noreferrer"
          >
            {" "}
            “solfeggio frequencies”{" "}
          </a>
          based on the scientific research by
          <a
            className="text-brownHover hover:text-brownHover lg:text-brown"
            href="https://thewellnessenterprise.com/emoto/"
            target="_blank"
            rel="norel noreferrer"
          >
            {" "}
            Dr. Masaru Emoto’s theories on “Water Consciousness.”{" "}
          </a>
        </p>
      </div>
    </div>
  );
}
