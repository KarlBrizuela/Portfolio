import { useEffect, useRef, useState } from 'react';
import * as React from 'react';
import { gsap } from 'gsap';

interface BounceCardsProps {
  className?: string;
  images?: string[];
  containerWidth?: number;
  containerHeight?: number;
  animationDelay?: number;
  animationStagger?: number;
  easeType?: string;
  transformStyles?: string[];
  enableHover?: boolean;
  onCardClick?: (index: number, image: string) => void;
}

export default function BounceCards({
  className = '',
  images = [],
  containerWidth = 400,
  containerHeight = 400,
  animationDelay = 0.5,
  animationStagger = 0.06,
  easeType = 'elastic.out(1, 0.8)',
  transformStyles = [
    'rotate(10deg) translate(-170px)',
    'rotate(5deg) translate(-85px)',
    'rotate(-3deg)',
    'rotate(-10deg) translate(85px)',
    'rotate(2deg) translate(170px)'
  ],
  enableHover = false,
  onCardClick
}: BounceCardsProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Responsive dimensions
  const getResponsiveDimensions = () => {
    if (typeof window === 'undefined') return { width: containerWidth, height: containerHeight };
    
    const width = window.innerWidth;
    if (width < 640) {
      // Mobile
      return { width: 280, height: 320, cardSize: 200 };
    } else if (width < 1024) {
      // Tablet
      return { width: 600, height: 380, cardSize: 260 };
    } else {
      // Desktop
      return { width: 1500, height: 350, cardSize: 240 };
    }
  };

  const [dimensions, setDimensions] = React.useState(() => getResponsiveDimensions());

  React.useEffect(() => {
    const handleResize = () => {
      setDimensions(getResponsiveDimensions());
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.card',
        { scale: 0 },
        {
          scale: 1,
          stagger: animationStagger,
          ease: easeType,
          delay: animationDelay
        }
      );
    }, containerRef);
    return () => ctx.revert();
  }, [animationDelay, animationStagger, easeType]);

  const getNoRotationTransform = (transformStr: string): string => {
    const translateMatch = transformStr.match(/translate\([-0-9.]+px,\s*[-0-9.]+px\)/);
    return translateMatch ? translateMatch[0] : 'translate(0px, 0px)';
  };

  const getPushedTransform = (baseTransform: string, offsetX: number): string => {
    const translateRegex = /translate\(([-0-9.]+)px,\s*([-0-9.]+)px\)/;
    const match = baseTransform.match(translateRegex);
    if (match) {
      const currentX = parseFloat(match[1]);
      const currentY = parseFloat(match[2]);
      const newX = currentX + offsetX;
      return baseTransform.replace(translateRegex, `translate(${newX}px, ${currentY}px)`);
    } else {
      return `translate(${offsetX}px, 0px)`;
    }
  };

  const pushSiblings = (hoveredIdx: number) => {
    const q = gsap.utils.selector(containerRef);
    if (!enableHover || !containerRef.current) return;

    images.forEach((_, i) => {
      const selector = q(`.card-${i}`);
      gsap.killTweensOf(selector);

      const baseTransform = transformStyles[i] || 'none';

      if (i === hoveredIdx) {
        const noRotation = getNoRotationTransform(baseTransform);
        gsap.to(selector, {
          transform: noRotation,
          duration: 0.4,
          ease: 'back.out(1.4)',
          overwrite: 'auto'
        });
      } else {
        const offsetX = i < hoveredIdx ? -160 : 160;
        const pushedTransform = getPushedTransform(baseTransform, offsetX);

        const distance = Math.abs(hoveredIdx - i);
        const delay = distance * 0.05;

        gsap.to(selector, {
          transform: pushedTransform,
          duration: 0.4,
          ease: 'back.out(1.4)',
          delay,
          overwrite: 'auto'
        });
      }
    });
  };

  const resetSiblings = () => {
    if (!enableHover || !containerRef.current) return;
    const q = gsap.utils.selector(containerRef);

    images.forEach((_, i) => {
      const selector = q(`.card-${i}`);
      gsap.killTweensOf(selector);

      const baseTransform = transformStyles[i] || 'none';
      gsap.to(selector, {
        transform: baseTransform,
        duration: 0.4,
        ease: 'back.out(1.4)',
        overwrite: 'auto'
      });
    });
  };

  return (
    <div
      className={`relative flex items-center justify-center overflow-visible ${className}`}
      ref={containerRef}
      style={{
        width: dimensions.width,
        height: dimensions.height,
        perspective: '1200px',
        transformStyle: 'preserve-3d' as any,
        maxWidth: '100%'
      }}
    >
      {images.map((src, idx) => (
        <div
          key={idx}
          className={`card card-${idx} absolute border-4 sm:border-6 md:border-8 border-white rounded-[20px] sm:rounded-[25px] md:rounded-[30px] overflow-hidden flex-shrink-0 cursor-pointer group`}
          style={{
            width: `${dimensions.cardSize}px`,
            height: `${dimensions.cardSize}px`,
            boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)',
            transform: transformStyles[idx] || 'none',
            flexShrink: 0,
            transition: 'filter 0.3s ease, box-shadow 0.3s ease'
          }}
          onMouseEnter={() => {
            pushSiblings(idx);
            const element = document.querySelector(`.card-${idx}`) as HTMLElement;
            if (element) {
              element.style.filter = 'brightness(1.15) drop-shadow(0 8px 20px rgba(255, 0, 0, 0.4))';
              element.style.boxShadow = '0 8px 25px rgba(255, 0, 0, 0.5)';
            }
          }}
          onMouseLeave={() => {
            resetSiblings();
            const element = document.querySelector(`.card-${idx}`) as HTMLElement;
            if (element) {
              element.style.filter = 'brightness(1)';
              element.style.boxShadow = '0 4px 10px rgba(0, 0, 0, 0.2)';
            }
          }}
          onClick={() => onCardClick?.(idx, src)}
        >
          <img className="w-full h-full object-cover" src={src} alt={`card-${idx}`} />
        </div>
      ))}
    </div>
  );
}
