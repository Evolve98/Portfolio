
import { Project, ProjectCategory, ResumeData, NavLink, AboutData, ContactData, HeroData } from './types';
import { LinkedinIcon, MailIcon, GlobeIcon, ArtstationIcon } from './components/icons/SocialIcons';

export const HERO_DATA: HeroData = {
  title: "Hi, I'm Aravind Nair", // Updated to actual name
  subtitle: "Technical Artist", 
  ctaText: "View My Work",
  ctaLink: "#projects"
};

export const NAV_LINKS: NavLink[] = [
  { href: '/#home', label: 'Home' },
  { href: '/#about', label: 'About' },
  { href: '/#projects', label: 'Projects' },
  { href: '/#resume', label: 'Resume' },
  { href: '/#contact', label: 'Contact' },
];

export const ABOUT_DATA: AboutData = {
  greeting: "Hello there!",
  introduction: "I'm a Game Artist and Technical Artist working at Kwalee, focused on casual and hybrid casual mobile games.",
  bioParagraphs: [
    "I have 4 years of experience creating game-ready art and implementing it directly into Unity including animation systems, VFX, and performance optimization.",
    "In my free time, I enjoy creating stylized shaders and recreating visual effects from other games to better understand their workflows and techniques."
  ],
  profileImageUrl: 'https://picsum.photos/seed/aravindnair/400/400', // Placeholder image - update with actual
};


export const PROJECTS_DATA: Project[] = [
  {
    id: 'moba-arena-champions', // SEO-friendly ID
    title: 'Mobile MOBA "Arena Champions"',
    category: ProjectCategory.COMPANY,
    companyName: "GameDev Corp",
    imageUrl: 'https://picsum.photos/seed/moba/600/400',
    description: 'Led technical art efforts for a new mobile MOBA. Developed character shader systems, optimized environment assets, and created pipeline tools for art integration.',
    longDescription: 'Detailed involvement included creating advanced shader graphs for character customization, optimizing draw calls for large environment scenes, and developing Python scripts for Maya to streamline the asset export process to Unity. Worked closely with engineering and design teams to ensure visual targets were met within performance budgets on target mobile devices.',
    technologies: ['Unity', 'ShaderLab', 'C#', 'Python', 'Maya'],
    role: 'Lead Technical Artist',
    projectUrl: 'https://example.com/arenachampions',
    detailImages: [
      'https://picsum.photos/seed/moba-detail1/800/600',
      'https://picsum.photos/seed/moba-detail2/800/600',
      'https://picsum.photos/seed/moba-detail3/800/600',
    ]
  },
  {
    id: 'puzzle-mystic-isles',
    title: 'Puzzle Adventure "Mystic Isles"',
    category: ProjectCategory.COMPANY,
    companyName: "IndieJoy Studios",
    imageUrl: 'https://picsum.photos/seed/puzzle/600/400',
    description: 'Contributed to UI technical art, VFX creation, and performance optimization for a charming puzzle adventure game on iOS and Android.',
    longDescription: 'Focused on creating fluid UI animations and particle effects for puzzle interactions. Optimized texture atlases and UI shaders to improve loading times and reduce memory footprint. Implemented several post-processing effects to enhance the game\'s visual appeal.',
    technologies: ['Unity', 'Photoshop', 'After Effects', 'HLSL'],
    role: 'Technical Artist',
    detailImages: [
      'https://picsum.photos/seed/puzzle-detail1/800/600',
      'https://picsum.photos/seed/puzzle-detail2/800/600',
    ]
  },
  {
    id: 'procedural-terrain-generator',
    title: 'Procedural Terrain Generator',
    category: ProjectCategory.PERSONAL,
    imageUrl: 'https://picsum.photos/seed/terrain/600/400',
    description: 'A personal project exploring procedural content generation for game terrains using noise algorithms and mesh manipulation techniques.',
    longDescription: 'This project involved implementing various noise functions (Perlin, Simplex) in C# and leveraging Unity\'s Job System and Burst Compiler for high-performance mesh generation. Explored techniques for texturing based on slope and height, and adding procedural object placement (trees, rocks).',
    technologies: ['Unity', 'C#', 'Compute Shaders', 'Job System', 'Burst Compiler'],
    projectUrl: 'https://github.com/yourusername/procedural-terrain', // Update with actual URL
    detailImages: [
      'https://picsum.photos/seed/terrain-detail1/800/600',
      'https://picsum.photos/seed/terrain-detail2/800/600',
      'https://picsum.photos/seed/terrain-detail3/800/600',
      'https://picsum.photos/seed/terrain-detail4/800/600',
    ]
  },
  {
    id: 'custom-shader-library',
    title: 'Custom Shader Library',
    category: ProjectCategory.PERSONAL,
    imageUrl: 'https://picsum.photos/seed/shaderlib/600/400',
    description: 'Developed a collection of reusable shaders for Unity, including effects like toon shading, rim lighting, and tri-planar mapping.',
    longDescription: 'Each shader in the library was written in HLSL and exposed parameters for easy customization in the Unity editor. The library includes examples of surface shaders, vertex/fragment shaders, and post-processing effects. Focused on creating optimized and versatile shaders for various artistic styles.',
    technologies: ['Unity', 'ShaderLab', 'HLSL'],
    projectUrl: 'https://github.com/yourusername/custom-shader-library', // Update with actual URL
    detailImages: [
      'https://picsum.photos/seed/shaderlib-detail1/800/600',
      'https://picsum.photos/seed/shaderlib-detail2/800/600',
    ]
  },
  {
    id: 'art-pipeline-automation',
    title: 'Art Pipeline Automation Tools',
    category: ProjectCategory.COMPANY,
    companyName: "GameDev Corp",
    imageUrl: 'https://picsum.photos/seed/pipeline/600/400',
    description: 'Designed and implemented Python scripts for Maya and Photoshop to automate repetitive tasks in the art pipeline, improving team efficiency.',
    longDescription: 'Developed tools for batch exporting assets from Maya with specific naming conventions and settings, automating texture format conversions in Photoshop, and validating asset integrity before engine import. These tools helped reduce manual errors and save significant production time.',
    technologies: ['Python', 'Maya API', 'Photoshop Scripting'],
    role: 'Technical Artist',
    detailImages: [
      'https://picsum.photos/seed/pipeline-detail1/800/600',
    ]
  },
];

export const RESUME_DATA: ResumeData = {
  summary: "A Game Artist and Technical Artist with 4 years of experience at Kwalee, focused on casual and hybrid-casual mobile games. Proficient in creating game-ready art, implementing it in Unity, including animation systems, VFX, shader development, and performance optimization. Passionate about stylized shaders and understanding VFX workflows.",
  experience: [
    {
      role: 'Game artist - II', 
      company: 'Kwalee',
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
      degree: 'BCA in game development and mobile applications', 
      institution: 'Cmr Institute of Management Studies', 
      year: '2018', 
    },
  ],
  skills: {
    technical: ['Unity Engine', 'Game Art Creation', 'Technical Art', 'Animation Systems (Unity Animator, Timeline, Spine)', 'VFX Creation', 'Shader Development (Shader Graph)', 'Performance Profiling & Optimization (Unity Profiler, Frame Debugger)', 'UI Design & Animation', 'Editor Tooling (Unity)', '3D Mock-ups', 'Rigging (Spine)'],
    software: ['Unity', 'Spine', 'Maya', 'Blender', 'Photoshop', 'Substance Painter'], 
    toolsAndPlatforms: ['Git', 'Jira', 'iOS', 'Android', 'Figma'],
  },
  resumePdfUrl: '/Portfolio/aravind_nair_resume.pdf', // Replace with actual path or link
};


export const CONTACT_DATA: ContactData = {
  title: "Let's Connect",
  email: "aravindcoco16@gmail.com", 
  links: [
    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/evolveart/', icon: LinkedinIcon }, 
    { name: 'ArtStation', url: 'https://www.artstation.com/aravindnair', icon: ArtstationIcon },
  ],
};