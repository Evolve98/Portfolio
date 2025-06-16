
import { Project, ProjectCategory, ResumeData, NavLink, AboutData, ContactData, HeroData } from './types';
import { GithubIcon, LinkedinIcon, MailIcon, GlobeIcon } from './components/icons/SocialIcons';

export const HERO_DATA: HeroData = {
  title: "Hi, I'm [Your Name]",
  subtitle: "Technical Artist", // Updated subtitle
  ctaText: "View My Work",
  ctaLink: "#projects"
};

export const NAV_LINKS: NavLink[] = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#projects', label: 'Projects' },
  { href: '#resume', label: 'Resume' },
  { href: '#contact', label: 'Contact' },
];

export const ABOUT_DATA: AboutData = {
  greeting: "Hello there!",
  introduction: "I'm a Game Artist and Technical Artist working at Kwalee, focused on casual and hybrid casual mobile games.",
  bioParagraphs: [
    "I have 4 years of experience creating game-ready art and implementing it directly into Unity including animation systems, VFX, and performance optimization.",
    "In my free time, I enjoy creating stylized shaders and recreating visual effects from other games to better understand their workflows and techniques."
  ],
  profileImageUrl: 'https://picsum.photos/seed/techartist/400/400', // Placeholder image
};


export const PROJECTS_DATA: Project[] = [
  {
    id: 'proj1',
    title: 'Mobile MOBA "Arena Champions"',
    category: ProjectCategory.COMPANY,
    companyName: "GameDev Corp",
    imageUrl: 'https://picsum.photos/seed/moba/600/400',
    description: 'Led technical art efforts for a new mobile MOBA. Developed character shader systems, optimized environment assets, and created pipeline tools for art integration.',
    technologies: ['Unity', 'ShaderLab', 'C#', 'Python', 'Maya'],
    role: 'Lead Technical Artist',
    projectUrl: 'https://example.com/arenachampions'
  },
  {
    id: 'proj2',
    title: 'Puzzle Adventure "Mystic Isles"',
    category: ProjectCategory.COMPANY,
    companyName: "IndieJoy Studios",
    imageUrl: 'https://picsum.photos/seed/puzzle/600/400',
    description: 'Contributed to UI technical art, VFX creation, and performance optimization for a charming puzzle adventure game on iOS and Android.',
    technologies: ['Unity', 'Photoshop', 'After Effects', 'HLSL'],
    role: 'Technical Artist',
  },
  {
    id: 'proj3',
    title: 'Procedural Terrain Generator',
    category: ProjectCategory.PERSONAL,
    imageUrl: 'https://picsum.photos/seed/terrain/600/400',
    description: 'A personal project exploring procedural content generation for game terrains using noise algorithms and mesh manipulation techniques.',
    technologies: ['Unity', 'C#', 'Compute Shaders'],
    projectUrl: 'https://github.com/yourusername/procedural-terrain',
  },
  {
    id: 'proj4',
    title: 'Custom Shader Library',
    category: ProjectCategory.PERSONAL,
    imageUrl: 'https://picsum.photos/seed/shaderlib/600/400',
    description: 'Developed a collection of reusable shaders for Unity, including effects like toon shading, rim lighting, and tri-planar mapping.',
    technologies: ['Unity', 'ShaderLab', 'HLSL'],
    projectUrl: 'https://github.com/yourusername/custom-shader-library',
  },
  {
    id: 'proj5',
    title: 'Art Pipeline Automation Tools',
    category: ProjectCategory.COMPANY,
    companyName: "GameDev Corp",
    imageUrl: 'https://picsum.photos/seed/pipeline/600/400',
    description: 'Designed and implemented Python scripts for Maya and Photoshop to automate repetitive tasks in the art pipeline, improving team efficiency.',
    technologies: ['Python', 'Maya API', 'Photoshop Scripting'],
    role: 'Technical Artist',
  },
];

export const RESUME_DATA: ResumeData = {
  summary: "A Game Artist and Technical Artist with 4 years of experience at Kwalee, focused on casual and hybrid-casual mobile games. Proficient in creating game-ready art, implementing it in Unity, including animation systems, VFX, shader development, and performance optimization. Passionate about stylized shaders and understanding VFX workflows.",
  experience: [
    {
      role: 'Game artist - II', // Updated role
      company: 'Kwalee',
      // companyUrl: 'https://www.kwalee.com/', // Optional: Add Kwalee's URL
      duration: 'Apr 2023 - Present',
      responsibilities: [
        'Set up character rigs in Spine and exported them to Unity for animation and integration.',
        'Designed and animated UI popups, including layout and transitions.',
        'Built small editor tools to help manage and update images across multiple prefabs.',
        'Created visual effects (VFX) for both UI elements and character actions using Unity.',
        'Optimized texture and UI assets to reduce build size and improve performance on mobile.',
      ],
    },
    {
      role: 'Game artist - I',
      company: 'Kwalee',
      // companyUrl: 'https://www.kwalee.com/', // Optional: Add Kwalee's URL
      duration: 'Mar 2021 - Apr 2023',
      responsibilities: [
        'Worked on multiple hyper-casual and hybrid-casual game prototypes.',
        'Created quick 3D mock-ups to visualize gameplay and environment concepts.',
        'Designed shaders using node-based systems like Shader Graph to improve visual quality.',
        'Conducted internal workshops to train the art team on tools, workflows, and best practices.',
        'Produced animations for both 3D models and UI elements using Unity\'s Animator and Timeline.',
        'Optimized assets for mobile platforms by analyzing performance with the Unity Profiler and Frame Debugger, and resolving bottlenecks.',
      ],
    },
  ],
  education: [
    {
      degree: 'BCA in game development and mobile applications', // Updated degree
      institution: 'Cmr Institute of Management Studies', // Updated institution
      year: '2018', // Updated year
    },
     {
      degree: 'Diploma in 3D Animation & VFX',
      institution: 'Art & Design Institute',
      year: '2018', // Assuming this is a separate, previous qualification. Adjust if this should also be 2018 or another year.
    },
  ],
  skills: {
    technical: ['Unity Engine', 'Game Art Creation', 'Technical Art', 'Animation Systems (Unity Animator, Timeline, Spine)', 'VFX Creation', 'Shader Development (Shader Graph)', 'Performance Profiling & Optimization (Unity Profiler, Frame Debugger)', 'UI Design & Animation', 'Editor Tooling (Unity)', '3D Mock-ups', 'Rigging (Spine)'],
    software: ['Unity', 'Spine', 'Maya', 'Blender', 'Photoshop', 'Substance Painter'], 
    toolsAndPlatforms: ['Git', 'Jira', 'iOS', 'Android', 'Figma'],
  },
  resumePdfUrl: '/path-to-your-resume.pdf', // Replace with actual path or link
};


export const CONTACT_DATA: ContactData = {
  title: "Let's Connect",
  email: "your.email@example.com", // Replace with your actual email
  links: [
    { name: 'GitHub', url: 'https://github.com/yourusername', icon: GithubIcon }, // Replace with your GitHub
    { name: 'LinkedIn', url: 'https://linkedin.com/in/yourusername', icon: LinkedinIcon }, // Replace with your LinkedIn
  ],
};