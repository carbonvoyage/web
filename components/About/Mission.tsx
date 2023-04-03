export default function Mission() {
  return (
    <section className="mx-auto text-carbon-bronze text-left max-w-2xl lg:max-w-6xl p-6">
      <div className="flex items-center space-y-10">
        <div className="basis-1/2">
          <p className="text-xl">About Us</p>
          <h1 className="text-4xl lg:text-6xl font-display w-min">
            Our Mission
          </h1>
        </div>

        <div className="basis-1/2 text-xl py-6">
          <p className="mb-6">
            We set out to create a post-user-checkout pop-up that calculates the
            carbon footprint of an Amazon order and then prompts the user to
            donate that amount to offset its impact.
          </p>
          <p className="my-6">
            This donation will be sent directly to a charity (likely user picked
            from a list of carbon offset charities). The calculation will be
            derived based on the distance from the Amazon warehouse to the
            destination, the medium for transportation, and the weight of the
            delivery.
          </p>
        </div>
      </div>
    </section>
  );
}
