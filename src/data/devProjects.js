import { FaFile, FaGithub, FaGlobeAmericas, FaInfoCircle } from "react-icons/fa";

const projects = [
  {
    title: "FIRST Tech Challenge (FTC) Championship",
    img: "https://s3.us-west-2.amazonaws.com/secure.notion-static.com/64850633-ff21-43c4-8163-eb062ec6f0b3/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220202T064327Z&X-Amz-Expires=86400&X-Amz-Signature=0714a6efd76b65d49cd72052514a852537788aee74832554b8931828d7d12bc8&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22&x-id=GetObject",
    desc: "A robotics competition for students to compete head to head, by designing, building, and programming a robot to compete in an alliance format against other teams.",
    period: "Jan. 2016 - Oct. 2016",
    info: (
      <>
        - Developed Android app to make two Android phones act as client/remote (Wi-Fi-Direct connection) in control robot using (Powered by the framework and controlling components provided by the FTC official)<br/>
    - Modified the "Automatic" and "Remote-Control" part of code to make the robot finish the task smoother and faster.<br/>
    - Written engineering notebooks and express the designing ideas to the judge through presentation.
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
        - Developed a custom layered data structure to achieve 50% faster query speed than other teams.<br/>
        - Implemented a customized, user-friendly intuitive interface by creating custom classes. <br/>
        - Won 2nd place in the class competition.
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
        title: "Project Report (zh-TW)",
        link: "https://hackmd.io/@jc-hiroto/Syxb4OuNd",
        icon: <FaFile />
      }
    ]
  },
  {
    title: "MineNTU - National Taiwan University in Minecraft",
    img: "https://minecraft.myntu.me/img/building-b1.06b36fcf.jpeg",
    desc: "Building a virtual campus in Minecraft to facilitate students’ social life despite distance learning.",
    period: "May. 2021 - Present",
    info: (
      <>
        - Adopted scrum-based methodology and shortened development cycle to release new buildings biweekly. <br/>
        - Released a verification platform paired with a Discord bot in a week to process a maximum of 800 registrations per day. <br/>
        - Sponsored by Microsoft Azure and Industrial Development Bureau, MOEA to hold a thousand player grade NTU Minecraft graduation ceremony at June 2021. <br/>
        - Preparing the donation of the Minecraft school map to the Gallery of NTU History.
      </>
    ),
    profession: ["Python", "Vue.js", "Azure Cloud Services"],
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
    title: "NTUCourse Neo (Web Programming course project)",
    img: "https://s3.us-west-2.amazonaws.com/secure.notion-static.com/68f6c696-8229-4d55-9d0b-f81e30b4fb0b/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220202T082338Z&X-Amz-Expires=86400&X-Amz-Signature=31329151c7a8ed58f5404cf94424f1492a04cee398d4d6c09e56684888269766&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22&x-id=GetObject",
    desc: "A redesigned course planning web service for students in National Taiwan University.",
    period: "Nov. 2021 - Present",
    info: (
      <>
        - Assisted 2000+ students in course planning and gained 400+ registered users in a month. <br/>
        - Designed frontend interface using React to provide intuitive user experience. <br/>
        - Defined RESTful API specification and implemented JWT with Auth0 service. <br/>
        - Currently implementing a data proxy based on Azure Function App to parse live course waitlist data from the NTU course selection system.
      </>
    ),
    profession: ["Node.js", "React", "MongoDB", "Azure Cloud Services"],
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