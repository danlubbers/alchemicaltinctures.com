import turkeyTails from "~/assets/images/turkey-tails-rrg-1.jpg";

export default function TurkeyTails() {
  return (
    <div className="my-10 flex h-1/2 w-full flex-col items-center justify-center px-10 text-brown">
      <h1 className="text-brown">Benefits of Turkey Tails</h1>
      <img
        className="m-4 self-center rounded-lg"
        src={turkeyTails}
        alt="snail eating mushroom"
        width={300}
      />
      <div className="mt-4 text-blue">
        <h3>
          An article on{" "}
          <a
            className="text-blueHover lg:text-blue"
            href="https://www.healthline.com/nutrition/turkey-tail-mushroom#TOC_TITLE_HDR_6"
            target="_blank"
            rel="no noreferrer"
          >
            Healthline
          </a>{" "}
          states:
        </h3>
        <p>
          Turkey tail are packed with antioxidants which are compounds that help
          inhibit or reduce damage caused by oxidative stress. Oxidative stress
          results from an imbalance between antioxidants and unstable molecules
          known as free radicals. This can result in cellular damage and chronic
          inflammation. Turkey tail contains an impressive array of
          antioxidants, including phenols and flavonoids. Research has
          demonstrated that turkey tail mushrooms may have antitumor properties,
          thought to be related to its immune-boosting effects. One test-tube
          study found that PSK, the polysaccharopeptide found in turkey tail
          mushrooms, inhibited the growth and spread of human colon cancer
          cells. What’s more, a certain type of polysaccharide found in turkey
          tail mushrooms called Coriolus versicolor glucan (CVG) may suppress
          certain tumors. A review of 13 studies found that patients given 1–3.6
          grams of turkey tail mushroom per day along with conventional
          treatment had a significant survival advantage. Turkey tail contains
          prebiotics, which help nourish these helpful bacteria. An 8-week study
          in 24 healthy people found that consuming 3,600 mg of PSP extracted
          from turkey tail mushrooms per day led to beneficial changes in gut
          bacteria and suppressed the growth of the possibly problematic E. coli
          and Shigella bacteria.
        </p>
      </div>
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
              Phenol and flavonoid antioxidants promote immune system health by
              reducing inflammation and stimulating the release of protective
              compounds
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
