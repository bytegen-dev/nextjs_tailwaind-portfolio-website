import React from "react";
import Heading from "./Heading";
import Card from "./Card";

const data = [
  {
    id: 0,
    title: "Food Plug",
    desc: "FoodPlug restaurant website.",
    img: "https://tertiux-dev.netlify.app/img/weluvfood.png",
    tags: ["HTML", "CSS", "JavaScript"],
    liveSite: "https://weluvfood.netlify.app",
    githubLink: "https://github.com/tertiux",
  },
  {
    id: 1,
    title: "Antic Furnitures",
    desc: "Antic furnitures website.",
    img: "https://tertiux-dev.netlify.app/img/antic.png",
    tags: ["HTML", "CSS", "JavaScript"],
    liveSite: "https://my-antic.netlify.app",
    githubLink: "https://github.com/tertiux",
  },
  {
    id: 2,
    title: "Dictionary App",
    desc: "Dictionary app with API integration.",
    img: "https://tertiux-dev.netlify.app/img/dictionxry.png",
    tags: ["HTML", "CSS", "JavaScript", "API"],
    liveSite: "https://dictionxry.netlify.app",
    githubLink: "https://github.com/tertiux",
  },
  {
    id: 3,
    title: "Artlantis Music",
    desc: "Music streaming website.",
    img: "https://tertiux-dev.netlify.app/img/artlantis.png",
    tags: ["HTML", "CSS", "JavaScript"],
    liveSite: "https://artlantis.netlify.app",
    githubLink: "https://github.com/tertiux",
  },
  {
    id: 4,
    title: "Ignition Labz",
    desc: "Digital marketing landing page.",
    img: "https://tertiux-dev.netlify.app/img/ignition-labz.png",
    tags: ["HTML", "CSS", "JavaScript"],
    liveSite: "https://ignition-labz.netlify.app",
    githubLink: "https://github.com/tertiux",
  },
  {
    id: 5,
    title: "Mastercxrd",
    desc: "E-commerce landing page.",
    img: "https://tertiux-dev.netlify.app/img/mastercxrd.png",
    tags: ["HTML", "CSS", "JavaScript"],
    liveSite: "https://mastercxrd.netlify.app",
    githubLink: "https://github.com/tertiux",
  },
  {
    id: 6,
    title: "XOXO",
    desc: "Xtraordinary React app.",
    img: "https://tertiux-dev.netlify.app/img/xoxotm.png",
    tags: ["React JS", "CSS", "JSX"],
    liveSite: "https://xoxotm.netlify.app",
    githubLink: "https://github.com/tertiux",
  },
  {
    id: 7,
    title: "XO-Weather App",
    desc: "Modern weather app with API integration.",
    img: "https://tertiux-dev.netlify.app/img/xo-weather.png",
    tags: ["API", "React JS", "CSS", "JSX"],
    liveSite: "https://xo-weather.netlify.app",
    githubLink: "https://github.com/tertiux",
  },
  {
    id: 8,
    title: "XO-Notes App",
    desc: "Modern notes app.",
    img: "https://tertiux-dev.netlify.app/img/xo-notes.png",
    tags: ["React JS", "CSS", "JSX"],
    liveSite: "https://xo-notes.netlify.app",
    githubLink: "https://github.com/tertiux",
  },
  {
    id: 9,
    title: "Meme Maker App",
    desc: "Meme maker app with API integration.",
    img: "https://tertiux-dev.netlify.app/img/meme-generator.png",
    tags: ["API", "React JS", "CSS", "JSX"],
    liveSite: "https://isaac-meme-generator.netlify.app",
    githubLink: "https://github.com/tertiux",
  },
  {
    id: 10,
    title: "Trek Todo_",
    desc: "Todo web app with API integration.",
    img: "https://tertiux-dev.netlify.app/img/trek-todo.png",
    tags: ["API", "React JS", "SASS", "JSX"],
    liveSite: "https://trek-todo.netlify.app",
    githubLink: "https://github.com/tertiux",
  },
  {
    id: 11,
    title: "Sound Bridge",
    desc: "Spotify playlist download app with API integration.",
    img: "https://tertiux-dev.netlify.app/img/sound-bridge.png",
    tags: ["API", "React JS", "SASS", "JSX"],
    liveSite: "https://spotify-getter.netlify.app",
    githubLink: "https://github.com/tertiux",
  },
  {
    id: 12,
    title: "Tertiux RPS",
    desc: "AI rock-paper-scissors game with API integration.",
    img: "https://tertiux-dev.netlify.app/img/tertiux-rps.png",
    tags: ["API", "React JS", "SASS", "JSX"],
    liveSite: "https://tertiux-rps.netlify.app",
    githubLink: "https://github.com/tertiux",
  },
  {
    id: 13,
    title: "XO Contacts",
    desc: "Contacts web app with API integration.",
    img: "https://tertiux-dev.netlify.app/img/xo-contacts.png",
    tags: ["API", "React JS", "SASS", "JSX"],
    liveSite: "https://xo-contacts.netlify.app",
    githubLink: "https://github.com/tertiux",
  },
  {
    id: 14,
    title: "Minions Game",
    desc: "Minions kids game.",
    img: "https://tertiux-dev.netlify.app/img/minions-game.png",
    tags: ["React JS", "CSS", "Game", "JSX"],
    liveSite: "https://xo-minions-game.netlify.app",
    githubLink: "https://github.com/tertiux",
  },
  {
    id: 15,
    title: "Idan.TV",
    desc: "Comedy news outlet.",
    img: "https://tertiux-dev.netlify.app/img/idan-tv.png",
    tags: ["React JS", "SASS", "Router v6"],
    liveSite: "https://idan-tv.netlify.app",
    githubLink: "https://github.com/tertiux",
  },
  {
    id: 16,
    title: "Soccer Quiz Hub",
    desc: "Trivia quiz app with PWA and Cordova support.",
    img: "https://tertiux-dev.netlify.app/img/soccerquiz.png",
    tags: ["React JS", "Router v6", "PWA", "Cordova", "SASS"],
    liveSite: "https://soccer-quiz-hub.netlify.app",
    githubLink: "https://github.com/tertiux",
  },
  {
    id: 17,
    title: "VitaGuard UI",
    desc: "UI/UX design using Figma.",
    img: "https://tertiux-dev.netlify.app/img/vitaguard.png",
    tags: ["Figma"],
    liveSite: "https://www.figma.com/file/hmqW1WI2hVOpOxvJbG3YST/VitaGuard?type=design&node-id=0-1&mode=design&t=tRDFAxlSp4fNqit7-0",
    githubLink: "https://github.com/tertiux",
  },
];


const Projects = () => {
  return (
    <div className="container pt-32">
      <Heading title="My Projects" />
      <div className="grid gap-10 xl:gap-0 xl:gap-y-10 md:grid-cols-2 lg:grid-cols-3 place-items-center">
        {data.map((el) => (
          <Card
            key={el.id}
            title={el.title}
            desc={el.desc}
            img={el.img}
            tags={el.tags}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
