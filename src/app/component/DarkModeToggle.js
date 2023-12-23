import { useState, useEffect } from 'react';
import { MdSunny } from "react-icons/md";
import { IoMdMoon } from "react-icons/io";

const DarkModeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState('true');

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setIsDarkMode(localStorage.getItem('isDarkMode'));
    }
  }, []);

  useEffect(() => {
    const html = document.documentElement;
    isDarkMode ? html.classList.add('dark') : html.classList.remove('dark');
    localStorage.setItem('isDarkMode', isDarkMode);
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <button onClick={toggleDarkMode}>
      {isDarkMode ? <MdSunny className="text-2xl"/> : <IoMdMoon className="text-2xl"/>}
    </button>
  );
};

export default DarkModeToggle;