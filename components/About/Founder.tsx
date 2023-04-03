import { IFounder } from 'types';

import FounderCard from './FounderCard';

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

export default function Founder() {
  return (
    <section className="bg-carbon-white text-carbon-bronze text-left">
      <div className="flex items-center gap-x-24 max-w-2xl lg:max-w-6xl mx-auto p-6">
        <div className="basis-1/2 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-12 py-24">
          {founders.map((founder, index) => {
            return index % 2 ? (
              <FounderCard name={founder.name} role={founder.role} />
            ) : (
              <FounderCard name={founder.name} role={founder.role} />
            );
          })}
        </div>
        <div className="basis-1/2">
          <p className="text-xl">About Us</p>
          <h1 className="text-4xl lg:text-6xl font-display w-min">Our Team</h1>
          <p className="my-6 text-xl">
            We are a team of six computer science majors studying at Stevens
            Institute of Technology.
          </p>
          <p className="text-xl">
            Carbon Voyage began as a project for our Senior Design Project, a
            capstone project presented upon graduation.
          </p>
        </div>
      </div>
    </section>
  );
}
