"use client";

import React from "react";
import Navbar2 from "@/components/Home/Navbar2";
import Image from "next/image";
import Link from "next/link";

const dharVideos = [
  { src: "/dhar-vid15.mp4", url: "https://www.facebook.com/reel/1374677124586380/?fs=e&s=TIeQ9V&fs=e&mibextid=wwXIfr&fs=e" },
  { src: "/dhar-vid18.mp4", url: "https://www.facebook.com/reel/2157316641787332/?fs=e&s=TIeQ9V&fs=e&mibextid=wwXIfr&fs=e" },
  { src: "/dhar-vid9.mp4", url: "https://www.facebook.com/reel/1518571199689824/?fs=e&s=TIeQ9V&fs=e&mibextid=wwXIfr&fs=e" },
  { src: "/dhar-vid4.mp4", url: "https://www.facebook.com/reel/753940794236269/?fs=e&s=TIeQ9V&fs=e&mibextid=wwXIfr&fs=e" },
  { src: "/dhar-vid5.mp4", url: "https://www.facebook.com/reel/895100943133054/?fs=e&s=TIeQ9V&fs=e&mibextid=wwXIfr&fs=e" },
  { src: "/dhar-vid6.mp4", url: "https://www.facebook.com/reel/1226322962968406/?fs=e&s=TIeQ9V&fs=e&mibextid=wwXIfr&fs=e" },
  { src: "/dhar-vid7.mp4", url: "https://www.facebook.com/reel/4722349194659661/?fs=e&s=TIeQ9V&fs=e&mibextid=wwXIfr&fs=e" },
  { src: "/dhar-vid8.mp4", url: "https://www.facebook.com/reel/2000749630506015/?fs=e&s=TIeQ9V&fs=e&mibextid=wwXIfr&fs=e" },
  { src: "/dhar-vid3.mp4", url: "https://www.facebook.com/reel/1534439230974768/?fs=e&s=TIeQ9V&fs=e&mibextid=wwXIfr&fs=e" },
  { src: "/dhar-vid10.mp4", url: "https://www.facebook.com/reel/1937476916856780/?fs=e&s=TIeQ9V&fs=e&mibextid=wwXIfr&fs=e" },
  { src: "/dhar-vid11.mp4", url: "https://www.facebook.com/reel/1467796688185164/?fs=e&s=TIeQ9V&fs=e&mibextid=wwXIfr&fs=e" },
  { src: "/dhar-vid12.mp4", url: "https://www.facebook.com/reel/1952167442062810/?fs=e&s=TIeQ9V&fs=e&mibextid=wwXIfr&fs=ep" },
  { src: "/dhar-vid13.mp4", url: "https://www.facebook.com/reel/1866947627334438/?fs=e&s=TIeQ9V&fs=e&mibextid=wwXIfr&fs=e" },
  { src: "/dhar-vid14.mp4", url: "https://www.facebook.com/reel/1653526488983614/?fs=e&s=TIeQ9V&fs=e&mibextid=wwXIfr&fs=e" },
  { src: "/dhar-vid1.mp4", url: "https://www.facebook.com/reel/3106151496255646/?fs=e&s=TIeQ9V&fs=e&mibextid=wwXIfr&fs=e" },
  { src: "/dhar-vid16.mp4", url: "https://www.facebook.com/reel/777540368542835/?fs=e&s=TIeQ9V&fs=e&mibextid=wwXIfr&fs=e" },
  { src: "/dhar-vid17.mp4", url: "https://www.facebook.com/reel/967316185707268/?fs=e&s=TIeQ9V&fs=e&mibextid=wwXIfr&fs=e" },
  { src: "/dhar-vid2.mp4", url: "https://www.facebook.com/reel/1624580525651841/?fs=e&mibextid=wwXIfr&fs=e" },
  { src: "/dhar-vid19.mp4", url: "https://www.facebook.com/reel/1584611205930844/?fs=e&s=TIeQ9V&fs=e&mibextid=wwXIfr&fs=e" },
  { src: "/dhar-vid20.mp4", url: "https://www.facebook.com/reel/1677144660298378/?fs=e&s=TIeQ9V&fs=e&mibextid=wwXIfr&fs=e" },
  { src: "/dhar-vid21.mp4", url: "https://www.facebook.com/reel/1533301131544897/?fs=e&s=TIeQ9V&fs=e&mibextid=wwXIfr&fs=e" },
];

const empMedia = [
  { type: "video", src: "/empVid-compressed.mp4" },
  { type: "image", src: "/EOTY-1.jpeg" },
  { type: "image", src: "/EOTY-2.jpeg" },
  { type: "image", src: "/EOTY-3.jpeg" },
  { type: "image", src: "/EOTY-4.jpeg" },
];

const roadMedia = [
  { type: "youtube", src: "https://www.youtube.com/embed/KLyFGT-RKeU" },
  { type: "image", src: "/road5.jpg" },
  { type: "image", src: "/road1.jpeg" },
  { type: "image", src: "/road2.jpg" },
  { type: "image", src: "/road3.jpg" },
  { type: "image", src: "/road4.jpg" },
  { type: "image", src: "/road6.jpg" },
  { type: "image", src: "/road7.jpg" },
  { type: "image", src: "/road8.jpg" },
  { type: "image", src: "/road9.jpg" },
  { type: "image", src: "/road10.jpg" },
  { type: "image", src: "/road11.jpg" },
  { type: "image", src: "/road12.jpg" },
  { type: "image", src: "/road13.jpg" },
  { type: "image", src: "/road14.jpg" },
  { type: "image", src: "/road15.jpg" },
  { type: "image", src: "/road16.jpg" },
];

const ProjectsPage = () => {
  return (
    <main className="min-h-screen bg-black text-white px-6 md:px-12 lg:px-20 pb-20 pt-32">
      <Navbar2 />
      
      {/* Dhar Mann Section */}
      <section className="mb-14">
      <Link href="/dhar-man">
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-lime font-black uppercase tracking-tighter text-center mb-12 italic">
          Dhar Mann
        </h2>
        </Link>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {dharVideos.map((item, index) => (
            <a key={index} href={item.url} target="_blank" rel="noopener noreferrer" className="block aspect-square bg-gray-900 rounded-lg overflow-hidden relative group border border-white/10">
              <video
                src={item.src}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                muted
                autoPlay
                loop
                playsInline
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-300 flex items-center justify-center">
                 <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-xs font-bold font-lime uppercase bg-black/50 px-3 py-1 rounded-full border border-white/20">View</span>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* Employee of the Year Section */}
      <section className="mb-14">
        <Link href="/employee-of-the-year">
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-lime font-black uppercase tracking-tighter text-center mb-12 italic">
          Employee <span className="italic">of the Year</span>
        </h2>
        </Link>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {empMedia.map((item, index) => (
            <div key={index} className="aspect-square bg-gray-900 rounded-lg overflow-hidden relative border border-white/10">
              {item.type === "video" ? (
                <video
                  src={item.src}
                  className="w-full h-full object-cover"
                  muted
                  autoPlay
                  loop
                  playsInline
                />
              ) : (
                <Image
                  src={item.src}
                  alt={`EOTY Scene ${index}`}
                  fill
                  className="object-cover"
                />
              )}
            </div>
          ))}
        </div>
      </section>

      {/* The Road Section */}
      <section>
        <Link href="the-road">
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-lime font-black uppercase tracking-tighter text-center mb-12 italic">
          The <span className="italic">Road</span>
        </h2>
        </Link>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {roadMedia.map((item, index) => (
            <div key={index} className="aspect-square bg-gray-900 rounded-lg overflow-hidden relative border border-white/10">
              {item.type === "youtube" ? (
                <iframe
                  className="w-full h-full"
                  src={item.src}
                  title="The Road Video"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              ) : (
                <Image
                  src={item.src}
                  alt={`Road Scene ${index}`}
                  fill
                  className="object-cover"
                />
              )}
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default ProjectsPage;
