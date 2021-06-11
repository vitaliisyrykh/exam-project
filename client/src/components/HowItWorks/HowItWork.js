import React from 'react';
import HowDoesSquadhelpWork from './HowDoesSquadhelpWork/HowDoesSquadhelpWork';
import ThreeWaysToUseSquadHelp from './ThreeWaysToUseSquadHelp/ThreeWaysToUseSquadHelp';
import HowDoNamingContestWork from './HowDoNamingContestWork/HowDoNamingContestWork';
import ReadyToGetStarted from './ReadyToGetStarted/ReadyToGetStarted';
import DiscriptionAndQuastions from './DiscriptionAndQuastions/DiscriptionAndQuastions';
import FeaturedIn from './FeaturedIn/FeaturedIn';

const HowItWork = props => {
  return (
    <div>
      <HowDoesSquadhelpWork/>
      <ThreeWaysToUseSquadHelp/>
      <HowDoNamingContestWork/>
      <ReadyToGetStarted/>
      <DiscriptionAndQuastions/>
      <FeaturedIn/>
    </div>
  );
}

export default HowItWork;
