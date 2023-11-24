
import { library } from "@fortawesome/fontawesome-svg-core";
import {
	faGithub,
	faLinkedin,
	faReact,
} from "@fortawesome/free-brands-svg-icons";
import {
	faBagShopping,
	faBars,
	faDiceD6,
	faEnvelope,
	faWindowRestore,
	faX,
} from "@fortawesome/free-solid-svg-icons";

import {
	avatar,
	awsIcon,
	calculator,
	cssIcon,
	tsIcon,
	eslintIcon,
	figmaIcon,
	aiIcon,
	gitIcon,
	githubIcon,
	htmlIcon,
	javaIcon,
	jsIcon,
	memoryGame,
	neoIcon,
	nodeIcon,
	pawsitivePrototype,
	psqlIcon,
	pyIcon,
	raspIcon,
	reactIcon,
	viteIcon,
    tailIcon,
	nextIcon,
	nestIcon,
	apiIcon,
	sqlIcon,
	p1,p2,p4,p5,p6,p7,
} from "../assets";

library.add(faX, faBars, faWindowRestore, faBagShopping, faDiceD6);

const media = {
	htmlIcon,
	cssIcon,
	tsIcon,
	tailIcon,
	jsIcon,
	reactIcon,
	awsIcon,
	javaIcon,
	gitIcon,
	githubIcon,
	psqlIcon,
	eslintIcon,
	pyIcon,
	viteIcon,
	nodeIcon,
	raspIcon,
	neoIcon,
	figmaIcon,
	avatar,
	nextIcon,
	nestIcon,
	apiIcon,
	sqlIcon,
	aiIcon,
};

const icons = {
	faBars,
	faX,
	faWindowRestore,
	faBagShopping,
	faDiceD6,
	faReact,
	faGithub,
	faLinkedin,
	faEnvelope,
};

const introduction = {
	text: [
		"Hello! I'm Atanu Das, currently in my last semester of Computer Science at AIUB. I've completed all coursework and am currently immersed in a dynamic software development internship at my alma mater. I bring an energetic and motivated approach to my work, fueled by a genuine passion for technology. With a diverse skill set in programming languages, I enjoy tackling challenges with innovative solutions.In my free time, I enjoy playing guitar and have a keen interest in chess. I am continuously excited about the opportunity to contribute my skills and enthusiasm to the IT industry. Thank you for visiting my portfolio – your interest is truly appreciated!"
	],
};

export const navLinks = [
	{
		id: "about",
		title: "About",
	},
	{
		id: "projects",
		title: "Projects",
	},
	{
		id: "skills",
		title: "Skills",
	},
	{
		id: "contact",
		title: "Contact",
	},
];

const projects = [



	{
		name: "DonationCamp",
		description:
			"Developed a donation campaign application using ReactJs & Tailwind CSS",
		image: p7,
		source_code_link: "https://github.com/ADevph/DonationCamp",
		demo_link: "https://admirable-capybara-ed3996.netlify.app/",
	},
	{
		name: "StreamingTube",
		description:
			"Developed a streaming type application using JavaScript, HTML, Tailwind CSS",
		image: p1,
		source_code_link: "https://github.com/ADevph/Streamingtube",
		demo_link: "https://timely-cascaron-efe5be.netlify.app/",
	},
	{
		name: "FavCourse",
		description:
			"Implemented a dynamic cart functionality allowing users to add their favourite courses.",
		image: p2,
		source_code_link: "https://github.com/ADevph/CourseAcademy",
		demo_link:
			"https://glittering-medovik-f9f7ed.netlify.app/",
	},
	{
		name: "Easy Shopping",
		description:
			"Implemented a dynamic cart functionality to add, review & many more with coupon feature.",
		image: p4,
		source_code_link: "https://github.com/ADevph/Summer-Sale",
		demo_link: "https://delicate-conkies-f720b7.netlify.app/",
	},
	{
		name: "GameZone",
		description:
			"Instant Play, Diverse Game Categories, Responsive Design for mobile/tab devices and various other options are available.",
		image: p5,
		source_code_link: "https://github.com/ADevph/Gamer-Zone",
		demo_link: "https://adevph.github.io/Gamer-Zone/",
	},
	{
		name: "Fruit Burst",
		description:
			"User-Friendly Interface, Convenient Online Shopping, Wide Range of Fruits, Customer rating and other various options are there.",
		image: p6,
		source_code_link: "https://github.com/ADevph/B8A3-fruit-brust",
		demo_link: "https://adevph.github.io/B8A3-fruit-brust/",
	},
	
];

const memoji = {
	image: [avatar],
};

const skills = [
	{
		id: "html",
		title: "HTML5",
		icon: htmlIcon,
		description:
			"I have a strong command of HTML for organizing web pages and generating meaningful content that can be accessed by all users.",
	},
	{
		id: "css",
		title: "CSS3",
		icon: cssIcon,
		description:
			"I possess expertise in utilizing CSS to design web pages and craft visually captivating layouts that enhance the overall user experience.",
	},
	{
		id: "tail",
		title: "Tailwind CSS",
		icon: tailIcon,
		description:
			"I possess expertise in utilizing CSS to design web pages and craft visually captivating layouts that enhance the overall user experience.",
	},
	{
		id: "javascript",
		title: "JavaScript",
		icon: jsIcon,
		description:
			"I have substantial experience in employing JavaScript to introduce interactivity and functionality into web pages, resulting in dynamic user interfaces.",
	},
	{
		id: "react",
		title: "React",
		icon: reactIcon,
		description:
		  "Experienced with React, I excel in creating dynamic user interfaces through the development of reusable components. Proficient in state management using hooks and context, I leverage React's power for engaging and interactive web applications.",
	  },
	  {
		id: "next",
		title: "Next.js",
		icon: nextIcon,
		description:
		  "With a good command of Next.js, I go beyond React, building seamless and optimized web applications. I bring my expertise in server-side rendering, routing, and data fetching to create high-performance web experiences.",
	  },
	  {
		id: "nest",
		title: "Nest.js",
		icon: nestIcon,
		description:
		  "In Nest.js, I've developed projects showcasing my proficiency in building scalable and maintainable server-side applications. Leveraging TypeScript and its modular architecture, I create robust and well-organized backends for web applications.",
	  },
	  {
		id: "api",
		title: "REST API",
		icon: apiIcon,
		description:
		  "As a junior web developer, I've gained hands-on experience working with RESTful APIs, seamlessly integrating backend functionality with frontend applications. I prioritize clean and efficient API design to ensure smooth communication between different parts of a web system.",
	  },
	  {
		id: "sql",
		title: "MySQL",
		icon: sqlIcon,
		description:
		  "Proficient in MySQL, I've successfully implemented and optimized relational databases in various projects. My experience includes database design, query optimization, and ensuring data integrity. I leverage MySQL to create efficient and scalable data solutions.",
	  },
	  
	{
		id: "figma",
		title: "Figma",
		icon: figmaIcon,
		description:
			"In my Figma skills, I unleash creativity, designing captivating user interfaces and collaborating seamlessly with designers and developers.",
	},
	{
		id: "illustrator",
		title: "Adobe Illustrator",
		icon: aiIcon,
		description:
		  "Good in Illustrator, I bring creativity to life through visual design. With a keen eye for aesthetics, I craft nice illustrations, posters, and graphics that effectively communicate ideas.",
	  },
	  
	{
		id: "git",
		title: "Git",
		icon: gitIcon,
		description:
			"I am proficient in Git, managing code changes, collaborating with others, and resolving conflicts effectively.",
	},
	{
		id: "github",
		title: "GitHub",
		icon: githubIcon,
		description:
			"I am skilled in using GitHub for seamless project collaboration, code sharing, and issue tracking. Through GitHub, I efficiently create and manage repositories and effectively present my work to potential employers.",
	},
	{
		id: "psql",
		title: "Postgresql",
		icon: psqlIcon,
		description:
			"I have a good command of PostgreSQL, encompassing a wide range of skills such as database normalization, front-end connectivity",
	},
	{
		id: "vite",
		title: "Vite",
		icon: viteIcon,
		description:
			"I have gained considerable experience working with Vite for approximately six months, leveraging its capabilities to build React websites and seamlessly deploy them on platforms like Netlify, Vercel",
	},
	
	{
		id: "node",
		title: "Node",
		icon: nodeIcon,
		description:
			"When it comes to building web applications, I prefer using Node as my runtime environment over Yarn. I have expertise in leveraging Node.js to develop powerful and scalable web applications.",
	},
	
	{
		id: "eslint",
		title: "Eslint",
		icon: eslintIcon,
		description:
			"I utilize ESLint to identify and resolve code issues, as well as standardize the structure of my projects. With ESLint, I ensure code quality and consistency throughout my development process.",
	},
];

const markerSvg = `<svg viewBox="-4 0 36 36">
    <path fill="currentColor" d="M14,0 C21.732,0 28,5.641 28,12.6 C28,23.963 14,36 14,36 C14,36 0,24.064 0,12.6 C0,5.641 6.268,0 14,0 Z"></path>
    <circle fill="black" cx="14" cy="14" r="7"></circle>
  </svg>`;

export { icons, introduction, markerSvg, media, memoji, projects, skills };
