import { useState, useEffect } from 'react';
import { MdSunny } from "react-icons/md";
import { IoMdMoon } from "react-icons/io";

const DarkModeToggle = () => {
  const storedTheme = localStorage.getItem('isDarkMode');
  const [isDarkMode, setIsDarkMode] = useState(storedTheme === 'true');

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