"use client";

import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import itemsData from "@/data/items.json";

export default function HomePage() {
  return (
    <main>
      <section className="py-12">
        <h2 className="text-2xl font-bold mb-6 text-center">無料素材ピックアップ</h2>
        <Swiper
          spaceBetween={20}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {itemsData.items.map((item) => (
            <SwiperSlide key={item.id}>
              <Link href={`/view/${item.id}`}>
                <div className="bg-white rounded-xl shadow p-2">
                  <Image
                    src={item.previewSrc}
                    alt={item.title}
                    width={400}
                    height={300}
                    className="rounded-lg"
                  />
                  <p className="mt-2 text-center">{item.title}</p>
                </div>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
    </main>
  );
}
