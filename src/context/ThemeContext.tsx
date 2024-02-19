import { createContext, useState, useEffect } from 'react';

type ThemeContextProviderProps = {
  children: React.ReactNode;
};

export const ThemeContext = createContext({
  theme: 'theme',
  setTheme: (_theme: string) => {},
});

export default function ThemeContextProvider({
  children,
}: ThemeContextProviderProps) {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'dark');

  useEffect(() => {
    const body = document.querySelector('body');
    if (theme === 'light') {
      body?.classList.add('bg-neutral-50', 'text-black');
    } else {
      body?.classList.remove('bg-neutral-50', 'text-black');
      body?.classList.add('bg-black', 'text-white');
    }
  }, [theme, setTheme]);
  return (
    <ThemeContext.Provider
      value={{
        theme,
        setTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}
