// src/components/ProjectsSection.jsx
import { useNavigate } from 'react-router-dom';

const ProjectSection = ({ showArrow = true }) => {
  const navigate = useNavigate();

  const projects = [
    {
      title: 'Overload Coffe',
      image: './assets/project-1.jpeg',
      githubUrl: 'https://github.com/',
      demoUrl: 'https://github.com/',
    },
    {
      title: 'ACU Kriptografi',
      image: './assets/project-2.png',
      githubUrl: 'https://github.com/Rezkydesyafa/ACU-KRIPTOGRAFI-WEBAPP',
      demoUrl: 'https://acu-webapp.vercel.app/',
    },
    {
      title: 'Webserve',
      image: './assets/project-3.png',
      githubUrl: 'https://github.com/',
      demoUrl: 'https://github.com/',
    },
    {
      title: 'Yourtodo',
      image: './assets/project-4.png',
      githubUrl: 'https://github.com/',
      demoUrl: 'https://yourtodo-six.vercel.app/',
    },
  ];

  return (
    <section id='projects'>
      <p className='section__text__p1'>Browse My Recent</p>
      <h1 className='title'>Projects</h1>
      <div className='experience-details-container'>
        <div className='about-containers'>
          {projects.map((project, index) => (
            <div key={index} className='project-container color-container'>
              <div className='article-container'>
                <img
                  src={project.image}
                  alt={`Project ${index + 1}`}
                  className='project-img'
                />
              </div>
              <h2 className='experience-sub-title project-title'>
                {project.title}
              </h2>
              <div className='btn-container'>
                <button
                  className='btn btn-color-2 project-btn'
                  onClick={() => (window.location.href = project.githubUrl)}
                >
                  Github
                </button>
                <button
                  className='btn btn-color-2 project-btn'
                  onClick={() => (window.location.href = project.demoUrl)}
                >
                  Live Demo
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {showArrow && (
        <i
          className='fa-solid fa-angles-down arrow'
          onClick={() => navigate('/contact')}
        ></i>
      )}
    </section>
  );
};

export default ProjectSection;
