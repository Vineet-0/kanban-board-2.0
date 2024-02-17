import { useState, useEffect } from 'react';
import { MdSunny } from "react-icons/md";
import { IoMdMoon } from "react-icons/io";

const DarkModeToggle = () => {
  // Check if window and localStorage are available (in the browser)
  const isBrowser = typeof window !== 'undefined';
  const storedTheme = isBrowser ? localStorage.getItem('isDarkMode') : null;
  const [isDarkMode, setIsDarkMode] = useState(storedTheme === 'true');

  useEffect(() => {
    if (isBrowser) {
      const html = document.documentElement;
      isDarkMode ? html.classList.add('dark') : html.classList.remove('dark');
      localStorage.setItem('isDarkMode', isDarkMode);
    }
  }, [isBrowser, isDarkMode]);

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
