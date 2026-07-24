import { useEffect, useState } from 'react';

// Maneja el modo claro/oscuro y lo recuerda en el navegador.
// El tema por defecto es CLARO (crema). Para que sea oscuro por
// defecto, cambia 'light' por 'dark' en la línea marcada abajo.
export function useTheme() {
  const [theme, setTheme] = useState(() => {
    if (typeof document !== 'undefined' && document.documentElement.classList.contains('dark')) {
      return 'dark';
    }
    return 'light'; // 👈 tema por defecto
  });

  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    try {
      localStorage.setItem('theme', theme);
    } catch (e) {
      /* ignorar */
    }
  }, [theme]);

  const toggle = () => setTheme((t) => (t === 'dark' ? 'light' : 'dark'));

  return { theme, toggle };
}
