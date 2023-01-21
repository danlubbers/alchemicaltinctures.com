// import turkeyTails from "~/assets/images/turkey-tails-rrg-1.jpg";

export default function TurkeyTails() {
  return (
    <div className="my-10 flex h-1/2 w-full flex-col items-center justify-center px-10 text-brown">
      <h1 className="text-brown">Benefits of Turkey Tails</h1>
      {/* <img
        className="m-4 rounded-lg self-center"
        src={turkeyTails}
        alt="snail eating mushroom"
        width={300}
      /> */}
      <div className="mt-8">
        <ul className="my-4  list-disc  text-blue">
          <li className="my-4">
            <b>Polysaccharides:</b>
            <p className="text-brown">
              These are known as immunomodulators due to their ability to
              regulate a balanced immune system. These include the beta-glucans:{" "}
              <a
                className="text-brownHover hover:text-brownHover lg:text-brown"
                href="https://www.sciencedirect.com/topics/biochemistry-genetics-and-molecular-biology/polysaccharide-peptide"
                target="_blank"
                rel="norel nopener noreferrer"
              >
                PSP ( <em>Polysaccharide peptide</em>) & PSK ({" "}
                <em>Polysaccharide-K or krestin</em>)
              </a>
              <p className="text-brown">
                <a
                  className="text-brownHover hover:text-brownHover lg:text-brown"
                  href="https://www.mdpi.com/2077-0472/2/4/452"
                  target="_blank"
                  rel="norel nopener noreferrer"
                >
                  “Polysaccharides from mushrooms showing a β-linkage have
                  demonstrated a boost in the human immune system and the
                  modulation of the immunological response under certain
                  circumstances, thus they are commonly termed biological
                  response modifiers (BRM).”
                </a>
              </p>
            </p>
          </li>
          <li className="my-4">
            <b>Triterpenes:</b>
            <p className="text-brown">A precursor to natural steroids.</p>
          </li>
          <li className="my-4">
            <b>Sterols:</b>
            <p className="text-brown">
              A hormone precursor that includes ergosterol and fungisterol.
              Ergosterol is converted to Vitamin D2 when exposed to sunlight.
            </p>
          </li>
          <li className="my-4">
            <b>Polyphenols:</b>
            <p className="text-brown">
              Flavinoids that are produced in response to environmental
              stressors and associated with positive benefits when consumed
            </p>
          </li>
          <li className="my-4">
            <b>Vitamins & Minerals:</b>
            <p className="text-brown">Selenium, Vitamin B3 and Vitamin D</p>
          </li>
        </ul>
      </div>
    </div>
  );
}
