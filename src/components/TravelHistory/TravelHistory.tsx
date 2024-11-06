'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

interface TravelSpot {
  id: number;
  city: string;
  country: string;
  image: string;
  description: string;
}

const travelSpots: TravelSpot[] = [
  {
    id: 1,
    city: '파리',
    country: '프랑스',
    image: '/images/paris.jpg',
    description: '에펠탑과 루브르 박물관이 있는 예술의 도시'
  },
  {
    id: 2,
    city: '로마',
    country: '이탈리아',
    image: '/images/rome.jpg',
    description: '콜로세움과 바티칸이 있는 영원한 도시'
  },
  // 더 많은 여행지 추가 가능
];

const TravelHistory = () => {
  return (
    <section id="travel-history" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-3xl md:text-4xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          우리가 방문할 도시들
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {travelSpots.map((spot, index) => (
            <motion.div
              key={spot.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="relative h-64">
                <Image
                  src={spot.image}
                  alt={spot.city}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">
                  {spot.city}, {spot.country}
                </h3>
                <p className="text-gray-600">
                  {spot.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TravelHistory; 