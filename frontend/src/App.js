import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "./components/ui/sonner";
import ScrollToTop from "./components/ScrollToTop";

// Import components
import Header from "./components/Header";
import Hero from "./components/Hero";
import Problem from "./components/Problem";
import Services from "./components/Services";
import HowItWorks from "./components/HowItWorks";
import TargetAudience from "./components/TargetAudience";
import CaseStudies from "./components/CaseStudies";
import Pricing from "./components/Pricing";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ChatWidget from "./components/ChatWidget";

import TermsOfService from "./pages/TermsOfService";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import CookiePolicy from "./pages/CookiePolicy";

// Pages
import DashboardLayout from "./components/layouts/DashboardLayout";
import Dashboard from "./components/dashboard/Dashboard";
import Invoices from "./components/dashboard/Invoices";
import Transactions from "./components/dashboard/Transactions";
import Vouchers from "./components/dashboard/Vouchers";
import AdminLogin from "./components/auth/AdminLogin";
import AdminDashboard from "./components/admin/AdminDashboard";

const Home = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <Problem />
        <Services />
        <HowItWorks />
        <TargetAudience />
        <CaseStudies />
        <Pricing />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      <ChatWidget />
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/terms" element={<TermsOfService />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/cookies" element={<CookiePolicy />} />

          {/* Existing Admin/Dashboard Routes */}
          <Route path="/admin/login" element={<AdminLogin />} />
          <Route path="/admin/dashboard" element={<AdminDashboard />} />

          <Route path="/dashboard" element={<DashboardLayout />}>
            <Route index element={<Dashboard />} />
            <Route path="invoices" element={<Invoices />} />
            <Route path="transactions" element={<Transactions />} />
            <Route path="vouchers" element={<Vouchers />} />
          </Route>

        </Routes>
      </BrowserRouter>
      <Toaster />
    </div>
  );
}

export default App;