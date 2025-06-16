
import { Project, ProjectCategory, ResumeData, NavLink, AboutData, ContactData, HeroData } from './types';
import { GithubIcon, LinkedinIcon, MailIcon, GlobeIcon } from './components/icons/SocialIcons';

export const HERO_DATA: HeroData = {
  title: "Hi, I'm [Your Name]",
  subtitle: "Technical Artist",
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
  introduction: "I'm a Technical Artist with a passion for bridging the gap between art and technology in game development.",
  bioParagraphs: [
    "I've honed my skills in creating efficient art pipelines, developing custom tools, crafting shaders (primarily using visual tools like Unity's Shader Graph), and optimizing performance to deliver visually stunning and smooth gameplay experiences.",
    "My journey began with a fascination for how games are made, which quickly evolved into a career focused on solving complex visual and technical challenges. I thrive in collaborative environments, working closely with artists and engineers to bring creative visions to life.",
    "When I'm not deep in a game engine or scripting, you can find me exploring new technologies, contributing to open-source projects, or sketching out new game ideas."
  ],
  profileImageUrl: 'https://picsum.photos/seed/techartist/400/400',
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
  summary: "A highly motivated and skilled Technical Artist. Proficient in shader development (Unity Shader Graph), C# scripting, pipeline optimization, and performance analysis. Passionate about creating visually compelling and technically sound game art. Proven ability to collaborate effectively with cross-functional teams to deliver high-quality titles.",
  experience: [
    {
      role: 'Lead Technical Artist',
      company: 'GameDev Corp',
      companyUrl: 'https://example.com/gamedevcorp',
      duration: 'Jan 2022 - Present',
      responsibilities: [
        'Led a team of technical artists on flagship mobile titles.',
        'Designed and implemented advanced shader systems for characters and environments.',
        'Developed and maintained art pipelines and custom tools (C#).',
        'Collaborated with engineering on graphics performance optimization.',
        'Mentored junior technical artists and provided technical guidance.',
      ],
    },
    {
      role: 'Technical Artist',
      company: 'IndieJoy Studios',
      companyUrl: 'https://example.com/indiejoystudios',
      duration: 'Jun 2020 - Dec 2021',
      responsibilities: [
        'Created VFX and implemented UI elements for mobile puzzle games.',
        'Optimized assets and scenes for performance on various mobile devices.',
        'Wrote C# scripts to automate art asset processing and integration.',
        'Supported art team with technical problem-solving and engine expertise.',
      ],
    },
  ],
  education: [
    {
      degree: 'B.Sc. in Computer Science with Game Development Focus',
      institution: 'University of Technology',
      year: '2020',
    },
     {
      degree: 'Diploma in 3D Animation & VFX',
      institution: 'Art & Design Institute',
      year: '2018',
    },
  ],
  skills: {
    technical: ['Shader Development (Unity Shader Graph)', 'Scripting (C#)', 'Pipeline Development & Automation', 'Performance Profiling & Optimization', 'VFX Creation', 'Lighting & Rendering', 'Procedural Content Generation'],
    software: ['Unity', 'Blender', 'Maya', 'Photoshop', 'Substance Painter', 'Spine2D'],
    toolsAndPlatforms: ['Git', 'Jira', 'iOS', 'Android', 'Figma'],
  },
  resumePdfUrl: '/path-to-your-resume.pdf', // Replace with actual path or link
};


export const CONTACT_DATA: ContactData = {
  title: "Let's Connect",
  email: "your.email@example.com",
  links: [
    { name: 'GitHub', url: 'https://github.com/yourusername', icon: GithubIcon },
    { name: 'LinkedIn', url: 'https://linkedin.com/in/yourusername', icon: LinkedinIcon },
  ],
};
