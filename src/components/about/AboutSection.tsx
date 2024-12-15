import { useEffect, useRef } from 'react';
import ProfileImage from './ProfileImage';
import AboutContent from './AboutContent';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';
import './AboutSection.css';

export default function AboutSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isVisible = useIntersectionObserver(sectionRef, { threshold: 0.2 });

  return (
    <div 
      className={`about-section py-24 ${isVisible ? 'animate-in' : ''}`} 
      ref={sectionRef}
    >
      <div className="container mx-auto px-6">
        <div className="person">
          <ProfileImage />
          <AboutContent />
        </div>
      </div>
    </div>
  );
}