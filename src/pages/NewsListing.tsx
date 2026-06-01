import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { fetchLatestArticles, categories } from '@/lib/data';
import { Calendar, Clock, ArrowRight, Filter, RefreshCw } from 'lucide-react';
import { Skeleton } from '@/components/ui/skeleton';

const NewsListing: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  
  const { data: articles, isLoading, isError, refetch } = useQuery({
    queryKey: ['newsListing', slug],
    queryFn: () => fetchLatestArticles(20),
  });

  const activeCategory = slug ? categories.find(c => c.slug === slug)?.name : 'Latest Updates';

  return (
    <div className="min-h-screen bg-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="space-y-2">
            <span className="text-red-600 font-bold uppercase tracking-widest text-xs border-l-4 border-red-600 pl-3">Archive</span>
            <h1 className="text-5xl font-black text-slate-900 tracking-tighter uppercase">{activeCategory}</h1>
          </div>
          <div className="flex items-center space-x-4">
            <button 
              onClick={() => refetch()}
              className="p-2 rounded-xl bg-slate-100 hover:bg-slate-200 transition-colors"
              title="Refresh feed"
            >
              <RefreshCw className="h-4 w-4 text-slate-600" />
            </button>
            <div className="flex items-center space-x-4 bg-slate-100 p-1.5 rounded-xl">
               <Filter className="h-4 w-4 text-slate-500 ml-2" />
               <select className="bg-transparent text-sm font-bold focus:outline-none border-none py-2 pr-8">
                 <option>Most Recent</option>
                 <option>Oldest First</option>
                 <option>Most Popular</option>
               </select>
            </div>
          </div>
        </div>

        {isLoading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="space-y-4">
                <Skeleton className="aspect-[16/10] w-full rounded-2xl" />
                <Skeleton className="h-8 w-3/4" />
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-1/2" />
              </div>
            ))}
          </div>
        ) : isError ? (
          <div className="text-center py-20 bg-slate-50 rounded-3xl">
            <p className="text-slate-500 font-medium">Unable to load stories. Please try again.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
            {articles?.map((article) => (
              <Link to={`/article/${article.id}`} key={article.id} className="group flex flex-col h-full">
                <div className="relative overflow-hidden rounded-2xl mb-6 aspect-[16/10]">
                  <img 
                    src={article.image} 
                    alt={article.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-red-600 text-white text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-widest shadow-lg">
                      {categories.find(c => c.id === article.categoryId)?.name}
                    </span>
                  </div>
                </div>
                <div className="space-y-4 flex-grow">
                  <div className="flex items-center space-x-4 text-[10px] text-slate-500 font-black uppercase tracking-widest">
                    <span className="flex items-center"><Calendar className="h-3 w-3 mr-1 text-red-600" /> {article.publishedAt}</span>
                    <span className="flex items-center"><Clock className="h-3 w-3 mr-1 text-red-600" /> {article.readTime}</span>
                  </div>
                  <h3 className="text-2xl font-black text-slate-900 group-hover:text-red-600 transition-colors line-clamp-3 leading-tight uppercase tracking-tighter">
                    {article.title}
                  </h3>
                  <p className="text-slate-600 text-sm line-clamp-3 leading-relaxed">
                    {article.excerpt}
                  </p>
                </div>
                <div className="pt-6 mt-auto">
                  <span className="text-slate-900 font-black text-xs uppercase tracking-widest flex items-center group-hover:text-red-600 transition-colors">
                    Full Story <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-2" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default NewsListing;