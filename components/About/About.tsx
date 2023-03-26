import { IFounder } from 'types';

import Founder from './Founder';

const founders: IFounder[] = [
  {
    name: 'Ari Birnbaum',
    role: 'Frontend Developer'
  },
  {
    name: 'Connor Haaf',
    role: 'Backend Developer'
  },
  {
    name: 'Kevin Ha',
    role: 'Frontend Developer'
  },
  {
    name: 'Venkat Anna',
    role: 'Backend Developer'
  },
  {
    name: 'Aughdon Breslin',
    role: 'Backend Developer'
  },
  {
    name: 'Harshdeep Aujla',
    role: 'Project Manager'
  }
];

export default function About() {
  return (
    <section className="mx-auto text-carbon-bronze text-center max-w-2xl lg:max-w-4xl p-6 lg:my-8">
      <h1 className="text-4xl lg:text-5xl font-display">About Us</h1>
      <div className="text-xl p-6">
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

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-x-4 gap-y-8">
        {founders.map((founder) => {
          return <Founder name={founder.name} role={founder.role} />;
        })}
      </div>
    </section>
  );
}
