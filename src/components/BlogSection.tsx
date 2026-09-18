import React from 'react';
import { BookOpen, Clock, ArrowRight } from 'lucide-react';
import { BLOG_POSTS } from '../data/cafeData';
import { BlogPost } from '../types';

interface BlogSectionProps {
  onSelectPost?: (post: BlogPost) => void;
}

export const BlogSection: React.FC<BlogSectionProps> = ({ onSelectPost }) => {
  return (
    <section id="blog" className="py-20 md:py-28 bg-[#F7F2EB] relative border-t border-[#EDE4D8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 md:mb-16">
          <div className="inline-flex items-center gap-2 text-[#C26D45] text-xs font-bold tracking-[0.2em] uppercase mb-2">
            <BookOpen className="w-3.5 h-3.5" />
            <span>Stories & Notes</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-semibold text-[#25140D] tracking-tight mb-4">
            From The Roastery Journal
          </h2>

          <p className="text-base sm:text-lg text-[#5A3521]/80 leading-relaxed font-normal">
            Reflections on bean sourcing, brewing alchemy, and the hill culture of Himachal Pradesh.
          </p>
        </div>

        {/* Blog Post Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {BLOG_POSTS.map((post) => (
            <article
              key={post.id}
              className="group bg-white rounded-2xl overflow-hidden border border-[#E2D7CA]/80 shadow-[0_4px_16px_-4px_rgba(37,20,13,0.05)] hover:shadow-[0_12px_28px_-6px_rgba(37,20,13,0.12)] hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
              id={`blog-card-${post.id}`}
            >
              <div>
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#EDE4D8]">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-3 left-3 bg-[#25140D]/85 backdrop-blur-xs text-[#FAF7F2] text-[10px] font-bold tracking-widest uppercase px-3 py-1 rounded-full border border-white/10">
                    {post.tag}
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center gap-3 text-xs text-[#5A3521]/70 mb-3">
                    <span>{post.date}</span>
                    <span>•</span>
                    <div className="flex items-center gap-1">
                      <Clock className="w-3 h-3 text-[#C26D45]" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>

                  <h3 className="font-serif text-xl font-semibold text-[#25140D] mb-3 leading-snug group-hover:text-[#C26D45] transition-colors">
                    {post.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#5A3521]/80 leading-relaxed">
                    {post.summary}
                  </p>
                </div>
              </div>

              <div className="p-6 pt-0">
                <button
                  onClick={() => onSelectPost && onSelectPost(post)}
                  className="inline-flex items-center gap-2 text-xs font-bold tracking-wider uppercase text-[#25140D] group-hover:text-[#C26D45] transition-colors"
                >
                  <span>Read Journal Entry</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
