import { createContext, useState } from 'react';

type ThemeContextProviderProps = {
  children: React.ReactNode;
};

export const ThemeContext = createContext({
  theme: 'theme',
  setTheme: (theme: string) => {},
});

export default function ThemeContextProvider({
  children,
}: ThemeContextProviderProps) {
  const [theme, setTheme] = useState(
    localStorage.getItem('theme') ? localStorage.getItem('theme') : 'dark'
  );

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
