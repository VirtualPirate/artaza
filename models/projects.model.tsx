type ProjectType = {
  name: string;
  codeLink: string;
  deployLink: string;
  createdUsing: Array<string>;
};

const projects: Array<ProjectType> = [
  {
    name: "YOUTUBE DOWNLOADER ( GUI )",
    codeLink: "https://github.com/VirtualPirate/YoutubeDownloader",
    deployLink:
      "https://drive.google.com/file/d/1InSBP4TOUZFThS83EKHaWgjCB69fdW31/view?usp=share_link",
    createdUsing: ["python"],
  },
  {
    name: "TILE MATCH PUZZLE",
    codeLink: "https://github.com/VirtualPirate/TileMatchPuzzle",
    deployLink: "https://fervent-shaw-814e26.netlify.app/",
    createdUsing: ["html", "css", "javascript"],
  },
  {
    name: "AutoMath (Algebra Solver APK)",
    codeLink: "",
    deployLink:
      "https://drive.google.com/file/d/1tbVWq8i5VU3AK6Xw1N3nPAw52kTqdaOu/view?usp=sharing",
    createdUsing: ["kotlin", "cpp", "javascript"],
  },

  {
    name: "TicTacToe (Android Apk)",
    codeLink: "",
    deployLink:
      "https://drive.google.com/file/d/12UQnD74o-LOurR6fhiA1dnCyEGJJKd5o/view?usp=sharing",
    createdUsing: ["java"],
  },

  {
    name: "AZCreation (CLIENT PAGE)",
    codeLink: "",
    deployLink: "https://frolicking-gnome-d01d8b.netlify.app/",
    createdUsing: ["html", "css", "javascript"],
  },
];

export default projects;
