import { FaFile, FaGithub, FaGlobeAmericas, FaInfoCircle } from "react-icons/fa";

const projects = [
  {
    title: "FIRST Tech Challenge (FTC) Championship",
    img: "https://i.imgur.com/g08Ec1k.png",
    desc: "A robotics competition for students to compete head to head, by designing, building, and programming a robot to compete in an alliance format against other teams.",
    period: "Jan. 2016 - Oct. 2016",
    info: (
      <>
        📱 Developed Android app to make two Android phones act as robot's main controller. <br/>
        ⚡️ Modified the "Automatic" and "Remote-Control" part of code to make the robot finish the task smoother and faster.<br/>
        🗂 Written engineering notebooks and express the designing ideas to the judge through presentation.
      </>
    ),
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
    title: "Java (Object Oriented Programming course project)",
    img: "https://i.imgur.com/TfBlmQ7.png",
    desc: "Designed database and UI of two Java-based application for tour booking and course planning.",
    period: "Feb. 2020 - June 2020",
    info: (
      <>
        ⚡️ Developed a custom layered data structure to achieve 50% faster query speed than other teams.<br/>
        🛠 Implemented a customized, user-friendly intuitive interface by creating custom classes. <br/>
        🥈 Won 2nd place in the class competition.
      </>
    ),
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
    img: "https://minecraft.myntu.me/img/building-b1.06b36fcf.jpeg",
    desc: "Building a virtual campus in Minecraft to facilitate students’ social life despite distance learning.",
    period: "May. 2021 - Present",
    info: (
      <>
        ⚡️ Adopted scrum-based methodology and shortened development cycle to release new buildings biweekly. <br/>
        🤖 Released a verification platform paired with a Discord bot in a week to process a maximum of 800 registrations per day. <br/>
        🙌 Sponsored by Microsoft Azure and Industrial Development Bureau, MOEA to hold a thousand player grade NTU Minecraft graduation ceremony at June 2021. <br/>
        📥 Preparing the donation of the Minecraft school map to the Gallery of NTU History.
      </>
    ),
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
    img: "https://i.imgur.com/qf68MwM.png",
    desc: "A redesigned course planning web service for students in National Taiwan University.",
    period: "Nov. 2021 - Present",
    info: (
      <>
        💪 Assisted 2000+ students in course planning and gained 400+ registered users in a month. <br/>
        🚄 Designed frontend interface using React to provide intuitive user experience. <br/>
        🔐 Defined RESTful API specification and implemented JWT authorization with Auth0 service. <br/>
        ⚡️ Currently implementing a data proxy based on Azure Function App to parse live course waitlist data from the NTU course selection system.
      </>
    ),
    profession: ["Node.js", "React", "MongoDB", "Azure"],
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
];

export { projects };