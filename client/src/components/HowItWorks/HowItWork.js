import React from 'react';
import HowDoesSquadhelpWork from './HowDoesSquadhelpWork/HowDoesSquadhelpWork';
import ThreeWaysToUseSquadHelp from './ThreeWaysToUseSquadHelp/ThreeWaysToUseSquadHelp';
import HowDoNamingContestWork from './HowDoNamingContestWork/HowDoNamingContestWork';

const HowItWork = props => {
  return (
    <div>
      <HowDoesSquadhelpWork/>
      <ThreeWaysToUseSquadHelp/>
      <HowDoNamingContestWork/>
    </div>
  );
}

export default HowItWork;
