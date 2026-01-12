const heroCard = {
    img_src: "./assets/images/hero.png",
    alt: "Hero Image",
    salutaion:"Hey There, I'm",
    name:"Abhishek Yadav",
    role:"Java Full Stack Developer",
    tagline1:"I build scalable backend systems and modern web apps.",
    tagline2:"Turning ideas into fully functional products, front to back."
}



const aboutCard={
info:{
    para1:"Hello! I'm Abhishek Yadav, a passionate Java Full Stack Developer with a knack for building scalable backend systems and modern web applications. With a strong foundation in both  front-end and back-end technologies, I thrive on turning ideas into fully functional products.",
    para2:"My journey in software development has equipped me with the skills to create seamless user experiences while ensuring robust server-side performance. I enjoy collaborating with cross-functional teams to bring innovative solutions to life.",
    para3:"When I'm not coding, you'll find me exploring the latest tech trends, contributing to open-source projects, or honing my skills through continuous learning."
},

img_src:"./assets/images/about-me.png",
alt:"about-me-image",
conclusion:"Let's connect and create something amazing together!"

}

const projectCard=[
    {
        id:1,
        title:"AI Career Coach",
        content:{
            problem_statement:"Career guidance is often inaccessible and lacks personalization.",
            solution:"Description of Ai Career Coach",
            tech_stack:"Technologies used: Java, Spring Boot, React, MongoDB"
        },
        img_src:"./assets/images/project.png",
        alt:"AI Career Coach project image",
        button:{
            live_demo:"#",
            code_preview:"#"
        }

    }
];


const skillCard=[
    {
        id:1,
        title:"Backend Skills",
       content:{
        programming_lang:"Programming languages: Java, Python, Cprogramming",
        frameworks:"Frameworks: Spring Boot",
        databases:"Databases: MySQL, MongoDB",
        orm:"ORM tools: Hibernate, Spring Data JPA",
        version_control:"Version Control: Git, GitHub", 
        testing:"Testing tool & Monitoring: JUnit, Mockito, Postman",
        containerization:"Containerization: Docker",
        cloud:"Cloud Platforms: AWS, Heroku",
        ci_cd:"CI/CD: Jenkins, GitHub Actions"
       }
    },
    {
        id:2,
        title:"Frontend Skills",
         content:{
        programming_lang:"Programming languages: HTML, CSS, JavaScript",
        frameworks:"Frameworks: React, Bootstrap,jQuery",
        libraries:"Libraries: Redux, Axios",
        version_control:"Version Control: Git, GitHub", 
        testing:"Testing tool & Monitoring: Jest, Enzyme",
        build_tools:"Build Tools: Webpack, Babel",
        ci_cd:"CI/CD: GitHub Actions, Netlify",
        responsive_design:"Responsive Design: Media Queries, Flexbox, Grid"
         }
    }
];


const educationCard=[
    {
        id:1,
        title:"Education Qualifications",
        content:{
            field:"Bachelor of Technology in Computer Science",
            from:"Vidyavardhini's College Of Engineering and Technology, 2023 - 2027",
            score:"Current CGPA: 9.2/10",
            schooling:"Senior Secondary Schooling Stream: Science (PCM)",
            duration:"Rahual International School, 2021-2023"
        }
    },
    {
        id:2,
        title:"Certifications Courses",
        content:{
            field:"Java Programming and Software Engineering Fundamentals",
            from:"Coursera",
            score:"80% score",
            duration:"Duration: 6 months",
    }
}
];

const blogCard=[
    {
        id:1,
        title:"Blog Articles", 
        img_src:"./assets/images/project.png",
        alt:"Blog Article Image",     
        content:"An in-depth look at Java Streams, their benefits, and practical examples of how to use them effectively in your applications.",
        button:"Read More"

        },
        {
        id:2,
        title:"Blog Articles", 
        img_src:"./assets/images/project.png",
        alt:"Blog Article Image",     
        content:"Understanding React Hooks: A Comprehensive Guide to Managing State and Side Effects in Functional Components.",
        button:"Read More"
        }
];




export {heroCard, aboutCard,projectCard,skillCard,educationCard,blogCard};