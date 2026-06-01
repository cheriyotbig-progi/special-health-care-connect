import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Home from './pages/Home';
import NewsListing from './pages/NewsListing';
import ArticleDetail from './pages/ArticleDetail';
import { Toaster } from '@/components/ui/sonner';

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col font-sans selection:bg-red-600 selection:text-white">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/latest" element={<NewsListing />} />
            <Route path="/category/:slug" element={<NewsListing />} />
            <Route path="/article/:id" element={<ArticleDetail />} />
          </Routes>
        </main>\
        <Footer />
        <Toaster position="top-center" richColors />
      </div>
    </Router>
  );
}

export default App;