import { useNavigate } from 'react-router-dom';

const ExperienceSection = ({ showArrow = true }) => {
  const navigate = useNavigate();

  const frontendSkills = [
    { name: 'HTML& CSS', level: 'Experienced' },
    { name: 'TailwindCSS', level: 'Experienced' },
    { name: 'React', level: 'Experienced' },
    { name: 'JavaScript', level: 'Experienced' },
    { name: 'TypeScript', level: 'Basic' },
    { name: 'Figma', level: 'Experienced' },
  ];

  const backendSkills = [
    { name: 'PostgreSQL', level: 'Basic' },
    { name: 'Node JS', level: 'Intermediate' },
    { name: 'Express JS', level: 'Intermediate' },
    { name: 'Git', level: 'Intermediate' },
  ];

  return (
    <section id='experience'>
      <p className='section__text__p1'>Explore My</p>
      <h1 className='title'>Experience</h1>
      <div className='experience-details-container'>
        <div className='about-containers'>
          {/* Frontend Development */}
          <div className='details-container'>
            <h2 className='experience-sub-title'>Frontend Development</h2>
            <div className='article-container'>
              {frontendSkills.map((skill, index) => (
                <article key={index}>
                  <i className='fas fa-check-circle experience-icon'></i>
                  <div>
                    <h3>{skill.name}</h3>
                    <p>{skill.level}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>

          {/* Backend Development */}
          <div className='details-container'>
            <h2 className='experience-sub-title'>Backend Development</h2>
            <div className='article-container'>
              {backendSkills.map((skill, index) => (
                <article key={index}>
                  <i className='fas fa-check-circle experience-icon'></i>
                  <div>
                    <h3>{skill.name}</h3>
                    <p>{skill.level}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>

      {showArrow && (
        <i
          className='fa-solid fa-angles-down arrow'
          onClick={() => navigate('/projects')}
        ></i>
      )}
    </section>
  );
};

export default ExperienceSection;
