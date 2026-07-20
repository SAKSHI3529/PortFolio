import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { projects } from '../data/projects';
import ProjectHero from '../components/Project/ProjectHero';
import ProjectOverview from '../components/Project/ProjectOverview';
import ProjectProblem from '../components/Project/ProjectProblem';
import ProjectSolution from '../components/Project/ProjectSolution';
import ProjectFeatures from '../components/Project/ProjectFeatures';
import ProjectResponsibilities from '../components/Project/ProjectResponsibilities';
import ProjectArchitecture from '../components/Project/ProjectArchitecture';
import ProjectTechStack from '../components/Project/ProjectTechStack';
import ProjectChallenges from '../components/Project/ProjectChallenges';
import ProjectOutcome from '../components/Project/ProjectOutcome';
import ProjectGallery from '../components/Project/ProjectGallery';
import ProjectNavigation from '../components/Project/ProjectNavigation';

const ProjectDetails = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  
  const project = projects.find(p => p.slug === slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-4">Project Not Found</h2>
          <button onClick={() => navigate('/')} className="px-6 py-3 bg-accent text-white rounded-full">
            Return Home
          </button>
        </div>
      </div>
    );
  }

  return (
    <article className="min-h-screen bg-light dark:bg-charcoal pt-16">
      <ProjectHero project={project} />
      <ProjectOverview project={project} />
      <ProjectProblem project={project} />
      <ProjectSolution project={project} />
      <ProjectFeatures project={project} />
      <ProjectResponsibilities project={project} />
      <ProjectArchitecture project={project} />
      <ProjectTechStack project={project} />
      <ProjectChallenges project={project} />
      <ProjectOutcome project={project} />
      <ProjectGallery project={project} />
      <ProjectNavigation project={project} />
    </article>
  );
};

export default ProjectDetails;
