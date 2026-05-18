"use client";

import React, { useEffect, useState } from "react";
import Navbar2 from "@/components/Home/Navbar2";
import WorkCards from "@/components/Home/ProjectCards";
import { createClient } from "next-sanity";
import { projectId, dataset, apiVersion } from "../../sanity/env";

const sanityClient = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: true,
});

type DharCard = {
  src: string;
  title: string;
  rotation: number;
  position: string;
  z: string;
  url: string;
};

const Work = () => {
  // Aap ka exact original array configuration
  const [dharVideos, setDharVideos] = useState<DharCard[]>([
    {
      src: `/dhar-vid15.mp4`,
      title: `Dhar Vid 1`,
      rotation: 3,
      position: "lg:-translate-y-3",
      z: "z-20",
      url: "https://facebook.com",
    },
    {
      src: `/dhar-vid18.mp4`,
      title: `Dhar Vid 2`,
      rotation: -3,
      position: "lg:-translate-y-4",
      z: "z-20",
      url: "https://facebook.com",
    },
    {
      src: `/dhar-vid9.mp4`,
      title: `Dhar Vid 3`,
      rotation: 5,
      position: "lg:translate-y-2",
      z: "z-30",
      url: "https://facebook.com",
    },
    {
      src: `/dhar-vid4.mp4`,
      title: `Dhar Vid 4`,
      rotation: 3,
      position: "lg:-translate-y-3",
      z: "z-20",
      url: "https://facebook.com",
    },
    {
      src: `/dhar-vid5.mp4`,
      title: `Dhar Vid 5`,
      rotation: -3,
      position: "lg:-translate-y-4",
      z: "z-20",
      url: "https://facebook.com",
    },
    {
      src: `/dhar-vid6.mp4`,
      title: `Dhar Vid 6`,
      rotation: 5,
      position: "lg:translate-y-2",
      z: "z-30",
      url: "https://facebook.com",
    },
    {
      src: `/dhar-vid7.mp4`,
      title: `Dhar Vid 7`,
      rotation: 3,
      position: "lg:-translate-y-3",
      z: "z-20",
      url: "https://facebook.com",
    },
    {
      src: `/dhar-vid8.mp4`,
      title: `Dhar Vid 8`,
      rotation: -3,
      position: "lg:-translate-y-4",
      z: "z-20",
      url: "https://facebook.com",
    },
    {
      src: `/dhar-vid3.mp4`,
      title: `Dhar Vid 9`,
      rotation: 5,
      position: "lg:translate-y-2",
      z: "z-30",
      url: "https://facebook.com",
    },
    {
      src: `/dhar-vid10.mp4`,
      title: `Dhar Vid 10`,
      rotation: 3,
      position: "lg:-translate-y-3",
      z: "z-20",
      url: "https://facebook.com",
    },
    {
      src: `/dhar-vid11.mp4`,
      title: `Dhar Vid 11`,
      rotation: -3,
      position: "lg:-translate-y-4",
      z: "z-20",
      url: "https://facebook.com",
    },
    {
      src: `/dhar-vid12.mp4`,
      title: `Dhar Vid 12`,
      rotation: 5,
      position: "lg:translate-y-2",
      z: "z-30",
      url: "https://facebook.com",
    },
    {
      src: `/dhar-vid13.mp4`,
      title: `Dhar Vid 13`,
      rotation: 3,
      position: "lg:-translate-y-3",
      z: "z-20",
      url: "https://facebook.com",
    },
    {
      src: `/dhar-vid14.mp4`,
      title: `Dhar Vid 14`,
      rotation: -3,
      position: "lg:-translate-y-4",
      z: "z-20",
      url: "https://facebook.com",
    },
    {
      src: `/dhar-vid1.mp4`,
      title: `Dhar Vid 15`,
      rotation: 5,
      position: "lg:translate-y-2",
      z: "z-30",
      url: "https://facebook.com",
    },
    {
      src: `/dhar-vid16.mp4`,
      title: `Dhar Vid 16`,
      rotation: 3,
      position: "lg:-translate-y-3",
      z: "z-20",
      url: "https://facebook.com",
    },
    {
      src: `/dhar-vid17.mp4`,
      title: `Dhar Vid 17`,
      rotation: -3,
      position: "lg:-translate-y-4",
      z: "z-20",
      url: "https://facebook.com",
    },
    {
      src: `/dhar-vid2.mp4`,
      title: `Dhar Vid 18`,
      rotation: 5,
      position: "lg:translate-y-2",
      z: "z-30",
      url: "https://facebook.com",
    },
    {
      src: `/dhar-vid19.mp4`,
      title: `Dhar Vid 19`,
      rotation: 3,
      position: "lg:-translate-y-3",
      z: "z-20",
      url: "https://facebook.com",
    },
    {
      src: `/dhar-vid20.mp4`,
      title: `Dhar Vid 20`,
      rotation: -3,
      position: "lg:-translate-y-4",
      z: "z-20",
      url: "https://facebook.com",
    },
    {
      src: `/dhar-vid21.mp4`,
      title: `Dhar Vid 21`,
      rotation: 5,
      position: "lg:translate-y-2",
      z: "z-30",
      url: "https://facebook.com",
    },
  ]);

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        // Sanity say direct 21 fields ka dynamic data manga rahay hain
        const data = await sanityClient.fetch(
          `*[_type == "dharManVideos"][0]{
            "v1": video1.asset->url, "v2": video2.asset->url, "v3": video3.asset->url,
            "v4": video4.asset->url, "v5": video5.asset->url, "v6": video6.asset->url,
            "v7": video7.asset->url, "v8": video8.asset->url, "v9": video9.asset->url,
            "v10": video10.asset->url, "v11": video11.asset->url, "v12": video12.asset->url,
            "v13": video13.asset->url, "v14": video14.asset->url, "v15": video15.asset->url,
            "v16": video16.asset->url, "v17": video17.asset->url, "v18": video18.asset->url,
            "v19": video19.asset->url, "v20": video20.asset->url, "v21": video21.asset->url
          }`
        );

        if (data) {
          setDharVideos((prev) =>
            prev.map((video, idx) => {
              const sanityUrl = data[`v${idx + 1}`];
              return {
                ...video,
                // Agar Sanity field main video ho to replace kare, warna original src chalay
                src: sanityUrl || video.src,
              };
            })
          );
        }
      } catch (error) {
        console.error("Sanity videos fetch karne main error aya:", error);
      }
    };

    fetchVideos();
  }, []);

  const chunkedCards: DharCard[][] = [];
  for (let index = 0; index < dharVideos.length; index += 3) {
    chunkedCards.push(dharVideos.slice(index, index + 3));
  }

  return (
    <div data-navbar-theme="dark" className="relative bg-black text-white pt-20">
      <Navbar2 />
      {chunkedCards.map((cards, index) => (
        <WorkCards
          key={`dhar-row-${index + 1}`}
          title={
            index === 0 ? (
              <>
                lets take a look <br /> at some stuff!
              </>
            ) : (
              ""
            )
          }
          cards={cards}
        />
      ))}
    </div>
  );
};

export default Work;
