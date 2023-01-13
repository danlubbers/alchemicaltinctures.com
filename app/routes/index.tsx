import waterfallProducts from "~/assets/images/alchemical-tinctures-upper-falls.jpg";
import snailFungi from "~/assets/images/snail-eating-mushroom.jpg";
import turkeyTails from "~/assets/images/turkey-tails-rrg.jpg";
import mossBottle from "~/assets/images/alchemical-tinctures-moss-1fl-oz.jpg";

export default function Index() {
  return (
    <div className="w-full mt-10 px-10 flex flex-col justify-start">
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
        className="mt-8 rounded-lg self-center"
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
      <div className="w-full mt-8 grid grid-cols-1 md:grid-cols-2  gap-x-4 gap-y-8 justify-items-center align-items-center">
        <img
          className="rounded-lg self-center"
          src={snailFungi}
          alt="snail eating mushroom"
        />
        <img
          className="rounded-lg self-center"
          src={turkeyTails}
          alt="snail eating mushroom"
        />
      </div>
      <p className="mt-8 text-center text-blue text-sm">
        "Life is too short not to create something with every breath we draw" ~
        Maynard James Keenan
      </p>
    </div>
  );
}
