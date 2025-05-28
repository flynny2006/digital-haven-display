
import React from 'react';
import { LucideIcon } from 'lucide-react';

interface SocialCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  href: string;
  gradient: string;
  delay: number;
}

const SocialCard: React.FC<SocialCardProps> = ({ 
  title, 
  description, 
  icon: Icon, 
  href, 
  gradient,
  delay 
}) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group block animate-fade-in"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="relative p-8 rounded-3xl bg-white/10 dark:bg-black/20 backdrop-blur-lg border border-white/20 dark:border-white/10 hover:border-white/40 dark:hover:border-white/20 transition-all duration-500 hover:scale-105 hover:-translate-y-2 shadow-xl hover:shadow-2xl overflow-hidden">
        {/* Gradient background effect */}
        <div className={`absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500 ${gradient}`}></div>
        
        {/* Icon */}
        <div className={`inline-flex p-4 rounded-2xl ${gradient} mb-6 group-hover:scale-110 transition-transform duration-300`}>
          <Icon className="w-8 h-8 text-white" />
        </div>
        
        {/* Content */}
        <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 group-hover:bg-clip-text transition-all duration-300">
          {title}
        </h3>
        
        <p className="text-gray-600 dark:text-gray-300 leading-relaxed group-hover:text-gray-500 dark:group-hover:text-gray-200 transition-colors duration-300">
          {description}
        </p>
        
        {/* Hover indicator */}
        <div className="absolute bottom-4 right-4 w-6 h-6 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-100 transform translate-x-2 group-hover:translate-x-0 transition-all duration-300">
          <div className="w-full h-full rounded-full bg-white/20 animate-pulse"></div>
        </div>
      </div>
    </a>
  );
};

export default SocialCard;
