'use client';

import React, { useEffect, useState } from 'react';
import Navbar from '@/components/Home/Navbar2';
import Image from 'next/image'
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";

const GalleryPage = () => {
  const [sanityImages, setSanityImages] = useState<(string | null)[]>([]);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const data = await client.fetch('*[_type == "galleryContent"][0]');
        if (data) {
          const imgs = Array.from({ length: 12 }, (_, i) => {
            const img = data[`galleryImg${i + 1}`];
            return img ? urlFor(img).url() : null;
          });
          setSanityImages(imgs);
        }
      } catch (error) {
        console.error("Error fetching gallery images from Sanity:", error);
      }
    };
    fetchImages();
  }, []);

  const defaultImages = [
    "/gallery1.JPG",
    "/gallery2.JPG",
    "/gallery3.JPG",
    "/gallery4.JPG",
    "/gallery5.JPG",
    "/gallery6.JPG",
    "/gallery7.jpg",
    "/galler8.jpg",
    "/gallery9.jpg",
    "/gallery10.JPG",
    "/gallery11.JPG",
    "/gallery12.JPG",
  ];

  const displayImages = defaultImages.map((src, idx) => sanityImages[idx] || src);

  return (
    <main className="min-h-screen bg-black text-white px-4 py-10 md:px-10 lg:pb-10 pt-40">
        <Navbar />
      {/* Header Section */}
      <header className="max-w-3xl mb-10 mx-auto">
        <h1 className="text-4xl md:text-5xl italic font-lime font-bold text-center tracking-tighter mb-4 uppercase">
          Visual Anthology
        </h1>
        <p className="text-gray-400 text-sm md:text-base max-w-2xl leading-normal text-center mx-auto">
          A curated collection of moments, perspectives, and raw aesthetics. 
          Capturing the intersection of light and shadow through a modern lens.
        </p>
      </header>

      <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
        {displayImages.map((src, index) => (
          <div 
            key={index} 
            className="relative group overflow-hidden break-inside-avoid rounded-sm bg-zinc-900"
          >
            <Image
              src={src}
              alt={`Gallery Image ${index + 1}`}
              width={800}
              height={1000}
              className="w-full h-auto object-cover transition-all duration-500 group-hover:scale-105 group-hover:opacity-80"
              priority={index < 3} // Priority load first few images
            />
          </div>
        ))}
      </div>
    </main>
  )
}

export default GalleryPage