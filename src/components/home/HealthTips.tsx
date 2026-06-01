import React from 'react';
import { Link } from 'react-router-dom';
import { blogPosts } from '@/lib/data';
import { Calendar, User, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const HealthTips: React.FC = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-primary font-semibold tracking-wide uppercase text-sm mb-3">Health Education</h2>
            <p className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">Latest from Our Health Blog</p>
            <p className="text-slate-600">Expert advice and insights to help you lead a healthier, more balanced life.</p>
          </div>
          <Link to="/blog">
            <Button variant="ghost" className="text-primary hover:text-primary hover:bg-primary/10 rounded-full px-6">
              View All Articles <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogPosts.slice(0, 3).map((post) => (
            <article key={post.id} className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-3xl mb-6 aspect-video">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-white/90 backdrop-blur-sm text-primary text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-sm">
                    {post.category}
                  </span>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-center space-x-4 text-xs text-slate-500 font-medium">
                  <span className="flex items-center"><Calendar className="h-3 w-3 mr-1" /> {post.date}</span>
                  <span className="flex items-center"><User className="h-3 w-3 mr-1" /> {post.author}</span>
                </div>
                <h3 className="text-xl font-bold text-slate-900 group-hover:text-primary transition-colors line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-slate-600 text-sm line-clamp-3 leading-relaxed">
                  {post.excerpt}
                </p>
                <div className="pt-2">
                  <Link to={`/blog`} className="text-slate-900 font-bold text-sm inline-flex items-center border-b-2 border-primary/20 pb-1 group-hover:border-primary transition-all">
                    Read Full Story
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HealthTips;