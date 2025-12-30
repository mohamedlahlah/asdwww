import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import SEOPage from './pages/SEOPage';
import AdsPage from './pages/AdsPage';
import WebDevPage from './pages/WebDevPage';
import CorporateWebPage from './pages/CorporateWebPage';
import DesignPage from './pages/DesignPage';
import AutomationPage from './pages/AutomationPage';
import ManagementPage from './pages/ManagementPage';
import AboutPage from './pages/AboutPage';
import ProductsPage from './pages/ProductsPage';
import PortfolioPage from './pages/PortfolioPage';
import ServicesLandingPage from './pages/ServicesLandingPage';
import ContactPage from './pages/ContactPage';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfService from './pages/TermsOfService';
import Cookies from './pages/Cookies';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/portfolio" element={<PortfolioPage />} />
          <Route path="/services" element={<ServicesLandingPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/seo" element={<SEOPage />} />
          <Route path="/ads" element={<AdsPage />} />
          <Route path="/ecommerce" element={<WebDevPage />} />
          <Route path="/corporate-web" element={<CorporateWebPage />} />
          <Route path="/design" element={<DesignPage />} />
          <Route path="/automation" element={<AutomationPage />} />
          <Route path="/management" element={<ManagementPage />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms" element={<TermsOfService />} />
          <Route path="/cookies" element={<Cookies />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
