import type { NextPage } from "next";

import { SectionHero } from "../components/sections/Section-hero";
import { SectionMoments } from "../components/sections/Section-moments";
import { SectionActivities } from "../components/sections/Section-activities";

const Home: NextPage = () => {
  return (
    <>
      <SectionHero />
      <SectionMoments />
      <SectionActivities />
    </>
  );
};

export default Home;
