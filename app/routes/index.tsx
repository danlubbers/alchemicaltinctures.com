import waterfallProducts from "~/assets/images/alchemical-tinctures-upper-falls.jpg";
import turkeyTailsSoundbath from "~/assets/images/turkey-tails-soundbath.jpg";
import snailFungi from "~/assets/images/snail-eating-mushroom.jpg";
import turkeyTails from "~/assets/images/turkey-tails-rrg.jpg";
import mossBottle from "~/assets/images/alchemical-tinctures-moss-1fl-oz.jpg";
import { Link } from "@remix-run/react";

export default function Index() {
  return (
    <div className="mt-10 flex w-full flex-col justify-start px-10">
      <div className="mb-8 flex w-full flex-col items-center text-brown">
        <h1>Coming soon...</h1>
        <Link
          className="text-brownHover hover:text-brownHover lg:text-brown"
          to="/products/turkey-tails"
        >
          <h2>Special Batch: Clermont, KY</h2>
        </Link>
        <p className="mt-4">
          Why is this a special batch you ask? Not only did this batch soak up
          the normal solfeggio frequencies I expose all of the tinctures too.
          This batch at the end of the maceration process received and soaked up
          the healing sounds of Gabriella Gaona and{" "}
          <a
            className="text-brownHover hover:text-brownHover lg:text-brown"
            href="https://thomasorranderson.com/"
            target="_blank"
            rel="norel nopener noreferrer"
          >
            Thomas Orr Anderson
          </a>{" "}
          at{" "}
          <a
            className="text-brownHover hover:text-brownHover lg:text-brown"
            href="https://theinnerwarriorlou.com"
            target="_blank"
            rel="norel nopener noreferrer"
          >
            The Inner Warrior Studio
          </a>{" "}
          during an hour and a half <em>Full Moon Sound Journey</em> on February
          5, 2023. Various instruments included: crystal and Himalayan singing
          bowls, flute, gong, didge, tuning fork, chimes, and more.{" "}
        </p>
        <img
          className="mt-8 self-center rounded-lg"
          src={turkeyTailsSoundbath}
          alt="Turkey Tails soaking in the healing sounds during a healing sound journey at The Inner Warrior Louisville, KY"
        />
      </div>

      <p className="text-brown">
        I call these “small batch” because this is a fun hobby of mine and the
        purpose was to get enough to boost up my immune system and gut health.
        From my first batch, I had extra which I gifted to some friends. Those
        friends reached back out later inquiring about more for themselves and
        some for their friends, which prompted me to design and create labels
        and that’s how “Alchemical Tinctures” was started. This is still a side
        project/hobby to stay healthy and keep my friends and whomever purchases
        a bottle on the healing path. When I run out, I run out, until it's
        season and I have time to forage more. Each batch shows the general
        location where they were harvested as well as the Alchemy Date.
      </p>
      <img
        className="mt-8 self-center rounded-lg"
        src={mossBottle}
        alt="Alchemical Tinctures bottles beneath Waterfall"
      />
      <p className="mt-6 text-brown">
        All of the fungi / mushrooms / plants foraged are away from major
        interstates, roads or highways and found in dense forested areas where
        the climate is thriving. I never harvest more than 50% of what is found
        on any given particular area so that the ecosystem can thrive and be
        sustainable. More often than not, I am leaving what I find in the
        forest. A few times I’ve found fresh fungi with little slugs,
        caterpillars, etc on them and I will always leave those behind. I love
        seeing them munch on fungi. I put all that are collected in a netted bag
        and it’s tied to the outside of my pack so the spores disperse as I
        continue to hike around.
      </p>
      <div className="align-items-center mt-8 grid w-full grid-cols-1  justify-items-center gap-x-4 gap-y-8 md:grid-cols-2">
        <img
          className="self-center rounded-lg"
          src={snailFungi}
          alt="snail eating mushroom"
        />
        <img
          className="self-center rounded-lg"
          src={turkeyTails}
          alt="snail eating mushroom"
        />
      </div>
      <p className="mt-8 text-center text-sm text-blue">
        "Life is too short not to create something with every breath we draw" ~
        Maynard James Keenan
      </p>
    </div>
  );
}
