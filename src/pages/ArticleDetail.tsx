import React from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { fetchArticleById, authors, categories } from '@/lib/data';
import { Calendar, Clock, Share2, Bookmark, MessageSquare, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Skeleton } from '@/components/ui/skeleton';

const ArticleDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  const { data: article, isLoading, isError } = useQuery({
    queryKey: ['article', id],
    queryFn: () => fetchArticleById(id || ''),
    enabled: !!id,
  });

  if (isLoading) {
    return (
      <div className="min-h-screen bg-white">
        <Skeleton className="h-[60vh] w-full" />
        <div className="max-w-7xl mx-auto px-4 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
             <div className="lg:col-span-1 space-y-6">
                <Skeleton className="h-20 w-full rounded-2xl" />
                <Skeleton className="h-10 w-full" />
             </div>
             <div className="lg:col-span-3 space-y-8">
                <Skeleton className="h-12 w-3/4" />
                <Skeleton className="h-64 w-full rounded-3xl" />
             </div>
          </div>
        </div>
      </div>
    );
  }

  if (isError || !article) return <Navigate to="/" />;

  const author = authors.find(a => a.id === article.authorId) || authors[0];
  const category = categories.find(c => c.id === article.categoryId) || categories[0];

  return (
    <div className="min-h-screen bg-white">
      {/* Header Image */}
      <div className="h-[60vh] relative">
        <img src={article.image} alt={article.title} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full p-8 md:p-16">
          <div className="max-w-4xl mx-auto space-y-6">
            <Link to={`/category/${category?.slug}`} className="bg-red-600 text-white text-xs font-black px-4 py-1.5 rounded-full uppercase tracking-widest inline-block shadow-xl">
              {category?.name}
            </Link>
            <h1 className="text-4xl md:text-6xl font-black text-white tracking-tighter uppercase leading-[0.9]">
              {article.title}
            </h1>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -translate-y-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
          {/* Sidebar Info */}
          <div className="lg:col-span-1 space-y-12">
            <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100 shadow-sm">
              <div className="flex items-center space-x-4 mb-8">
                <img src={author?.avatar} alt={author?.name} className="h-14 w-14 rounded-full object-cover border-2 border-red-600 shadow-lg" />
                <div>
                  <p className="text-xs font-black text-slate-400 uppercase tracking-tighter">Written by</p>
                  <p className="text-sm font-black text-slate-900 leading-none mt-1">{author?.name}</p>
                </div>
              </div>
              <div className="space-y-4 pt-6 border-t border-slate-200">
                <div className="flex items-center text-xs font-bold text-slate-500 uppercase">
                  <Calendar className="h-4 w-4 mr-2 text-red-600" /> {article.publishedAt}
                </div>
                <div className="flex items-center text-xs font-bold text-slate-500 uppercase">
                  <Clock className="h-4 w-4 mr-2 text-red-600" /> {article.readTime} Read
                </div>
              </div>
            </div>

            <div className="flex flex-col space-y-3">
              <Button variant="outline" className="w-full rounded-xl flex justify-between group">
                <span className="font-bold">Share Story</span>
                <Share2 className="h-4 w-4 group-hover:text-red-600" />
              </Button>
              <Button variant="outline" className="w-full rounded-xl flex justify-between group">
                <span className="font-bold">Save for later</span>
                <Bookmark className="h-4 w-4 group-hover:text-red-600" />
              </Button>
            </div>
          </div>

          {/* Article Content */}
          <div className="lg:col-span-3">
            <div className="bg-white p-8 md:p-16 rounded-[2.5rem] shadow-xl border border-slate-50 min-h-[500px]">
               <div className="prose prose-lg max-w-none text-slate-700 leading-relaxed font-serif">
                  <p className="text-xl md:text-2xl font-bold text-slate-900 mb-12 border-l-4 border-red-600 pl-8 leading-tight italic">
                    {article.excerpt}
                  </p>
                  <p className="mb-8">{article.content}</p>
                  <p className="mb-8">This development represents a significant milestone in our ongoing coverage. As reporters on the ground continue to gather facts, it becomes increasingly clear that the implications will be felt for years to come across various sectors of society.</p>
                  <div className="my-12 p-8 bg-slate-900 rounded-3xl text-white relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-red-600/20 rounded-full translate-x-16 -translate-y-16"></div>
                    <blockquote className="text-2xl font-black italic tracking-tight relative z-10 mb-6">
                      "Journalism is printing what someone else does not want printed; everything else is public relations."
                    </blockquote>
                    <cite className="text-sm font-bold uppercase tracking-widest text-red-500">— Editorial Board</cite>
                  </div>
                  <p>Stay tuned as we continue to follow this story and provide updates as they emerge from verified sources. Our commitment remains to providing high-accuracy, independent reporting for our readers in Nairobi and around the world.</p>
               </div>

               <div className="mt-20 pt-12 border-t border-slate-100 flex items-center justify-between">
                  <Link to="/latest">
                    <Button variant="ghost" className="font-bold text-slate-500 hover:text-red-600">
                      <ArrowLeft className="h-4 w-4 mr-2" /> Back to Latest
                    </Button>
                  </Link>
                  <Button className="bg-red-600 hover:bg-red-700 rounded-full font-bold">
                    <MessageSquare className="h-4 w-4 mr-2" /> Join the Discussion
                  </Button>
               </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticleDetail;