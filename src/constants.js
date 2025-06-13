// Skills Section Logo's
import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';

 
import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';
import bootstrapLogo from './assets/tech_logo/bootstrap.png';
 
import nodejsLogo from './assets/tech_logo/nodejs.png';
import expressjsLogo from './assets/tech_logo/express.png';
import mysqlLogo from './assets/tech_logo/mysql.png';
import mongodbLogo from './assets/tech_logo/mongodb.png';
 
import cLogo from './assets/tech_logo/c.png';
import cppLogo from './assets/tech_logo/cpp.png';
import javaLogo from './assets/tech_logo/java.png';
import pythonLogo from './assets/tech_logo/python.png';
import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import postmanLogo from './assets/tech_logo/postman.png';
 
 
 
import pictlogo from './assets/education_logo/Pict_logo.jpg';
import collegelogo from './assets/education_logo/junior_college_logo.png';
import schoollogo from './assets/education_logo/School_logo.png';

 

export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'React JS', logo: reactjsLogo },
      { name: 'Tailwind CSS', logo: tailwindcssLogo },
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
      
    ],
  },
  {
    title: 'Languages',
    skills: [
      { name: 'C', logo: cLogo },
      { name: 'C++', logo: cppLogo },
      { name: 'Java', logo: javaLogo },
      { name: 'Python', logo: pythonLogo },
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'VS Code', logo: vscodeLogo },
      { name: 'Postman', logo: postmanLogo },
    ],
  },
];

   
  
  export const education = [
    {
      id: 0,
      img: pictlogo,
      school: "Pune Institute of Computer Techanology, Pune",
      date: "2023 - 2027",
      grade: "8.40 CGPA (3 Semesters)",
      desc: "I am currently pursuing a Bachelor of Engineering in Electronics and Computer Engineering at the prestigious Pune Institute of Computer Technology (PICT), Pune, and am in my third year. Alongside my academic studies, I have a strong interest in Data Structures and Algorithms (DSA), which I regularly practice to improve my problem-solving skills and coding logic. I am also passionate about full-stack development and actively build projects using the MERN stack (MongoDB, Express.js, React.js, Node.js), focusing on creating dynamic and user-friendly web applications. My time at PICT has provided me with a strong foundation in both hardware and software domains, helping me grow as a versatile developer and prepare for real-world challenges in the tech industry.",
      degree: "Bachelor of Engineering",
    },
     
    {
      id: 1,
      img:  collegelogo,
      school: "Bharat Bharti Junior College, Parbhani",
      date: "2021 - 2023",
      grade: "79.17%",
      desc: "I completed my class 11th and 12th education from Bharat Bharti Junior College, Parbhani , under the Maharashtra state board, where I studied Physics, Chemistry, and Mathematics (PCM) with Computer Science.",
      degree: "Maharashtra State Board (XII) - PCM with Computer Science",
    },
    {
      id: 2,
      img: schoollogo,
      school: "Gandhi Vidhyalaya, Ektanagar, Parbhani.",
      date: "2019 - 2021",
      grade: "95.80%",
      desc: "I completed my class 1 to 10 education from Gandhi Vidhyalaya, Parbhani, under the Maharashatra State board.",
      degree: "Class 10th- Maharashtra State Board",
    },
  ];

  
   