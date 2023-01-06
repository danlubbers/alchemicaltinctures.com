import logo from "~/assets/logo/alchemical-tinctures-logo.svg";

export default function Index() {
  return (
    <div className="w-full h-1/2 mt-10 md:mt-40 px-10 flex flex-col justify-center items-center">
      <img src={logo} alt="alchemical tinctures" width="350" />
      <h1 className="mt-6 text-blue">
        Small batch locally sourced Turkey Tails.
      </h1>
      <p className="mt-6 text-brown">
        I call these “small batch” because this is a fun hobby of mine and the
        purpose was to get enough to boost up my immune system and gut health.
        From my first batch, I had extra which I gifted to some friends. Those
        friends reached back out later inquiring about more for themselves and
        some for their friends, which prompted me to design and create labels
        and that’s how “Alchemical Tinctures” was started. This is still a side
        project hobby to stay healthy and keep my friends and whomever purchases
        a bottle healthy. When I run out, I run out, until it's season and I
        have time to forage more.
      </p>
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
    </div>
  );
}
