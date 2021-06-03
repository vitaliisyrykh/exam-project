import React from 'react';
import HowDoesSquadhelpWork from './HowDoesSquadhelpWork/HowDoesSquadhelpWork';
import ThreeWaysToUseSquadHelp from './ThreeWaysToUseSquadHelp/ThreeWaysToUseSquadHelp';
import HowDoNamingContestWork from './HowDoNamingContestWork/HowDoNamingContestWork';
import ReadyToGetStarted from './ReadyToGetStarted/ReadyToGetStarted';

const HowItWork = props => {
  return (
    <div>
      <HowDoesSquadhelpWork/>
      <ThreeWaysToUseSquadHelp/>
      <HowDoNamingContestWork/>
      <ReadyToGetStarted/>
    </div>
  );
}

export default HowItWork;
