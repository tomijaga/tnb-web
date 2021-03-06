import React, {FC} from 'react';

import {DocContainer, DocImage} from 'components';

import RoadmapMilestoneOverview from './RoadmapMilestoneOverview.png';
import './ProjectsOverview.scss';

const ProjectsOverview: FC = () => {
  return (
    <DocContainer className="ProjectsOverview" title="Overview">
      <p>
        Contributors can earn coins by working on apps, games, tools, and other software for thenewboston network. To
        receive funding, project proposals will be submitted to thenewboston team who will review the details of the
        proposal to ensure that all rules and guidelines are met. Once approved, coins will be rewarded as milestones
        are completed throughout the development process.
      </p>
      <p>
        These projects will improve our network through the continuous creation of new apps, games, and tools while also
        allowing for a more widespread distribution of coins to many contributors.
      </p>

      <h2>What You Will Be Responsible For</h2>
      <p>As project manager, you will be responsible for the following.</p>
      <ul>
        <li>Guiding the success of the project</li>
        <li>Building your team (we can help with recruiting)</li>
        <li>Managing all aspects of the project including planning, design, development, etc...</li>
        <li>Meeting objectives according to your submitted roadmap milestones</li>
        <li>Maintaining an active and happy team</li>
      </ul>

      <h2>Roadmap, Milestones, and Objectives</h2>
      <DocImage alt="roadmap diagram" maxWidth={680} src={RoadmapMilestoneOverview} />
    </DocContainer>
  );
};

export default ProjectsOverview;
