'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

const Hero = () => {
  const heroImages = [
    {
      url: '/images/hero1.jpg',
      title: '유럽으로 떠나는 한 달 여행',
      subtitle: '2025년, 우리의 특별한 순간'
    },
    {
      url: '/images/hero2.jpg',
      title: '느린 여행, 깊은 행복',
      subtitle: '매 순간을 음미하며 만나는 새로운 경험'
    },
    {
      url: '/images/hero3.jpg',
      title: '유럽의 숨겨진 보물',
      subtitle: '현지인처럼 살아보는 특별한 경험'
    },
    {
      url: '/images/hero4.jpg',
      title: '기차로 이어지는 도시들',
      subtitle: '유럽 횡단 철도 여행의 로맨스'
    },
    {
      url: '/images/hero5.jpg',
      title: '예술과 역사가 숨쉬는 곳',
      subtitle: '시간이 멈춘 듯한 유럽의 거리에서'
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % heroImages.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-screen h-screen overflow-hidden">
      {heroImages.map((slide, index) => (
        <div
          key={index}
          className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1000
            ${currentIndex === index ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
        >
          <div className="relative w-full h-full">
            <Image
              src={slide.url}
              alt={slide.title}
              fill
              className="object-cover"
              sizes="100vw"
              priority={index === 0}
              style={{
                objectFit: 'cover',
                objectPosition: 'center'
              }}
            />
            <div className="absolute inset-0 bg-black bg-opacity-40" />
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <div className="text-center text-white px-4 max-w-4xl mx-auto">
                <h1 className="text-4xl md:text-6xl font-bold mb-4">
                  {slide.title}
                </h1>
                <p className="text-xl md:text-2xl">
                  {slide.subtitle}
                </p>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* 인디케이터 */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
        {heroImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full transition-all duration-200 
              ${currentIndex === index ? 'bg-white w-8' : 'bg-white/50 hover:bg-white/75'}`}
            aria-label={`슬라이드 ${index + 1}로 이동`}
          />
        ))}
      </div>
    </div>
  );
};

export default Hero;