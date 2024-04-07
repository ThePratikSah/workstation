/* eslint-disable @next/next/no-img-element */
const workstations = [
  {
    title: "Software Developer Setup",
    image: "./assets/featured-workstation.jpeg",
    width: 400,
    height: 600,
  },
  {
    title: "Software Developer Setup",
    image: "./assets/workstation-developer.jpeg",
    width: 400,
    height: 600,
  },
  {
    title: "Music Producer Workstation",
    image: "./assets/workstation-music.jpg",
    width: 800,
    height: 600,
  },
  {
    title: "Youtuber/Streamer Setup",
    image: "./assets/workstation-streamer.jpeg",
    width: 400,
    height: 300,
  },
  {
    title: "Gamer Setup",
    image: "./assets/workstation-gamer.jpg",
    width: 400,
    height: 300,
  },
];

function Gallery() {
  return (
    <div className="text-center bg-base-200 py-16">
      <h1 className="text-4xl font-bold leading-tight mb-4">Gallery</h1>
      <div className="flex flex-wrap gap-5 min-h-[100vh] max-w-[100vw] items-center justify-center overflow-hidden p-10 md:p-20min-h-screen">
        {workstations.map((workstation) => (
          // <div key={workstation.title} className="group relative">
          //   <Image
          //     src={workstation.image}
          //     alt={workstation.title}
          //     width={800}
          //     height={600}
          //     className="rounded-lg object-cover shadow-xl hover:shadow-2xl"
          //   />
          // </div>
          <img
            key={workstation.title}
            width={workstation.width}
            height={workstation.height}
            src={workstation.image}
            alt={workstation.title}
            className={"rounded-lg object-cover shadow-xl"}
          />
        ))}
      </div>
    </div>
  );
}

export default Gallery;
