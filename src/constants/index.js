import {
    javascript,html,css,reactjs,tailwind,nodejs,mongodb,git,threejs,
    hf,holopin,
    clg,school,leetcode,
    linkedin,db,
    blog, shopping, covid19_tracker, walmart, handholding, infosys
  } from "../assets";

  const profiles = [
    {
      link: "https://www.geeksforgeeks.org/user/m_jaiswal/",
      icon: "https://img.icons8.com/color/344/GeeksforGeeks.png",
    },
    {
      link: "https://www.linkedin.com/in/jaiswalm/",
      icon: linkedin,
    },
    {
      link: "https://github.com/muskanjaiswal10",
      icon: git,
    },
    {
      link:"https://leetcode.com/u/muskanjaiswal710/",
      icon: leetcode,
    },
  ];

  const achievements = [
    {
      title: " Awarded with Extra Miler of the Quarter in Q1 2024 by Private Bank Tech Deutsche India.",
    },
    {
      title: "Ranked among top 100 in Walmart CodeHers by Walmart Global Tech India.",
    },
    {
      title: "Finalist in Ideathon (Summer of Ideas) in India organized by Infosys.",
    },
    {
      title: "Ranked 75th among 30000 participants in Girlscript Summer of Code’20.",
    }
  ]
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name:"Bootstrap",
      icon: "https://img.icons8.com/color/480/000000/bootstrap.png",
    },
    {
      name:"C++ tool",
      icon: "https://img.icons8.com/color/480/000000/c-plus-plus-logo.png",
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name:"MySql",
      icon: "https://img.icons8.com/color/480/000000/mysql-logo.png",
    },
  ];

  const list = [
    {
      id: "javascript",
      title: "Web Development",
    }
  ];

  export const javascriptProject = [
    {
      name: "Blogster",
      description:
        "A platform where your thoughts and ideas have a home of their own! Our blogging website allows you to create an account, after which you can easily add, update, and manage your blogs. This platform gives you the flexibility to craft, edit, and refine your content at any time.",
      tags: [
        {
          name: "javascript",
          color: "blue-text-gradient",
        },
        {
          name: "react",
          color: "green-text-gradient",
        },
        {
          name: "rest api",
          color: "pink-text-gradient",
        },
      ],
      image: blog,
      source_link: "https://github.com/muskanjaiswal10/Blogster",
      source_code_link: "https://github.com/muskanjaiswal10/Blogster",
    },
    {
      name: "BuyIt",
      description:
        "This platform allows you to easily browse through a variety of products, and with just a click, add them to your basket for a seamless shopping experience. Whether you’re in search of the latest gadgets, fashion trends, or everyday essentials, our intuitive interface makes it simple to find what you need.",
           tags: [
        {
          name: "reactjs",
          color: "blue-text-gradient",
        },
        {
          name: "javascript",
          color: "green-text-gradient",
        },
        {
          name: "postman",
          color: "pink-text-gradient",
        },
      ],
      image: shopping,
      source_link: "https://github.com/muskanjaiswal10/Buyit",
      source_code_link: "https://github.com/muskanjaiswal10/Buyit",
    },
    {
      name: "Covid-19 Tracker",
      description:
        "A portal which displays statistics of Covid-19 cases in real time with data of world, have feature of filtering the cases according to countries. It features current active cases, recovered and total cases.",
        tags: [
        {
          name: "javascript",
          color: "blue-text-gradient",
        },
        {
          name: "reactjs",
          color: "green-text-gradient",
        },
        {
          name: "material ui",
          color: "pink-text-gradient",
        },
      ],
      image: covid19_tracker,
      source_link: "https://github.com/muskanjaiswal10/Covid-19-Status",
      source_code_link: "https://github.com/muskanjaiswal10/Covid-19-Status",
    },
  ];
  
  const experiences = [
    {
      title: "Software Devloper",
      company_name: "Deutsche Bank",
      icon: db,
      iconBg: "#383E56",
      date: "July 2022 - Present",
      points: [
        "Enhanced application of a segment of DB which provides a comprehensive perspective of the portfolio across various architectural dimensions, facilitating effective architecture management.",
        " Successfully implemented new features and created a new user interface with a comprehensive set of functionalities designed to efficiently present data, developed this end-to-end feature for the application.",
        " Tech Stack : Angular, TypeScript, MySQL,and SpringBoot."
      ]
    },
    {
      title: "Software Development Intern",
      company_name: "Walmart Global Tech India",
      icon: walmart,
      iconBg: "#383E56",
      date: "Jan 2022 - July 2022",
      points: [
        "Worked as developer of the Post Order Experience team at Walmart Canada’s website, I made substantial contributions to their frontend team. This frontend system is utilized by millions of users on a daily basis.",
        "Responsible for developing requested features within the application, responding to the needs of thousands of users. Additionally, I played a pivotal role in enhancing the user interface across the entire application.",
        "Tech Stacks : React and TypeScript.",
      ],
    },
    {
      title: "Web Development Intern ",
      company_name: "HandHolding Solutions",
      icon: handholding,
      iconBg: "#E6DEDD",
      date: "Nov 2020 – December2020",
      points: [
        "Initiated and spearheaded the development of projects including the Annexure Generator and Offer Letter Generator.These projects were built entirely from the ground up, leveraging technologies such as ReactJS, Material UI, Html2Canvas, and JSPdf.",
       " Undertook the development of a project named 'Certify Me,' which was designed to facilitate the effortless creation of customized certificates for diverse institutions through a user-friendly interface requiring only a few clicks."
      ],
    },
    {
      title: "Front End Developer",
      company_name: "Infosys Summer of Ideas",
      icon: infosys,
      iconBg: "#383E56",
      date: "Aug 2020 – October2020",
      points: [
        "Built a website that displays the social profile of a tourist spot. Displays Information regarding a tourist spot like location, images etc. along with nearby attractions, meals and stays.",
        "Lead the Front-End Development Team with 5 members.Developed using HTML ,CSS , Bootstrap and JavaScript."       
      ],
  
    },
    
  ];
  
  const educations = [
    {
      degree: "Bachelor of Engineering",
      branch:
        "Electronics and Communication",
      marks:
        "CGPA : 8.1 / 10",
      name: "Shri G.S Institue of Technology and Science, Indore",
      year: "(2018 - 2022)",
      image: clg,
    },
    {
      degree:
        "12th Grade",
      branch : "Science",
      marks:
        "Percentage : 91 %",
      name: "Vimala Convent Hr. Sr. School, Sanawad",
      year: "2017",
      image: school,
    },
    {
      degree:
        "10th Grade",
      branch: "SSC",
      marks:
        "CGPA : 9.8",
      name: "Vimala Convent Hr. Sr. School, Sanawad",
      year: "2015",
      image: school,
    },
  ];
  
  export { list, profiles, technologies, experiences, educations, achievements };
