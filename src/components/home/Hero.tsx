import React from 'react';
import { Article } from '@/types';
import { ArrowRight, Clock, User } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

interface HeroProps {
  article: Article;
}

const Hero: React.FC<HeroProps> = ({ article }) => {
  return (
    <section className="relative h-[85vh] w-full overflow-hidden">
      <img 
        src={article.image} 
        alt={article.title} 
        className="w-full h-full object-cover scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent"></div>
      
      <div className="absolute bottom-0 left-0 w-full p-8 md:p-24">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl space-y-6"
          >
            <div className="inline-flex items-center space-x-2 bg-red-600 text-white px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-widest">
              <span>Top Story</span>
            </div>
            
            <h1 className="text-5xl md:text-8xl font-black text-white tracking-tighter uppercase leading-[0.85]">
              {article.title}
            </h1>
            
            <p className="text-xl text-slate-300 max-w-2xl leading-relaxed font-medium line-clamp-2">
              {article.excerpt}
            </p>

            <div className="flex flex-col sm:flex-row gap-6 pt-4">
              <Link to={`/article/${article.id}`}>
                <button className="bg-white text-slate-950 font-black px-12 py-5 rounded-full uppercase tracking-widest text-sm hover:bg-red-600 hover:text-white transition-all transform hover:-translate-y-1 shadow-2xl flex items-center group">
                  Read Full Story <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-2 transition-transform" />
                </button>
              </Link>
              <div className="flex items-center space-x-6 text-slate-400 font-bold uppercase tracking-widest text-xs">
                <span className="flex items-center"><User className="h-4 w-4 mr-2 text-red-600" /> {article.authorId === '1' ? 'S. Jenkins' : 'M. Thompson'}</span>
                <span className="flex items-center"><Clock className="h-4 w-4 mr-2 text-red-600" /> {article.readTime}</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="absolute top-1/2 right-8 -translate-y-1/2 flex flex-col space-y-2 text-slate-500/20 font-black text-9xl uppercase tracking-tighter select-none pointer-events-none rotate-90 hidden lg:block">
        <span>Breaking</span>
        <span>Breaking</span>
      </div>
    </section>
  );
};

export default Hero;