'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { FadeInView } from '@/components/common/Animations';

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const slides = [
    {
      url: '/images/hero1.jpg',
      title: '유럽으로 떠나는 한 달 여행',
      subtitle: '2025년, 우리의 특별한 순간'
    },
    {
      url: '/images/hero2.jpg',
      title: '느린 여행, 깊은 행복',
      subtitle: '매 순간을 음미하며 만나는 새로운 경험'
    }
    // 더 많은 이미지 추가 가능
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-screen bg-background dark:bg-background-dark">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            currentSlide === index ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div className="relative w-full h-full">
            <Image
              src={slide.url}
              alt={slide.title}
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-black bg-opacity-40" />
            <FadeInView>
              <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
                <h1 className="text-4xl md:text-6xl font-bold mb-4 text-center px-4">
                  {slide.title}
                </h1>
                <p className="text-xl md:text-2xl text-center px-4">
                  {slide.subtitle}
                </p>
              </div>
            </FadeInView>
          </div>
        </div>
      ))}

      {/* 슬라이드 네비게이션 */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full transition-all ${
              currentSlide === index ? 'bg-white w-8' : 'bg-white/50'
            }`}
            onClick={() => setCurrentSlide(index)}
            aria-label={`슬라이드 ${index + 1}로 이동`}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero; 