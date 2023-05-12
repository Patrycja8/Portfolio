import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    tindog,
    simongame,
    threejs,
    snake,
    drums,
    pomodoro,
    paswordmenager,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "Work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "Python Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Content Creator",
      icon: creator,
    },
  ];
  
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
      name: "Python",
      icon: typescript,
    },
    {
      name: "Bootstrap",
      icon: reactjs,
    },
    {
      name: "jQuery",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "Comandline",
      icon: figma,
    },
    {
      name: "Microsoft Office",
      icon: docker,
    },
  ];
  
  const experiences = [
       {
      title: "Student",
      company_name: "UTH Warsaw (Poland)",
      icon: meta,
      iconBg: "#E6DEDD",
      date: "Oct 2021 - Present",
      points: [
        "Currently pursuing a degree in Computer Science with a strong focus on programming, database management, and various programming languages.",
"Developing skills in web development, including proficiency in HTML, CSS, and JavaScript, and actively expanding knowledge in other programming languages such as Python.",
"Acquiring knowledge in internet networking protocols and concepts, with a focus on understanding network architecture and troubleshooting network issues.",
"Exhibiting a strong ability to quickly adapt to new challenges and technologies, demonstrating a passion for continuous learning and keeping up with industry trends.",
"Participating in coding projects and collaborating with peers to solve complex problems, fostering a strong teamwork and problem-solving mindset.",
      ],
    },
    {
      title: "Model",
      company_name: "AMQ Warsaw (Poland)",
      icon: starbucks,
      iconBg: "#383E56",
      date: "Sep 2018 - Mar 2020",
      points: [
        "Working as an international model, representing various fashion brands and collaborating with teams worldwide.",
        "Participating in high-profile photo shoots, runway shows, and campaigns across different countries, showcasing diverse fashion styles and trends.",
        "Collaborating with renowned photographers, stylists, and designers from different cultural backgrounds to create compelling visuals for editorial features, advertising campaigns, and fashion events globally."
      ],
    },
    {
      title: "Model",
      company_name: "IBM Canton (China)",
      icon: tesla,
      iconBg: "#E6DEDD",
      date: "Jun 2019 - Jul 2019",
      points: [
        "Participating in professional photo shoots and fashion shows as a model in China, showcasing various styles and products.",
"Collaborating with photographers, stylists, and creative teams to create visually stunning and impactful images for editorial, advertising, and fashion campaigns in China.",
"Adapting to different concepts, themes, and brand aesthetics, while maintaining a strong presence and effectively conveying the desired image for modeling assignments in China.",
"Posing and showcasing garments, accessories, and beauty products with poise, grace, and confidence during fashion shows and events in China."
      ],
    },
    {
      title: "Model",
      company_name: "RealModels Istambul (Turkey)",
      icon: shopify,
      iconBg: "#383E56",
      date: "Jan 2019 - Mar 2019",
      points: [
        "Maintaining professionalism and adhering to strict schedules and deadlines to ensure the successful execution of modeling projects in Turkey.",
"Collaborating with Turkish and international fashion brands to showcase their collections and promote their vision through modeling assignments and campaigns.",
"Attending castings, auditions, and go-sees, and working closely with agencies and clients to meet their specific requirements and expectations for modeling projects in Turkey."
      ],
    },
 
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Tin Dog",
      description:
        "Tin Dog is a web-based platform that provides users with the ability to search, connect, and interact with other dog owners in their area. Inspired by the popular dating app Tinder, Tin Dog brings together the concept of social networking and pet ownership.",
      tags: [
        {
          name: "html",
          color: "blue-text-gradient",
        },
        {
          name: "css",
          color: "green-text-gradient",
        },
        {
          name: "bootstrap",
          color: "pink-text-gradient",
        },
      ],
      image: tindog,
      source_code_link: "https://github.com/Patrycja8/TinDog",
    },
    {
      name: "Simon game",
      description:
        "Simon Game is a classic memory-based electronic game that challenges players to remember and repeat a sequence of colors and sounds.",
      tags: [
        {
          name: "JavaScript",
          color: "blue-text-gradient",
        },
        {
          name: "Html",
          color: "green-text-gradient",
        },
        {
          name: "Css",
          color: "pink-text-gradient",
        },
      ],
      image: simongame,
      source_code_link: "https://github.com/Patrycja8/Simon_Game",
    },
    {
      name: "Snake",
      description:
        "Snake is a classic arcade game where players control a snake that grows longer as it consumes food while avoiding collisions with its own body and the game's boundaries. ",
      tags: [
        {
          name: "Python",
          color: "blue-text-gradient",
        },
      
      ],
      image: snake,
      source_code_link: "https://github.com/Patrycja8/Snake-game",
    },
    {
      name: "Drums",
      description:
        "Drums is a virtual drumming app that brings the rhythm and excitement of playing drums right to your fingertips. Whether you're a professional drummer or just love the sound of percussion, the Drums app offers a realistic drumming experience on your mobile device.",
      tags: [
        {
          name: "Html",
          color: "blue-text-gradient",
        },
        {
          name: "Css",
          color: "green-text-gradient",
        },
        {
          name: "JavaScript",
          color: "pink-text-gradient",
        },
      ],
      image:drums,
      source_code_link: "https://github.com/Patrycja8/Drums",
    },
    {
      name: "Pomodoro Timer",
      description:
        "The Pomodoro Timer app helps you track and manage your work sessions effectively. Set the timer for your desired duration, typically 25 minutes, and start your focused work. The app will notify you when the pomodoro is complete, signaling it's time for a short break.",
      tags: [
        {
          name: "Python",
          color: "blue-text-gradient",
        },
        {
          name: "tkinker",
          color: "green-text-gradient",
        },
        
    
      ],
      image: pomodoro,
      source_code_link: "https://github.com/Patrycja8/Pomodoro-Timer",
    },
    {
      name: "Pasword Menager ",
      description:
        "The Password Manager is a valuable tool for securely storing, generating, and managing your passwords. With the increasing number of online accounts we have, it's crucial to have strong and unique passwords for each one. The Password Manager and Maker app simplifies this process and enhances your online security.",
      tags: [
        {
          name: "Python",
          color: "blue-text-gradient",
        },
        {
          name: "Thinker",
          color: "green-text-gradient",
        },
        {
          name: "Pyperclip",
          color: "pink-text-gradient",
        },
      ],
      image: paswordmenager,
      source_code_link: "https://github.com/Patrycja8/Pasword_Menager_Generator",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };