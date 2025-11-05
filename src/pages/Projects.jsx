import Navbar from '../components/Navbar';
import ProjectSection from '../components/ProjectSection';
import Footer from '../components/Footer';
import PageTransition from '../components/PageTransition';

const Projects = () => {
  return (
    <PageTransition>
      <Navbar />
      <ProjectSection showArrow={true} />
      <Footer />
    </PageTransition>
  );
};

export default Projects;
