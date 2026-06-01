import React from 'react';
import Hero from '../components/home/Hero';
import NewsGrid from '../components/home/NewsGrid';
import Newsletter from '../components/home/Newsletter';
import { useQuery } from '@tanstack/react-query';
import { fetchLatestArticles } from '@/lib/data';
import { Skeleton } from '@/components/ui/skeleton';

const Home: React.FC = () => {
  const { data: articles, isLoading, isError } = useQuery({
    queryKey: ['latestArticles'],
    queryFn: () => fetchLatestArticles(12),
  });

  if (isLoading) {
    return (
      <div className="bg-slate-50 min-h-screen">
        <div className="h-[85vh] bg-slate-200 animate-pulse" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
            <div className="lg:col-span-3">
               <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {[...Array(4)].map((_, i) => (
                    <div key={i} className="space-y-4">
                      <Skeleton className="h-48 w-full rounded-2xl" />
                      <Skeleton className="h-6 w-3/4" />
                      <Skeleton className="h-4 w-full" />
                    </div>
                  ))}
               </div>
            </div>
            <div className="lg:col-span-1 space-y-8">
               <Skeleton className="h-8 w-full" />
               {[...Array(3)].map((_, i) => (
                  <Skeleton key={i} className="h-20 w-full" />
               ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (isError || !articles) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50">
        <div className="text-center space-y-4">
          <h2 className="text-2xl font-bold text-slate-900">Oops! Failed to load news.</h2>
          <p className="text-slate-500">Please check your connection and try again.</p>
          <button 
            onClick={() => window.location.reload()}
            className="bg-red-600 text-white px-6 py-2 rounded-full font-bold"
          >
            Retry
          </button>
        </div>
      </div>
    );
  }

  const featuredArticle = articles[0];
  const trendingArticles = articles.filter(a => a.isTrending).slice(0, 5);
  const otherArticles = articles.slice(1);

  return (
    <div className="bg-slate-50 min-h-screen">
      <Hero article={featuredArticle} />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
          {/* Main Content Area */}
          <div className="lg:col-span-3">
            <div className="flex items-center justify-between mb-8 border-b border-slate-200 pb-4">
              <h2 className="text-2xl font-black uppercase tracking-tighter">Latest Stories</h2>
              <span className="text-red-600 font-bold text-sm cursor-pointer hover:underline">View All</span>
            </div>
            <NewsGrid articles={otherArticles} />
          </div>

          {/* Sidebar / Trending */}
          <div className="lg:col-span-1 space-y-12">
            <div>
              <h2 className="text-xl font-black uppercase tracking-tighter mb-8 border-b border-slate-200 pb-4">Trending</h2>
              <div className="space-y-8">
                {trendingArticles.length > 0 ? trendingArticles.map((article, idx) => (
                  <div key={article.id} className="flex space-x-4 group cursor-pointer">
                    <span className="text-4xl font-black text-slate-200 group-hover:text-red-600 transition-colors">0{idx + 1}</span>
                    <div className="space-y-1">
                      <h3 className="font-bold leading-tight group-hover:text-red-600 transition-colors line-clamp-2">
                        {article.title}
                      </h3>
                      <p className="text-xs text-slate-500 uppercase font-bold tracking-wider">{article.publishedAt}</p>
                    </div>
                  </div>
                )) : (
                  <p className="text-sm text-slate-400">No trending stories right now.</p>
                )}
              </div>
            </div>

            <div className="bg-slate-900 text-white p-8 rounded-2xl shadow-2xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-24 h-24 bg-red-600 rounded-full -translate-y-12 translate-x-12 opacity-50 group-hover:scale-150 transition-transform duration-700"></div>
              <h3 className="text-xl font-bold relative z-10 mb-4">Ad Slot</h3>
              <p className="text-sm text-slate-400 relative z-10 mb-6">Promote your brand with Holistic News.</p>
              <button className="bg-white text-slate-900 font-bold px-6 py-2 rounded-full text-sm relative z-10 hover:bg-red-600 hover:text-white transition-colors">Contact Us</button>
            </div>
          </div>
        </div>
      </div>

      <Newsletter />
    </div>
  );
};

export default Home;