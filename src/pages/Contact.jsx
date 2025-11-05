import Navbar from '../components/Navbar';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';
import PageTransition from '../components/PageTransition';

const Contact = () => {
  return (
    <PageTransition>
      <Navbar />
      <ContactSection />
      <Footer />
    </PageTransition>
  );
};

export default Contact;
