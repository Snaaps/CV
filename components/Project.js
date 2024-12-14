import React from 'react';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';

const ProjectContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background: #ecf0f1;
  border-radius: 8px;
  border: 1px solid #bdc3c7;
`;

const TitledText = styled.h2`
  color: #6f2cf7;
`;

const ProjectGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(60vw, 1fr));
  gap: 20px;
  width: 100%;
  margin-top: 20px;
`;

const ProjectCard = styled.div`
  background: #fff;
  border: 1px solid #bdc3c7;
  border-radius: 8px;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  display: flex;
  flex-direction: column;
`;

const ProjectIframe = styled.iframe`
  width: 100%;
  height: 500px;
  border: none;
`;

const ProjectContent = styled.div`
  padding: 15px;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;

const ProjectTitle = styled.h3`
  color: #6f2cf7;
  margin-bottom: 10px;
`;

const ProjectDescription = styled.p`
  flex-grow: 1;
`;

const ProjectLink = styled.a`
  margin-top: 15px;
  padding: 10px;
  background-color: #3498db;
  color: white;
  text-align: center;
  border-radius: 4px;
  text-decoration: none;

  &:hover {
    background-color: #2980b9;
  }
`;

const Project = () => {
  const { t } = useTranslation();
  
  // Liste de projets pour l'exemple
  const projects = [
    {
      title: 'project1.title',
      description: 'project1.description',
      previewUrl: 'http://snaaps.duckdns.org:19006/',
      link: 'http://snaaps.duckdns.org:19006/',
    },
    {
      title: 'project2.title',
      description: 'project2.description',
      previewUrl: 'https://www.chateaudevins.fr/',
      link: 'https://www.chateaudevins.fr/',
    },
    {
        title: 'project3.title',
        description: 'project3.description',
        previewUrl: 'https://www.lechappeedesplaisirs.fr/',
        link: 'https://www.lechappeedesplaisirs.fr/',
      },
      {
        title: 'project4.title',
        description: 'project4.description',
        previewUrl: 'http://snaaps.duckdns.org:8082/',
        link: 'http://snaaps.duckdns.org:8082/',

      },
      {
        title: 'project5.title',
        description: 'project5.description',
        previewUrl: 'https://www.dalhae-academie.com/',
        link: 'https://www.dalhae-academie.com/',

      },
      {
        title: 'project6.title',
        description: 'project6.description',
        previewUrl: 'https://www.prismgangproject.com/',
        link: 'https://www.prismgangproject.com/',

      }
    // Ajoutez plus de projets si nécessaire
  ];
  
  return (
    <ProjectContainer>
      <TitledText>{t('project.title2')}</TitledText>
      <ProjectGrid>
        {projects.map((project, index) => (
          <ProjectCard key={index}>
            <ProjectIframe src={project.previewUrl} title={t(project.title)} />
            <ProjectContent>
              <ProjectTitle>{t(project.title)}</ProjectTitle>
              <ProjectDescription>{t(project.description)}</ProjectDescription>
              <ProjectLink href={project.link} target="_blank" rel="noopener noreferrer">
                {t('project.view')}
              </ProjectLink>
            </ProjectContent>
          </ProjectCard>
        ))}
      </ProjectGrid>
    </ProjectContainer>
  );
};

export default Project;
