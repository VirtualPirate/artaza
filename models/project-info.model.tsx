type ProjectInfoType = {
  image: string;
  name: string;
  description: string;
  visitLink: string;
  codeLink: string;

  visitButtonText?: string;
};

const projects: Array<ProjectInfoType> = [
  {
    image: "./graphics/project/azcreationstudio.png",
    name: "AZ CREATION STUDIO",
    description: `A design intensive portfolio for a client, AZCreation Studio. This website is heavily animated. It has it’s own gallery system . This website is created using NextJS and Typescript`,
    visitLink: "https://azcreation.pages.dev/",
    codeLink: "",
  },

  {
    image: "./graphics/project/tilematchpuzzle.png",
    name: "TILE MATCH PUZZLE",
    description: `Created this tile match puzzle game with fun audio effects. This was created using plain HTML, CSS and Javascript. But, I also recreated it using ReactJS`,
    visitLink: "https://fervent-shaw-814e26.netlify.app/",
    codeLink: "",
  },

  {
    image: "./graphics/project/youtubedownloader_web.png",
    name: "YOUTUBE DOWNLOADER (WEB)",
    description:
      "A Youtube video and audio downloder, created on the web using Svelte. I created a backend for parsing youtube video data",
    visitLink: "https://tube-download.netlify.app/",
    codeLink: "",
  },

  {
    image: "./graphics/project/youtube_downloader.png",
    name: "YOUTUBE DOWNLOADER (DESKTOP)",
    description:
      "This is an GUI application created using Python. It is a Youtube Downloader. That can download Youtube Playlists. This application is created using the Tkinter GUI library",
    visitLink:
      "https://drive.google.com/file/d/1InSBP4TOUZFThS83EKHaWgjCB69fdW31/view",
    codeLink: "",

    visitButtonText: "DOWNLOAD",
  },

  {
    image: "./graphics/project/store.png",
    name: "CROWN STORE CLOTHING",
    description:
      "A E-commerce clothing site with Reactive State Management. And user login and signup system using Firebase. I used Context API and some Redux to create this website",
    visitLink: "https://store132.netlify.app/",
    codeLink: "",
  },
];

export default projects;
