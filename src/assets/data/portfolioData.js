import p1 from "../images/p1.png"
import p8 from "../images/ecell.png"
import p9 from "../images/modernbank.png"
import p10 from "../images/weatherapp.png"
import p2 from "../images/bookstore.png"
import p11 from "../images/quiz.png"
import p12 from "../images/todo.png"
import p3 from "../images/coderships.png"
import p4 from "../images/offcampushire.png"
import p6 from "../images/careersense.png"
import p7 from "../images/ulearner.png"
import p5 from "../images/tbikiet.png"

const portfolios = [
  {
    id: "01",
    imgUrl: p1,
    title: "Monthly Wrap",
    description:
      "Hello World",
    technologies: ["React", "Tailwind css", "JWT", "Django"],
    siteUrl: "https://github.com/adityyaa-10/monthly-wrap/tree/main/frontend",
  },
  {
    id: "02",
    imgUrl: p2,
    category: "CRUD",
    title: "Online Bookstore",
    description: "It is a full stack CRUD application for a bookstore where user can add, delete, edit and view books",
    technologies: ["React.js", "Tailwind CSS", "Node.js", "Express.js", "MongoDB", "Axios"],
    siteUrl: "https://github.com/adityyaa-10/BookStore",
  },
  {
    id: "03",
    imgUrl: p3,
    category: "MVP",
    title: "Coderships",
    description: "A competition website to land dream internships",
    technologies: ["Next.js", "Tailwind CSS", "Million js"],
    siteUrl: "https://coderships.vercel.app/",
  },
  {
    id: "04",
    imgUrl: p4,
    category: "MVP",
    title: "OffCampusHire",
    description: "Startup MVP to simplify off campus hiring process for students and companies",
    technologies: ["Next.js", "Tailwind CSS", "Million js"],
    siteUrl: "https://offcampushire.vercel.app/",
  },
  {
    id: "05",
    imgUrl: p5,
    category: "MVP",
    title: "TBI Website",
    description: "New website for Technology Business Incubator, KIET Group of Institutions",
    technologies: ["Next.js", "Tailwind CSS", "Next UI", "Python", "Django"],
    siteUrl: "https://tbikiet.vercel.app/",
  },
  {
    id: "06",
    imgUrl: p6,
    category: "MVP",
    title: "Career Sense",
    description: "Startup MVP to spread awareness about career opportunities for students and professionals",
    technologies: ["Next.js", "Tailwind CSS", "React-slick"],
    siteUrl: "https://next14-seven-ashen.vercel.app/workex",
  },
  {
    id: "07",
    imgUrl: p7,
    category: "MVP",
    title: "Ulearner",
    description: "Startup MVP to provide all in one marketplace for learning tech",
    technologies: ["Next.js", "Tailwind CSS"],
    siteUrl: "https://ulearnerrrr.netlify.app/courses",
  },
  {
    id: "08",
    imgUrl: p8,
    category: "Practice",
    title: "E-CELL Frontend Clone",
    description:
      "This is a clone of frontend of E-CELL KIET Website.",
    technologies: ["React", "Tailwind css"],
    siteUrl: "https://e-cell-clone.netlify.app/",
  },
  {
    id: "09",
    imgUrl: p9,
    category: "Practice",
    title: "Modern Bank Application",
    description:
      "It is a fully responsive React App for a bank application with modern design",
    technologies: ["React", "Tailwind css"],
    siteUrl: "https://hoobank-application.netlify.app/",
  },
  {
    id: "10",
    imgUrl: p10,
    category: "Practice",
    title: "Weather Application",
    description: "It is a basic Weather application that tells real time weather details of any city in the world!",
    technologies: ["HTML", "Bootstrap", "JavaScript", "Accuweather API"],
    siteUrl: "https://github.com/adityyaa-10/weather-app",
  },
  {
    id: "11",
    imgUrl: p11,
    category: "Practice",
    title: "Ninja Quiz",
    description:
      "A basic quiz application using JavaScript",
    technologies: ["HTML", "Bootstrap", "JavaScript"],
    siteUrl: "https://github.com/adityyaa-10/Projects-JavaScript/tree/main/Project%20-%202%20%7BNinja%20Quiz%7D",
  },
  {
    id: "12",
    imgUrl: p12,
    category: "Practice",
    title: "To Do List",
    description:
      "A basic ToDo list app with add, delete and search option",
    technologies: ["HTML", "Bootstrap", "JavaScript"],
    siteUrl: "https://github.com/adityyaa-10/Projects-JavaScript/tree/main/Project%20-%203%20%20%7BToDo%20List%7D",
  },
];

export default portfolios;
