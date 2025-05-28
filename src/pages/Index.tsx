
import React from 'react';
import { ThemeProvider } from '@/contexts/ThemeContext';
import ThemeToggle from '@/components/ThemeToggle';
import HeroSection from '@/components/HeroSection';
import SocialCard from '@/components/SocialCard';
import FloatingParticles from '@/components/FloatingParticles';
import { Youtube, MessageCircle, Facebook } from 'lucide-react';

const Index = () => {
  const socialPlatforms = [
    {
      title: 'YouTube Channel',
      description: 'Subscribe to our channel for amazing content, tutorials, and entertainment. Join thousands of viewers!',
      icon: Youtube,
      href: 'https://youtube.com/@framefury',
      gradient: 'bg-gradient-to-br from-red-500 to-red-600',
      delay: 200,
    },
    {
      title: 'Discord Server',
      description: 'Join our vibrant community! Chat with fellow members, get support, and stay updated.',
      icon: MessageCircle,
      href: 'https://discord.gg/framefury',
      gradient: 'bg-gradient-to-br from-indigo-500 to-purple-600',
      delay: 400,
    },
    {
      title: 'Facebook Page',
      description: 'Follow us on Facebook for updates, behind-the-scenes content, and community posts.',
      icon: Facebook,
      href: 'https://facebook.com/framefury',
      gradient: 'bg-gradient-to-br from-blue-500 to-blue-600',
      delay: 600,
    },
  ];

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-gray-900 dark:via-black dark:to-gray-800 transition-colors duration-500">
        <FloatingParticles />
        <ThemeToggle />
        
        <div className="container mx-auto px-6 py-20">
          <HeroSection />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {socialPlatforms.map((platform, index) => (
              <SocialCard
                key={platform.title}
                title={platform.title}
                description={platform.description}
                icon={platform.icon}
                href={platform.href}
                gradient={platform.gradient}
                delay={platform.delay}
              />
            ))}
          </div>
          
          <footer className="text-center mt-20 animate-fade-in" style={{ animationDelay: '800ms' }}>
            <p className="text-gray-500 dark:text-gray-400 text-sm">
              © 2024 FrameFury. Crafted with ❤️ for our amazing community.
            </p>
          </footer>
        </div>
      </div>
    </ThemeProvider>
  );
};

export default Index;
