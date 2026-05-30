import { Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Home } from './pages/Home';
import { CategoryPage } from './pages/CategoryPage';
import { ServicePage } from './pages/ServicePage';
import { IndustryPage } from './pages/IndustryPage';
import { NotFound } from './pages/NotFound';

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/services/:slug" element={<CategoryPage />} />
        <Route path="/industries/:slug" element={<IndustryPage />} />
        {/* Deep service pages live under /services/ but resolve via ServicePage */}
        <Route path="/services/errcs" element={<ServicePage />} />
        <Route path="/services/cellular-das" element={<ServicePage />} />
        <Route path="/services/in-building-wireless" element={<ServicePage />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;
