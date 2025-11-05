import React, { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import Typed from 'typed.js';

const HeroSection = () => {
  const typedRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    // Inisialisasi Typed.js untuk efek typing
    const typed = new Typed(typedRef.current, {
      strings: [
        'Information Technology students',
        // '2411501044 ',
        'Fullstack Enthusiast',
        'Cybersecurity Enthusiast',
      ],
      typeSpeed: 100,
      backSpeed: 100,
      loop: true,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <section id='profile'>
      <div className='section__pic-container'>
        <img src='./assets/profile-picture.png' alt='profile-picture' />
      </div>
      <div className='section__text'>
        <h3 className='section__text__p1'>Hello 👋️, I'm</h3>
        <h1 className='title'>Mohamad Dwi Rezky Desyafa</h1>
        <p className='section__text__p2'>
          <span ref={typedRef} className='typing-text'></span>
        </p>
        <p className='section__text__p3'>
          I am an Information Technology student, a Fullstack and Cybersecurity
          Enthusiast. Experienced in building APIs, developing front-end
          interfaces, and continuously learning about system architecture and
          application security. I am eager to contribute by creating secure and
          efficient end-to-end solutions.
        </p>
        <div className='btn-container'>
          <button
            className='btn btn-color-2'
            onClick={() =>
              window.open(
                'https://drive.google.com/drive/folders/1kWGyfLqSQQ1INFGC7ekwcvA92f6xIiVC?usp=sharing'
              )
            }
          >
            Download CV
          </button>
          <button
            className='btn btn-color-1'
            onClick={() => navigate('/contact')}
          >
            Contact Info
          </button>
        </div>

        {/* Social Media Icons */}
        <div id='socials-container'>
          <a
            href='https://www.linkedin.com/in/rezkydesyafa/'
            target='_blank'
            rel='noreferrer'
            className='social-link'
          >
            <i className='fab fa-linkedin'></i>
          </a>
          <a
            href='https://github.com/Rezkydesyafa'
            target='_blank'
            rel='noreferrer'
            className='social-link'
          >
            <i className='fab fa-github'></i>
          </a>
          <a href='mailto:rezkydesyafa@gmail.com' className='social-link'>
            <i className='fas fa-envelope'></i>
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
