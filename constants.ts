
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
  profileImageUrl: '/images/profile.jpg', // Updated to local path
};

const companyProjects: Project[] = [
  {
    id: 'company-proj-puzzlesandcats',
    title: 'Puzzles and Cats',
    category: ProjectCategory.COMPANY,
    companyName: "Kwalee",
    imageUrls: [
        '/images/projects/puzzlesandcats/01.jpg',
        '/images/projects/puzzlesandcats/02.jpg',
        '/images/projects/puzzlesandcats/03.jpg',
    ],
    platform: "Android / iOS",
    description: "A mobile puzzle game blending match-3 mechanics with base defense. Players solve puzzles to earn resources, unlock upgrades, and deploy cat defenders to protect their territory.",
    roleAndContributions: [
      "Implemented and animated UI screens including home, shop, and popups.",
      "Integrated 3D defender characters and Spine 2D enemies into Unity.",
      "Rigged enemy and secondary characters in Spine for seamless in-game use.",
      "Helped unify the visual direction from an earlier mixed 2D/3D layout.",
      "Collaborated closely with artists, designers, and developers to ensure consistent performance."
    ],
    technologies: ["Unity", "Blender", "Photoshop", "Spine", "Substance Painter"],
    releaseDate: "2024-06",
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.kwalee.puzzlesandcatsnew&hl=en_IN",
    appStoreUrl: "https://apps.apple.com/in/app/puzzles-cats/id6738574871"
  },
  {
    id: 'company-proj-looper',
    title: 'Looper',
    category: ProjectCategory.COMPANY,
    companyName: "Kwalee",
    imageUrls: [
        '/images/projects/looper/01.jpg',
        '/images/projects/looper/02.jpg',
    ],
    platform: "Android / iOS",
    description: "A puzzle game reimagined with hybrid casual elements, featuring revamped visuals, improved UI, and engaging new tutorial flows.",
    roleAndContributions: [
      "Redesigned UI screens and tutorial flows to fit a hybrid casual audience.",
      "Added VFX to enhance feedback during gameplay and transitions.",
      "Created and exported SVG-based level assets for server use.",
      "Helped explore updated UI/UX concepts during early development."
    ],
    technologies: ["Unity", "Photoshop", "After Effects"],
    releaseDate: "2024-04",
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.kwalee.looper&hl=en_IN",
    appStoreUrl: "https://apps.apple.com/us/app/looper/id1370475630"
  },
  {
    id: 'company-proj-triplecar',
    title: 'Triple Car (Color Match Mayhem)',
    category: ProjectCategory.COMPANY,
    companyName: "Kwalee",
    imageUrls: [
        '/images/projects/triplecar/01.jpg',
        '/images/projects/triplecar/02.jpg',
        '/images/projects/triplecar/03.jpg',
    ],
    platform: "Android / iOS",
    description: "A fast-paced, reflex-driven match game featuring colorful vehicle blocks and dynamic animations. Built for quick gameplay and satisfying transitions.",
    roleAndContributions: [
      "Designed popup UI screens and screen transitions.",
      "Developed modular car entry/exit animations.",
      "Profiled and optimized performance by reducing draw calls and UI file sizes.",
      "Created scalable, easy-to-read UI icons for small screens."
    ],
    technologies: ["Unity", "Photoshop", "Blender"],
    releaseDate: "2024-02",
    playStoreUrl: "",
    appStoreUrl: ""
  },
  {
    id: 'company-proj-textandfly',
    title: 'Text and Fly',
    category: ProjectCategory.COMPANY,
    companyName: "Kwalee",
    imageUrls: [
        '/images/projects/textandfly/01.jpg',
    ],
    platform: "Android / iOS",
    description: "A word-based trivia game where players launch avatars by typing fast, correct answers. Features a progression system with unlockable islands and characters.",
    roleAndContributions: [
      "Overhauled UI as part of the shift to hybrid casual gameplay.",
      "Designed island meta screens and new characters while retaining the game’s original theme.",
      "Optimized gameplay and UI assets for mobile performance."
    ],
    technologies: ["Unity", "Photoshop", "Blender"],
    releaseDate: "2023-10",
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.cheddarbox.slingshotquiz&hl=en_IN",
    appStoreUrl: "https://apps.apple.com/us/app/text-fly/id1670392605"
  },
  {
    id: 'company-proj-mergetheliquids',
    title: 'Merge the Liquids',
    category: ProjectCategory.COMPANY,
    companyName: "Kwalee",
    imageUrls: [
        '/images/projects/mergetheliquids/01.jpg',
        '/images/projects/mergetheliquids/02.jpg',
    ],
    platform: "Android / iOS",
    description: "An atmospheric puzzle prototype focused on fluid mechanics and ambient environments, supported by stylized shaders and minimal UI.",
    roleAndContributions: [
      "Created the core UI layout and menu system.",
      "Developed custom shaders (e.g., stylized grass) to enhance environmental mood.",
      "Tuned lighting for visual polish without sacrificing performance."
    ],
    technologies: ["Unity", "Photoshop", "Blender"],
    releaseDate: "2023-06",
    playStoreUrl: "",
    appStoreUrl: ""
  },
  {
    id: 'company-proj-survivalmatch',
    title: 'Survival Match',
    category: ProjectCategory.COMPANY,
    companyName: "Kwalee",
    imageUrls: [
        '/images/projects/survivalmatch/01.jpg',
    ],
    platform: "Android / iOS",
    description: "A match-3 game featuring continuous scene-to-scene transitions as players progress across islands. Focuses on immersion through timing and flow.",
    roleAndContributions: [
      "Managed level-to-level transitions using Unity Timeline.",
      "Synced scene changes and animations with gameplay rhythm.",
      "Coordinated closely with developers and designers to perfect timing and flow."
    ],
    technologies: ["Unity", "Photoshop", "Blender"],
    releaseDate: "2023-02",
    playStoreUrl: "",
    appStoreUrl: ""
  },
  {
    id: 'company-proj-monstercitymerge',
    title: 'Monster City Merge',
    category: ProjectCategory.COMPANY,
    companyName: "Kwalee",
    imageUrls: [
        '/images/projects/monstercitymerge/01.jpg',
        '/images/projects/monstercitymerge/02.jpg',
        '/images/projects/monstercitymerge/03.jpg',
        '/images/projects/monstercitymerge/04.jpg',
    ],
    platform: "Android / iOS",
    description: "A destruction-based merge game where players evolve sea monsters and destroy cities. Built to test long-term progression and large-scale gameplay systems.",
    roleAndContributions: [
      "Modeled 3D assets for islands, buildings, and sea monsters (including scrapped “Tornado” units).",
      "Built the initial playable prototype with merge and destruction mechanics.",
      "Led asset optimization by simplifying rigs, compressing textures, and balancing detail with performance.",
      "Collaborated with design and programming teams to manage production complexity."
    ],
    technologies: ["Unity", "Photoshop", "Blender"],
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
  return dateB - dateA; // Sort by date descending
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
  resumePdfUrl: "/Aravind_Nair_Resume.pdf", // Path relative to public folder root
};

export const CONTACT_DATA: ContactData = {
  title: "Let's Connect",
  email: "aravindcoco16@gmail.com",
  links: [
    { name: "LinkedIn", url: "https://www.linkedin.com/in/evolveart/", icon: LinkedinIcon },
    { name: "ArtStation", url: "https://www.artstation.com/aravindnair", icon: ArtstationIcon },
    { name: "Email", url: "mailto:aravindcoco16@gmail.com", icon: MailIcon },
  ],
};
