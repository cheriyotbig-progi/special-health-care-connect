import React from 'react';
import { blogPosts, WEBSITE_NAME } from '@/lib/data';
import { Calendar, User, Search, ArrowRight, Bookmark } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Blog: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl font-bold text-slate-900 mb-6">Health & Wellness Blog</h1>
          <p className="text-slate-600 text-lg">
            Stay informed with the latest medical news, wellness tips, and expert advice from our leading specialists.
          </p>
          <div className="mt-8 relative max-w-lg mx-auto">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400" />
            <Input 
              placeholder="Search articles..." 
              className="pl-12 h-14 rounded-full border-none shadow-md bg-white text-lg"
            />
          </div>
        </div>

        {/* Featured Post */}
        <div className="mb-20">
          <div className="bg-white rounded-[2.5rem] overflow-hidden shadow-xl flex flex-col lg:flex-row">
            <div className="lg:w-3/5 relative">
              <img 
                src={blogPosts[0].image} 
                alt={blogPosts[0].title} 
                className="w-full h-full object-cover aspect-video lg:aspect-auto"
              />
              <div className="absolute top-6 left-6">
                <span className="bg-primary text-white text-xs font-bold px-4 py-2 rounded-full uppercase tracking-widest shadow-lg">
                  Featured Article
                </span>
              </div>
            </div>
            <div className="lg:w-2/5 p-8 lg:p-12 flex flex-col justify-center">
              <div className="flex items-center space-x-4 text-xs text-slate-500 font-medium mb-6">
                <span className="bg-slate-100 px-3 py-1 rounded-full text-primary font-bold">{blogPosts[0].category}</span>
                <span className="flex items-center"><Calendar className="h-3 w-3 mr-1" /> {blogPosts[0].date}</span>
              </div>
              <h2 className="text-3xl font-bold text-slate-900 mb-6 leading-tight hover:text-primary transition-colors cursor-pointer">
                {blogPosts[0].title}
              </h2>
              <p className="text-slate-600 mb-8 leading-relaxed">
                {blogPosts[0].excerpt}
              </p>
              <div className="flex items-center justify-between mt-auto pt-6 border-t border-slate-100">
                <div className="flex items-center space-x-3">
                  <div className="h-10 w-10 bg-primary/10 rounded-full flex items-center justify-center text-primary font-bold">
                    JW
                  </div>
                  <div>
                    <p className="text-sm font-bold text-slate-900">{blogPosts[0].author}</p>
                    <p className="text-xs text-slate-500 text-slate-500 uppercase tracking-tighter">Medical Director</p>
                  </div>
                </div>
                <Button className="rounded-full h-12 w-12 p-0" variant="outline">
                   <Bookmark className="h-5 w-5" />
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Categories */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {['All Articles', 'Cardiology', 'Pediatrics', 'Wellness', 'Neurology', 'Mental Health'].map(cat => (
            <button 
              key={cat}
              className={`px-6 py-2 rounded-full text-sm font-bold transition-all ${cat === 'All Articles' ? 'bg-primary text-white shadow-lg shadow-primary/25' : 'bg-white text-slate-600 hover:bg-slate-100'}`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Post Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {blogPosts.map((post) => (
            <article key={post.id} className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col group">
              <div className="relative aspect-video overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-8 flex-1 flex flex-col">
                <div className="text-xs font-bold text-primary uppercase tracking-widest mb-4">
                  {post.category}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4 line-clamp-2 group-hover:text-primary transition-colors">
                  {post.title}
                </h3>
                <p className="text-slate-500 text-sm mb-6 line-clamp-3 leading-relaxed">
                  {post.excerpt}
                </p>
                <div className="mt-auto pt-6 border-t border-slate-100 flex items-center justify-between">
                  <div className="flex items-center text-xs text-slate-400 font-medium">
                    <Calendar className="h-3 w-3 mr-1" /> {post.date}
                  </div>
                  <Link to={`/blog`} className="text-primary font-bold text-sm flex items-center group-hover:translate-x-1 transition-transform">
                    Read More <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
        
        {/* Newsletter */}
        <div className="mt-24 bg-primary rounded-[2.5rem] p-8 lg:p-16 text-center text-white relative overflow-hidden">
          <div className="absolute top-0 left-0 w-64 h-64 bg-white/10 rounded-full -translate-x-32 -translate-y-32"></div>
          <div className="relative z-10 max-w-2xl mx-auto space-y-6">
            <h2 className="text-3xl lg:text-4xl font-bold">Stay Updated with {WEBSITE_NAME}</h2>
            <p className="text-primary-foreground/80 text-lg">
              Get the latest health tips and news delivered straight to your inbox every week.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <Input 
                placeholder="Enter your email" 
                className="h-12 rounded-full border-none bg-white text-slate-900"
              />
              <Button className="h-12 rounded-full px-8 bg-slate-900 text-white hover:bg-slate-800">
                Subscribe
              </Button>
            </div>
            <p className="text-xs text-primary-foreground/60">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;