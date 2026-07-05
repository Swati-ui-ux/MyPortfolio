// Skills Section Logo's
import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
import reduxLogo from './assets/tech_logo/redux.png';
import nextjsLogo from './assets/tech_logo/nextjs.png';
import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';
import materialuiLogo from './assets/tech_logo/materialui.png';
import bootstrapLogo from './assets/tech_logo/bootstrap.png';
import nodejsLogo from './assets/tech_logo/nodejs.png';
import expressjsLogo from './assets/tech_logo/express.png';
import mysqlLogo from './assets/tech_logo/mysql.png';
import mongodbLogo from './assets/tech_logo/mongodb.png';
import firebaseLogo from './assets/tech_logo/firebase.png';
import javaLogo from './assets/tech_logo/java.png';
import pythonLogo from './assets/tech_logo/python.png';
import typescriptLogo from './assets/tech_logo/typescript.png';
import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import postmanLogo from './assets/tech_logo/postman.png';
import mcLogo from './assets/tech_logo/mc.png';
import figmaLogo from './assets/tech_logo/figma.png';
import netlifyLogo from './assets/tech_logo/netlify.png';
import vercelLogo from './assets/tech_logo/vercel.png';

// Education Section Logo's

import ba from './assets/education_logo/BA.jpg';
import ma from './assets/education_logo/MA.jpg';
import fe from './assets/education_logo/FE.jpg';

// Project Section Logo's
import notesAppImage from "./assets/work_logo/notesApp.png"
import jobTrackerImage from "./assets/work_logo/jobTrackerApp.png"
import chatAppImage from "./assets/work_logo/chatApp.png"
import RoomRentApp from './assets/work_logo/RoomRentApp.png';
import NextjsProject from './assets/work_logo/Nextjs.png';
import passwordKeeper from './assets/work_logo/PasswordKeeper.png';
import CodeEditor from './assets/work_logo/CodeEditor.png';
import imagesearchLogo from './assets/work_logo/image_search.png';
import removebgLogo from './assets/work_logo/Background_Remover.png';


export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'React JS', logo: reactjsLogo },
      { name: 'Redux', logo: reduxLogo },
      // { name: 'Next JS', logo: nextjsLogo },
      { name: 'Tailwind CSS', logo: tailwindcssLogo },
      { name: 'Material UI', logo: materialuiLogo },
      { name: 'Bootstrap', logo: bootstrapLogo },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Node JS', logo: nodejsLogo },
      { name: 'Express JS', logo: expressjsLogo },
      { name: 'MySQL', logo: mysqlLogo },
      { name: 'MongoDB', logo: mongodbLogo },
      { name: 'Firebase', logo: firebaseLogo },
  
    ],
  },
  {
    title: 'Languages',
    skills: [
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'TypeScript', logo: typescriptLogo },
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'VS Code', logo: vscodeLogo },
      { name: 'Postman', logo: postmanLogo },
      { name: 'Compass', logo: mcLogo },
      { name: 'Vercel', logo: vercelLogo },
      { name: 'Netlify', logo: netlifyLogo },
      // { name: 'Figma', logo: figmaLogo },
    ],
  },
];

  
  export const education = [
    {
      id: 0,
      img: ba,
      school: "Hindu college Moradabad",
      date: "2017-2020",
      desc: "I have completed Bachelor of Arts (B.A.) from Hindu College, Moradabad, affiliated to Mahatma Jyotiba Phule Rohilkhand University. The college is known for its strong academic foundation, dedicated faculty, and opportunities for cultural and co-curricular engagement, providing a solid base for higher studies.",
      degree: "[BA] Bacholer of Art",
    },
    {
      id: 1,
      img: ma,
      school: "Hindu college Moradabad",
      date: "2020-2022",
      desc: "I have completed Master of Arts (M.A.) from Mahatma Jyotiba Phule Rohilkhand University, Bareilly. The university emphasizes quality education, research, and holistic student development, offering advanced learning and academic growth in the Arts discipline.",
        degree: "[MA] Master of Art",
    },
    {
      id: 2,
      img: fe,
      school: "Sharpener Coding",
      date: "Apr 2025 - till",
      desc: "Currently learning Full Stack Development at Sharpener Tech, an institute focused on practical, project-based training in modern web technologies. The program covers HTML, CSS, JavaScript, React, Node.js, Express, MongoDB, and other essential tools, equipping students with hands-on experience to build real-world applications. The training emphasizes problem-solving, coding best practices, and portfolio-ready projects, preparing learners for a career in frontend and backend development..",
      degree: "Full stack development",
    },
   
  ];
  
  export const projects = [
    {
  id: 0,
  title: "Room Rent Management App",
  description:
    "A modern and user-friendly React.js web application designed to simplify room rental management for owners and tenants. The app enables efficient management of rooms, tenants, and rental details with secure authentication and role-based access. Its intuitive and responsive interface ensures a smooth experience for listing rooms, assigning tenants, and managing rental information.",
  image: RoomRentApp,
  tags: ["HTML", "CSS", "JavaScript", "React JS", "API"],
  github: "https://github.com/Swati-ui-ux/CapstonProject",
  webapp: "https://capstonproject-frontend-l82k.onrender.com/",
},

    {
      id: 1,
      title: "Nextjs Project",
      description:
        "A full-stack quiz-based platform designed for GATE/UGC NET students to practice previous year questions and create customized tests. The platform offers comprehensive profile stats and detailed results, helping students track and improve their preparation journey effectively.",
      image: NextjsProject,
      tags: [ "HTML", "CSS", "JavaScript"],
      github: "https://github.com/Swati-ui-ux/Texting_nextjs",
      webapp: "https://texting-nextjs-liia.vercel.app/",
    },
    {
  id: 3,
  title: "Code Editor",
  description:
    "A lightweight and interactive web-based Code Editor built using HTML, CSS, and JavaScript. It allows users to write, edit, and preview code in real time with a clean and user-friendly interface. This project helps developers practice coding and test snippets efficiently within the browser.",
  image: CodeEditor,
  tags: ["HTML", "CSS", "JavaScript"],
  github: "https://github.com/Swati-ui-ux/CodeEditor",
  webapp: "https://code-editor-nu-tan.vercel.app/",
    },
{
  id: 4,
  title: "Job Tracker App",
  description:
    "A full-stack Job Tracker application that helps users manage job applications, companies, reminders, and profile details efficiently. Features include resume upload, authentication, application tracking, search functionality, and reminder management with a responsive modern UI.",
  image: jobTrackerImage,
  tags: [
    "React JS",
    "Node JS",
    "Express JS",
    "MySQL",
    "Sequelize",
    "JWT Authentication",
    "Cloudinary",
    "Tailwind CSS",
    "CRUD Operations",
    "REST API"
  ],
  github: "https://github.com/Swati-ui-ux/Salon_App",
  webapp: "https://jobtracker-frontend-r39v.onrender.com/",
},
{
  id: 5,
  title: "Notes App",
  description:
    "A full-stack Notes Application that allows users to create, update, delete, and manage notes efficiently. Built with React.js for the frontend and Node.js/Express.js for the backend, featuring authentication, responsive UI, and secure data management.",
  image: notesAppImage,
  tags: [
    "React JS",
    "Node JS",
    "Express JS",
    "MongoDB",
    "JWT Authentication",
    "CRUD Operations",
    "CSS",
    "JavaScript"
  ],
  github: "https://github.com/Swati-ui-ux/NoteApp",
  webapp: "https://noteapp-frontend-66qv.onrender.com/",
},
,
    {
      id: 6,
      title: "Image Search App",
      description:
        "A React.js-based image search application that allows users to search and download high-quality images from the web. Built using external APIs to ensure a vast library of results for various queries.",
      image: imagesearchLogo,
      tags: ["React JS", "API", "Search Feature", "CSS", "Javascript"],
      github: "https://github.com/Swati-ui-ux/ImageSearch",
      webapp: "https://image-search-nine-silk.vercel.app/",
    },
    {
      id: 7,
      title: "Image Background Remover",
      description:
        "An efficient background removal app built with React.js and API integration. Users can upload any image, remove the background, and download the transparent version for further use.",
      image: removebgLogo,
      tags: ["React JS", "API", "Image Processing", "HTML", "CSS", "Javascript"],
      github: "https://github.com/Swati-ui-ux/BackgroundRemover",
      webapp: "https://background-remover-mu-azure.vercel.app/",
    },
    {
  id: 8,
  title: "Real-Time Chat App",
  description:
    "A full-stack real-time chat application that enables users to send instant messages in personal and group chats. Built with React.js, Node.js, Express.js, Socket.IO, and MySQL, featuring authentication, typing indicators, live messaging, and responsive UI.",
  image: chatAppImage,
  tags: [
    "React JS",
    "Node JS",
    "Express JS",
    "Socket.IO",
    "MySQL",
    "Sequelize",
    "JWT Authentication",
    "Real-Time Messaging",
    "Tailwind CSS",
    "REST API"
  ],
  github: "https://github.com/Swati-ui-ux/ChatApp_with_mongodb",
  webapp: "https://chatapp-with-mongodb-frontend.onrender.com/",
},
  ];  