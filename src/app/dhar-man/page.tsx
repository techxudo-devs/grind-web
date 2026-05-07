import React from "react";
import Navbar2 from "@/components/Home/Navbar2";
import WorkCards from "@/components/Home/ProjectCards";

type DharCard = {
  src: string;
  title: string;
  rotation: number;
  position: string;
  z: string;
  url: string;
};

const dharVideos: DharCard[] = [
  {
    src: `/dhar-vid1.mp4`,
    title: `Dhar Vid 1`,
    rotation: 3,
    position: "lg:-translate-y-3",
    z: "z-20",
    url: "https://www.facebook.com/reel/3106151496255646/?fs=e&s=TIeQ9V&fs=e&mibextid=wwXIfr&fs=e", // Video 1 URL
  },
  {
    src: `/dhar-vid2.mp4`,
    title: `Dhar Vid 2`,
    rotation: -3,
    position: "lg:-translate-y-4",
    z: "z-20",
    url: "https://www.facebook.com/reel/1624580525651841/?fs=e&mibextid=wwXIfr&fs=e", // Video 2 URL
  },
  {
    src: `/dhar-vid3.mp4`,
    title: `Dhar Vid 3`,
    rotation: 5,
    position: "lg:translate-y-2",
    z: "z-30",
    url: "https://www.facebook.com/reel/1534439230974768/?fs=e&s=TIeQ9V&fs=e&mibextid=wwXIfr&fs=e", // Video 3 URL
  },
  {
    src: `/dhar-vid4.mp4`,
    title: `Dhar Vid 4`,
    rotation: 3,
    position: "lg:-translate-y-3",
    z: "z-20",
    url: "https://www.facebook.com/reel/753940794236269/?fs=e&s=TIeQ9V&fs=e&mibextid=wwXIfr&fs=e", // Video 4 URL
  },
  {
    src: `/dhar-vid5.mp4`,
    title: `Dhar Vid 5`,
    rotation: -3,
    position: "lg:-translate-y-4",
    z: "z-20",
    url: "https://www.facebook.com/reel/895100943133054/?fs=e&s=TIeQ9V&fs=e&mibextid=wwXIfr&fs=e", // Video 5 URL
  },
  {
    src: `/dhar-vid6.mp4`,
    title: `Dhar Vid 6`,
    rotation: 5,
    position: "lg:translate-y-2",
    z: "z-30",
    url: "https://www.facebook.com/reel/1226322962968406/?fs=e&s=TIeQ9V&fs=e&mibextid=wwXIfr&fs=e", // Video 6 URL
  },
  {
    src: `/dhar-vid7.mp4`,
    title: `Dhar Vid 7`,
    rotation: 3,
    position: "lg:-translate-y-3",
    z: "z-20",
    url: "https://www.facebook.com/reel/4722349194659661/?fs=e&s=TIeQ9V&fs=e&mibextid=wwXIfr&fs=e", // Video 7 URL
  },
  {
    src: `/dhar-vid8.mp4`,
    title: `Dhar Vid 8`,
    rotation: -3,
    position: "lg:-translate-y-4",
    z: "z-20",
    url: "https://www.facebook.com/reel/2000749630506015/?fs=e&s=TIeQ9V&fs=e&mibextid=wwXIfr&fs=e", // Video 8 URL
  },
  {
    src: `/dhar-vid9.mp4`,
    title: `Dhar Vid 9`,
    rotation: 5,
    position: "lg:translate-y-2",
    z: "z-30",
    url: "https://www.facebook.com/reel/1518571199689824/?fs=e&s=TIeQ9V&fs=e&mibextid=wwXIfr&fs=e", // Video 9 URL
  },
  {
    src: `/dhar-vid10.mp4`,
    title: `Dhar Vid 10`,
    rotation: 3,
    position: "lg:-translate-y-3",
    z: "z-20",
    url: "https://www.facebook.com/reel/1937476916856780/?fs=e&s=TIeQ9V&fs=e&mibextid=wwXIfr&fs=e", // Video 10 URL
  },
  {
    src: `/dhar-vid11.mp4`,
    title: `Dhar Vid 11`,
    rotation: -3,
    position: "lg:-translate-y-4",
    z: "z-20",
    url: "https://www.facebook.com/reel/1467796688185164/?fs=e&s=TIeQ9V&fs=e&mibextid=wwXIfr&fs=e", // Video 11 URL
  },
  {
    src: `/dhar-vid12.mp4`,
    title: `Dhar Vid 12`,
    rotation: 5,
    position: "lg:translate-y-2",
    z: "z-30",
    url: "https://www.facebook.com/reel/1952167442062810/?fs=e&s=TIeQ9V&fs=e&mibextid=wwXIfr&fs=e", // Video 12 URL
  },
  {
    src: `/dhar-vid13.mp4`,
    title: `Dhar Vid 13`,
    rotation: 3,
    position: "lg:-translate-y-3",
    z: "z-20",
    url: "https://www.facebook.com/reel/1866947627334438/?fs=e&s=TIeQ9V&fs=e&mibextid=wwXIfr&fs=e",
  },
  {
    src: `/dhar-vid14.mp4`,
    title: `Dhar Vid 14`,
    rotation: -3,
    position: "lg:-translate-y-4",
    z: "z-20",
    url: "https://www.facebook.com/reel/1653526488983614/?fs=e&s=TIeQ9V&fs=e&mibextid=wwXIfr&fs=e",
  },
  {
    src: `/dhar-vid15.mp4`,
    title: `Dhar Vid 15`,
    rotation: 5,
    position: "lg:translate-y-2",
    z: "z-30",
    url: "https://www.facebook.com/reel/1374677124586380/?fs=e&s=TIeQ9V&fs=e&mibextid=wwXIfr&fs=e",
  },
  {
    src: `/dhar-vid16.mp4`,
    title: `Dhar Vid 16`,
    rotation: 3,
    position: "lg:-translate-y-3",
    z: "z-20",
    url: "https://www.facebook.com/reel/777540368542835/?fs=e&s=TIeQ9V&fs=e&mibextid=wwXIfr&fs=e",
  },
  {
    src: `/dhar-vid17.mp4`,
    title: `Dhar Vid 17`,
    rotation: -3,
    position: "lg:-translate-y-4",
    z: "z-20",
    url: "https://www.facebook.com/reel/967316185707268/?fs=e&s=TIeQ9V&fs=e&mibextid=wwXIfr&fs=e",
  },
  {
    src: `/dhar-vid18.mp4`,
    title: `Dhar Vid 18`,
    rotation: 5,
    position: "lg:translate-y-2",
    z: "z-30",
    url: "https://www.facebook.com/reel/2157316641787332/?fs=e&s=TIeQ9V&fs=e&mibextid=wwXIfr&fs=e",
  },
  {
    src: `/dhar-vid19.mp4`,
    title: `Dhar Vid 19`,
    rotation: 3,
    position: "lg:-translate-y-3",
    z: "z-20",
    url: "https://www.facebook.com/reel/1584611205930844/?fs=e&s=TIeQ9V&fs=e&mibextid=wwXIfr&fs=e",
  },
  {
    src: `/dhar-vid20.mp4`,
    title: `Dhar Vid 20`,
    rotation: -3,
    position: "lg:-translate-y-4",
    z: "z-20",
    url: "https://www.facebook.com/reel/1677144660298378/?fs=e&s=TIeQ9V&fs=e&mibextid=wwXIfr&fs=e",
  },
  {
    src: `/dhar-vid21.mp4`,
    title: `Dhar Vid 21`,
    rotation: 5,
    position: "lg:translate-y-2",
    z: "z-30",
    url: "https://www.facebook.com/reel/1533301131544897/?fs=e&s=TIeQ9V&fs=e&mibextid=wwXIfr&fs=e",
  },
];

const chunkedCards: DharCard[][] = [];
for (let index = 0; index < dharVideos.length; index += 3) {
  chunkedCards.push(dharVideos.slice(index, index + 3));
}

const Work = () => {
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
