import { Navigate, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import StaticHtmlPage from './pages/StaticHtmlPage';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />

      <Route
        path="/steel-knowledge-graph"
        element={
          <StaticHtmlPage
            title="Steel Knowledge Graph"
            srcPath="/steel-knowledge-graph.html"
          />
        }
      />

      <Route
        path="/agents-steel-deepdive"
        element={
          <StaticHtmlPage
            title="Agents Steel Deep Dive"
            srcPath="/agents-steel-deepdive.html"
          />
        }
      />

      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}
