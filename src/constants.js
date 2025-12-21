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
import RoomRentApp from './assets/work_logo/RoomRentApp.png';
import NextjsProject from './assets/work_logo/Nextjs.png';
import movierecLogo from './assets/work_logo/MovieApp.png';
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
      { name: 'Next JS', logo: nextjsLogo },
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
      { name: 'Java', logo: javaLogo },
      { name: 'Python', logo: pythonLogo },
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
      { name: 'Figma', logo: figmaLogo },
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
      school: "Frontend Development",
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
  github: "https://github.com/Swati-ui-ux/Room_Rent_Project",
  webapp: "https://room-rent-project.vercel.app/login",
},

    {
      id: 1,
      title: "Nextjs Project",
      description:
        "A full-stack quiz-based platform designed for GATE/UGC NET students to practice previous year questions and create customized tests. The platform offers comprehensive profile stats and detailed results, helping students track and improve their preparation journey effectively.",
      image: NextjsProject,
      tags: [ "HTML", "CSS", "JavaScript"],
      github: "https://github.com/codingmastr/CSPrep",
      webapp: "https://texting-nextjs-liia.vercel.app/",
    },
    {
      id: 2,
      title: "Movie Recommendation App",
      description:
        "A React-based web application that provides movie recommendations based on different criteria, such as genres, user preferences, and popular trends. The intuitive design and smooth experience make it a go-to app for movie enthusiasts.",
      image: movierecLogo,
      tags: ["React JS", "API", "HTML", "CSS", "JavaScript"],
      github: "https://github.com/codingmastr/Movie-Recommendation-App",
      webapp: "https://movie-recommendation-app-jet.vercel.app/",
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
}
,
   {
  id: 4,
  title: "Password Keeper",
  description:
    "A secure and user-friendly Password Keeper web application built using React.js, HTML, CSS, and JavaScript. It allows users to store, manage, and retrieve their passwords safely in one place with an intuitive interface. This project helps users organize credentials efficiently while focusing on simplicity and usability.",
  image: passwordKeeper,
  tags: ["Reactjs", "HTML", "CSS", "JavaScript"],
  github: "https://github.com/Swati-ui-ux/PasswordKeeper",
  webapp: "https://password-keeper-ten.vercel.app/",
}
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
  ];  