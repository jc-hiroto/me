import { FaFile, FaGithub, FaGlobeAmericas, FaInfoCircle } from "react-icons/fa";

const projects = [
  {
    title: "FIRST Tech Challenge (FTC)",
    img: "https://i.imgur.com/g08Ec1k.png",
    desc: "A robotics competition for students to compete in an alliance format against other teams.",
    period: "Jan. 2016 - Oct. 2016",
    info: [
      { emoji: "📱", content: "Developed Android app to make two Android phones act as robot's main controller."},
      { emoji: "⚡️", content: "Modified the Automation and Remote-Control part of code to make the robot finish the task smoother and faster."},
      { emoji: "🗂", content: "Written engineering notebooks and express the designing ideas to the judge through presentation."}
    ],
    profession: ["Robotics", "Java", "Android"],
    btns: [
      {
        title: "About FTC",
        link: "https://www.firstinspires.org/robotics/ftc",
        icon: <FaInfoCircle />
      }
    ]
  },
  {
    title: "Java (OOP course project)",
    img: "https://i.imgur.com/TfBlmQ7.png",
    desc: "Designed database and UI of two Java-based application for tour booking and course planning.",
    period: "Feb. 2020 - June 2020",
    info: [
      { emoji: "⚡️", content:"Developed a custom layered data structure to achieve 50% faster query speed than other teams."},
      { emoji: "🛠", content:"Implemented a customized, user-friendly intuitive interface by creating custom classes. "},
      { emoji: "🥈", content:"Won 2nd place in the class competition."},
    ],
    profession: ["Java", "UI/UX"],
    btns: [
      {
        title: "Repository",
        link: "https://github.com/jc-hiroto/java-2020-final",
        icon: <FaGithub />
      },
      {
        title: "Report",
        link: "https://hackmd.io/@jc-hiroto/Syxb4OuNd",
        icon: <FaFile />
      }
    ]
  },
  {
    title: "MineNTU - NTU in Minecraft",
    img: "https://i.imgur.com/VhD3QFb.gif",
    desc: "Building a virtual campus in Minecraft to facilitate students’ social life despite distance learning.",
    period: "May. 2021 - Dec. 2021",
    info: [
      {emoji: "⚡️", content:"Adopted scrum to shorten development cycle and release new buildings biweekly."},
      {emoji: "🤖", content:"Released linking platform and Discord bot in a week to process a maximum of 800 registrations per day."},
      {emoji: "🤝", content: "Sponsored by Azure and Industrial Development Bureau to hold a Minecraft graduation ceremony in 2021."},
      {emoji: "📥", content: "Donated the Minecraft school map to the Gallery of NTU History."},
    ],
    profession: ["Python", "Vue.js", "Azure"],
    btns: [
      {
        title: "Repository",
        link: "https://github.com/MinecraftNTU",
        icon: <FaGithub />
      },
      {
        title: "Website",
        link: "https://minecraft.myntu.me",
        icon: <FaGlobeAmericas />
      }
    ]
  },
  {
    title: "NTUCourse Neo",
    img: "https://i.imgur.com/RraTCLn.png",
    desc: "A redesigned course planning website for students in National Taiwan University.",
    period: "Nov. 2021 - Present",
    info: [
      { emoji: "💪", content: "Assisted 5000+ students in course planning and gained 1500+ registered users."},
      { emoji: "🔐", content: "Defined RESTful API specification and implemented JWT authorization with Auth0 service. "},
      { emoji: "⚡️", content: "Implemented serverless functions to parse waitlist data from the official course registration system."},
      { emoji: "🤝", content: "Acquired by Office of Academic Affairs of National Taiwan University in Q3 2022."},
    ],
    profession: ["Node.js", "React", "Python", "MongoDB", "PGSQL"],
    btns: [
      {
        title: "Repository",
        link: "https://github.com/NTUCourse-Neo",
        icon: <FaGithub />
      },
      {
        title: "Website",
        link: "https://course.myntu.me",
        icon: <FaGlobeAmericas />
      }
    ]
  },
  {
    title: "Emergency Social Network",
    img: "https://i.imgur.com/Upd4xZa.png",
    desc: "A social network for people to share their emergency information and help each other during earthquakes.",
    period: "Aug. 2022 - Dec. 2022",
    info: [
      { emoji: "📄", content: "Quality Attributes: Reliability, Robustness, Maintainability."},
      { emoji: "👀", content: "Adopted Typescript to support static type checking and reduce runtime errors."},
      { emoji: "🏗", content: "Strictly layered architecture reduces complexity through low coupling."},
    ],
    profession: ["Node.js", "Typescript", "Redis", "TailwindCSS"],
    btns: []
  },
];

export { projects };