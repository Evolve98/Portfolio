
import { Project, ProjectCategory, ResumeData, NavLink, AboutData, ContactData } from './types';
import { LinkedinIcon, MailIcon, ArtstationIcon } from './components/icons/SocialIcons'; // GithubIcon, GlobeIcon are also available if needed

// HERO_DATA is removed

export const NAV_LINKS: NavLink[] = [
  { href: '#home-intro', label: 'Home', targetId: 'home-intro' },
  { href: '#about-page', label: 'About', targetId: 'about-page' }, // Target ID for About page view
  { href: '#projects', label: 'Projects', targetId: 'projects' },
  { href: '#resume', label: 'Resume', targetId: 'resume' },
  { href: '#contact', label: 'Contact', targetId: 'contact' },
];

export const ABOUT_DATA: AboutData = {
  greeting: "Hello there!",
  introduction: "I'm a Game Artist and Technical Artist working at Kwalee, focused on casual and hybrid casual mobile games.",
  bioParagraphs: [
    "I have 4 years of experience creating game-ready art and implementing it directly into Unity including animation systems, VFX, and performance optimization.",
    "In my free time, I enjoy creating stylized shaders and recreating visual effects from other games to better understand their workflows and techniques."
  ],
  profileImageUrl: 'https://picsum.photos/seed/techartistprofile/400/400', // Placeholder image - User should replace
};

const companyProjects: Project[] = [
  {
    id: 'company-proj-puzzlesandcats',
    title: 'Puzzles and Cats',
    category: ProjectCategory.COMPANY,
    companyName: "Kwalee",
    imageUrl: 'https://picsum.photos/seed/puzzlesandcatsgame/600/400', // Placeholder image - User should replace
    description: "Spearheaded UI art and technical implementation for 'Puzzles and Cats,' a captivating match-3 adventure. My role encompassed designing intuitive UI/UX, crafting dynamic VFX for puzzle interactions, developing custom shaders for enhanced visual fidelity, and optimizing all art assets for seamless performance across diverse mobile devices. Worked in tandem with design and development teams to realize the game's delightful art style and engaging player experience.",
    technologies: ["Unity", "Blender", "Photoshop", "Spine", "Substance Painter"],
    role: "Lead UI/Technical Artist", // User can refine
    releaseDate: "2024-06", 
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.kwalee.puzzlesandcatsnew&hl=en_IN",
    appStoreUrl: "https://apps.apple.com/in/app/puzzles-cats/id6738574871"
  },
  {
    id: 'company-proj-looper',
    title: 'Looper',
    category: ProjectCategory.COMPANY,
    companyName: "Kwalee",
    imageUrl: 'https://picsum.photos/seed/loopergame/600/400', // Placeholder image - User should replace
    description: "Contributed to Looper, focusing on technical art aspects to ensure smooth performance and visual appeal. (User: Please add a more detailed description of your role and contributions.)",
    technologies: ["Unity", "Photoshop", "After Effects"],
    role: "Technical Artist", // User can refine
    releaseDate: "2024-04",
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.kwalee.looper&hl=en_IN",
    appStoreUrl: "https://apps.apple.com/us/app/looper/id1370475630"
  },
  {
    id: 'company-proj-triplecar',
    title: 'Triple Car (proto)',
    category: ProjectCategory.COMPANY,
    companyName: "Kwalee",
    imageUrl: 'https://picsum.photos/seed/triplecarproto/600/400', // Placeholder image - User should replace
    description: "Worked on the 'Triple Car' prototype, contributing to its technical art development. (User: Please add a more detailed description of your role and contributions.)",
    technologies: ["Unity", "Photoshop", "Blender"],
    role: "Technical Artist", // User can refine
    releaseDate: "2024-02",
    playStoreUrl: "",
    appStoreUrl: ""
  },
  {
    id: 'company-proj-textandfly',
    title: 'Text and Fly',
    category: ProjectCategory.COMPANY,
    companyName: "Kwalee",
    imageUrl: 'https://picsum.photos/seed/textandflygame/600/400', // Placeholder image - User should replace
    description: "Contributed to 'Text and Fly', a mobile game, focusing on technical art aspects. (User: Please add a more detailed description of your role and contributions.)",
    technologies: ["Unity", "Photoshop", "Blender"],
    role: "Technical Artist", // User can refine
    releaseDate: "2023-10",
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.cheddarbox.slingshotquiz&hl=en_IN",
    appStoreUrl: "https://apps.apple.com/us/app/text-fly/id1670392605"
  },
  {
    id: 'company-proj-mergetheliquids',
    title: 'Merge the Liquids (proto)',
    category: ProjectCategory.COMPANY,
    companyName: "Kwalee",
    imageUrl: 'https://picsum.photos/seed/mergeliquidsproto/600/400', // Placeholder image - User should replace
    description: "Involved in the prototyping phase of 'Merge the Liquids', focusing on technical art implementation. (User: Please add a more detailed description of your role and contributions.)",
    technologies: ["Unity", "Photoshop", "Blender"],
    role: "Technical Artist", // User can refine
    releaseDate: "2023-06",
    playStoreUrl: "",
    appStoreUrl: ""
  },
  {
    id: 'company-proj-survivalmatch',
    title: 'Survival Match',
    category: ProjectCategory.COMPANY,
    companyName: "Kwalee",
    imageUrl: 'https://picsum.photos/seed/survivalmatchgame/600/400', // Placeholder image - User should replace
    description: "Worked on 'Survival Match', contributing technical art expertise. (User: Please add a more detailed description of your role and contributions.)",
    technologies: ["Unity", "Photoshop", "Blender"],
    role: "Technical Artist", // User can refine
    releaseDate: "2023-02",
    playStoreUrl: "",
    appStoreUrl: ""
  },
  {
    id: 'company-proj-monstercitymerge',
    title: 'Monster City Merge',
    category: ProjectCategory.COMPANY,
    companyName: "Kwalee",
    imageUrl: 'https://picsum.photos/seed/monstercitymerge/600/400', // Placeholder image - User should replace
    description: "Contributed to 'Monster City Merge', focusing on technical art solutions. (User: Please add a more detailed description of your role and contributions.)",
    technologies: ["Unity", "Photoshop", "Blender"],
    role: "Technical Artist", // User can refine
    releaseDate: "2022-10",
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.cheddarbox.seamonstersunset&hl=en_IN",
    appStoreUrl: "https://apps.apple.com/us/app/monster-city-merge/id1637644545"
  }
];

const personalProjects: Project[] = []; // Personal projects cleared as per request

export const PROJECTS_DATA: Project[] = [...companyProjects, ...personalProjects].sort((a, b) => {
  if (a.category !== b.category) {
    return a.category === ProjectCategory.COMPANY ? -1 : 1;
  }
  const dateA = a.releaseDate ? new Date(a.releaseDate.includes('-') ? a.releaseDate : `${a.releaseDate}-01-01`).getTime() : 0;
  const dateB = b.releaseDate ? new Date(b.releaseDate.includes('-') ? b.releaseDate : `${b.releaseDate}-01-01`).getTime() : 0;
  return dateB - dateA;
});

export const RESUME_DATA: ResumeData = {
  summary: "A passionate and results-oriented Technical Artist with 4 years of dedicated experience in the mobile game industry, specializing in casual and hybrid-casual genres. Proven ability to bridge the artistic vision with technical execution, focusing on UI/UX implementation, VFX creation, shader development, and performance optimization within the Unity engine. Eager to contribute to innovative projects and collaborative team environments.",
  experience: [
    {
      role: "Game Artist - II",
      company: "Kwalee",
      duration: "Apr 2023 - Present",
      companyUrl: "https://www.kwalee.com/",
      responsibilities: [
        "Set up character rigs in Spine and exported them to Unity for animation and integration",
        "Designed and animated UI popups, including layout and transitions",
        "Built small editor tools to help manage and update images across multiple prefabs",
        "Created visual effects (VFX) for both UI elements and character actions using Unity",
        "Optimized texture and UI assets to reduce build size and improve performance on mobile"
      ],
    },
    {
      role: "Game Artist - I",
      company: "Kwalee",
      duration: "Mar 2021 - Apr 2023",
      companyUrl: "https://www.kwalee.com/",
      responsibilities: [
        "Worked on multiple hyper-casual and hybrid-casual game prototypes",
        "Created quick 3D mock-ups to visualize gameplay and environment concepts",
        "Designed shaders using node-based systems like Shader Graph to improve visual quality",
        "Conducted internal workshops to train the art team on tools, workflows, and best practices",
        "Produced animations for both 3D models and UI elements using Unity's Animator and Timeline",
        "Optimized assets for mobile platforms by analyzing performance with the Unity Profiler and Frame Debugger, and resolving bottlenecks"
      ],
    },
  ],
  education: [
    {
      degree: "BCA (Game and Mobile App development)",
      institution: "University of Creative Technology (Example)", // User can update this placeholder
      year: "2018-2021",
    },
  ],
  skills: {
    technical: [
      "Unity Engine",
      "C#",
      "Shader Graph",
      "VFX (Unity Particle System, Shuriken)",
      "UI/UX Implementation (UGUI, TextMeshPro)",
      "Performance Optimization (Profiling, Draw Calls, Memory)",
      "Render Pipelines (URP, Built-in)",
      "Animation Systems (Mecanim)",
      "Lighting & Post-Processing",
      "Version Control (Git, Plastic SCM)",
    ],
    software: [
      "Unity",
      "Adobe Photoshop",
      "Adobe Illustrator",
      "Blender",
      "Substance Painter/Designer",
      "Spine (2D Animation)",
      "Visual Studio"
    ],
    toolsAndPlatforms: ["Jira", "Confluence", "iOS", "Android", "Mobile Game Development Cycle"],
  },
  resumePdfUrl: "/Portfolio/resume/Aravind_Nair_Resume.pdf", // User needs to place their PDF here and ensure path is correct for Vite base path
};

export const CONTACT_DATA: ContactData = {
  title: "Let's Connect",
  email: "aravind.nair.portfolio@example.com", // User should replace
  links: [
    { name: "LinkedIn", url: "https://www.linkedin.com/in/aravindnairtechartist", icon: LinkedinIcon }, // User should replace
    { name: "ArtStation", url: "https://www.artstation.com/aravindnair", icon: ArtstationIcon }, // User should replace
    { name: "Email", url: "mailto:aravind.nair.portfolio@example.com", icon: MailIcon }, // User should replace
  ],
};
