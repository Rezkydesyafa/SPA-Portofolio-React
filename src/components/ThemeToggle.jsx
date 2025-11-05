import React, { useState, useEffect } from 'react';

const ThemeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    // Cek preferensi tema dari localStorage saat komponen di-mount
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      setIsDarkMode(true);
      document.body.classList.add('dark-mode');
    }
  }, []);

  const toggleTheme = () => {
    setIsDarkMode((prevMode) => {
      const newMode = !prevMode;

      if (newMode) {
        document.body.classList.add('dark-mode');
        localStorage.setItem('theme', 'dark');
      } else {
        document.body.classList.remove('dark-mode');
        localStorage.setItem('theme', 'light');
      }

      return newMode;
    });
  };

  return (
    <div className='theme-toggle' onClick={toggleTheme}>
      <i
        id='theme-icon'
        className={`fas ${isDarkMode ? 'fa-sun' : 'fa-moon'}`}
      ></i>
    </div>
  );
};

export default ThemeToggle;
