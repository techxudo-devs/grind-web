"use client";

import React, { useEffect, useState } from "react";
import Navbar2 from "@/components/Home/Navbar2";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";

const AboutPage = () => {
  const [sanityImage, setSanityImage] = useState<string | null>(null);

  useEffect(() => {
    const fetchImage = async () => {
      try {
        const data = await client.fetch('*[_type == "aboutPageContent"][0]');
        if (data?.mainImage) {
          setSanityImage(urlFor(data.mainImage).url());
        }
      } catch (error) {
        console.error("Error fetching about image from Sanity:", error);
      }
    };
    fetchImage();
  }, []);

  const defaultImage = "/kadir.jpg";
  const displayImage = sanityImage || defaultImage;

  return (
    <main className="min-h-screen bg-black px-4 text-white sm:px-8 md:px-10 pb-10">
        <Navbar2 />
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-8 pt-36">
        <div className="flex w-full justify-center">
          <img
          loading="lazy"
            src={displayImage}
            alt="Portrait of Kadir"
            className="h-auto max-h-[450px] w-auto max-w-full rounded-[20px] border border-white/10 bg-white/5 object-contain"
          />
        </div>
        <p className='max-w-6xl mx-auto text-center text-base md:text-lg font-regular'>Kadir Mayel is a filmmaker, cinematographer, and founder of Twelve Tablets Productions. With a background in engineering and a deep passion for storytelling, he brings a bold visual style and emotional depth to his work. His films often explore themes of identity, memory, and transformation, blending grounded realism with high-concept ideas. Kadir has written and directed several acclaimed short films and is currently developing his first feature. He studied at the New York Film Academy and continues to push creative boundaries through both narrative and commercial </p>
      </div>
    </main>
  );
};

export default AboutPage;
