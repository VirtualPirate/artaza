type SkillType = {
  name: string;
  logo: string;
  skillLevel: 1 | 2 | 3 | 4;
};

const skills: Array<SkillType> = [
  { name: "HTML 5", logo: "html.svg", skillLevel: 4 },
  { name: "CSS 3", logo: "css.svg", skillLevel: 4 },
  { name: "Javascript", logo: "javascript.svg", skillLevel: 4 },
  { name: "Typescript", logo: "typescript.svg", skillLevel: 3 },
  { name: "ReactJS", logo: "reactjs.svg", skillLevel: 3 },
  { name: "NextJS", logo: "nextjs.svg", skillLevel: 3 },
  { name: "MongoDB", logo: "mongodb.svg", skillLevel: 3 },
  { name: "WebAssembly", logo: "webassembly.svg", skillLevel: 3 },
  { name: "Web Components", logo: "webcomponent.svg", skillLevel: 4 },
  { name: "git", logo: "git-bash.svg", skillLevel: 4 },
  { name: "Python 3", logo: "python.svg", skillLevel: 4 },
  { name: "Java", logo: "java.svg", skillLevel: 3 },
  { name: "Kotln", logo: "kotlin.svg", skillLevel: 3 },
  { name: "C++", logo: "cpp.svg", skillLevel: 4 },
  { name: "C", logo: "c.svg", skillLevel: 4 },
];

export default skills;
