import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import ProjectsPage from './pages/ProjectsPage';
import ProjectDetailPage from './pages/ProjectDetailPage';

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/proyectos" element={<ProjectsPage />} />
        <Route path="/proyectos/:slug" element={<ProjectDetailPage />} />
      </Route>
    </Routes>
  );
}
