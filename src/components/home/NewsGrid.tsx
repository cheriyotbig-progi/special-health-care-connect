import React from 'react';
import { Article } from '@/types';
import { Link } from 'react-router-dom';
import { categories } from '@/lib/data';
import { ArrowRight, Clock } from 'lucide-react';

interface NewsGridProps {
  articles: Article[];
}

const NewsGrid: React.FC<NewsGridProps> = ({ articles }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {articles.map((article) => (
        <Link to={`/article/${article.id}`} key={article.id} className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 flex flex-col border border-slate-100">
          <div className="relative aspect-[16/9] overflow-hidden">
            <img 
              src={article.image} 
              alt={article.title} 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute top-4 left-4">
              <span className="bg-slate-900/80 backdrop-blur-md text-white text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-widest">
                {categories.find(c => c.id === article.categoryId)?.name}
              </span>
            </div>
          </div>
          <div className="p-8 flex-1 flex flex-col">
            <h3 className="text-2xl font-black text-slate-900 group-hover:text-red-600 transition-colors mb-4 line-clamp-2 leading-tight uppercase tracking-tighter">
              {article.title}
            </h3>
            <p className="text-slate-500 text-sm mb-6 line-clamp-3 leading-relaxed">
              {article.excerpt}
            </p>
            <div className="mt-auto flex items-center justify-between pt-6 border-t border-slate-50">
              <span className="text-[10px] font-black uppercase tracking-widest text-slate-400 flex items-center">
                <Clock className="h-3 w-3 mr-1 text-red-600" /> {article.readTime}
              </span>
              <span className="text-red-600 font-black text-xs uppercase tracking-widest flex items-center group-hover:translate-x-2 transition-transform">
                Read More <ArrowRight className="ml-2 h-4 w-4" />
              </span>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default NewsGrid;