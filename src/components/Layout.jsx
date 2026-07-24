import { Outlet } from 'react-router-dom';
import { useTheme } from '../hooks/useTheme';
import Navbar from './Navbar';
import Footer from './Footer';
import ScrollToHash from './ScrollToHash';

export default function Layout() {
  const { theme, toggle } = useTheme();

  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <ScrollToHash />
      <Navbar theme={theme} toggle={toggle} />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
