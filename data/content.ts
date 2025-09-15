import { NavLink, EducationItem, Project, Certificate, Workshop, BlogPost, SocialLink, Skill, Testimonial, Experience } from '../types.ts';
import { LinkedInIcon, TwitterIcon, InstagramIcon, FacebookIcon } from '../components/icons/SocialIcons.tsx';
import { PublicHealthIcon, CommunityOutreachIcon, DigitalMarketingIcon, ProjectManagementIcon, ContentCreationIcon, PublicSpeakingIcon } from '../components/icons/SkillIcons.tsx';


export const navLinks: NavLink[] = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Education', href: '#education' },
  { name: 'Experience', href: '#experience' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Certificates', href: '#certificates' },
  { name: 'Testimonials', href: '#testimonials'},
  { name: 'Workshops', href: '#workshops' },
  { name: 'Blog', href: '#blog' },
  { name: 'Contact', href: '#contact' },
];

export const longAboutMe = {
    title: "My Journey in Public Health and Community Building",
    imageUrl: "https://picsum.photos/seed/community-work/1200/600",
    content: `
        <p>Hello! I'm Shah Jahan Baloch, a passionate advocate for public health and community development. Hailing from the resilient region of Awaran, Balochistan, Pakistan, I've witnessed firsthand how access to health and education can transform lives. This has fueled my dedication to creating sustainable, positive change in communities, both online and offline.</p>
        <p>My journey began not in a classroom, but in observing the daily struggles and triumphs of my community. I saw a gap between potential and opportunity, and I felt a deep-seated responsibility to help bridge it. This led me to pursue a Bachelor's in Public Health at the Islamia University of Bahawalpur, where I am learning to build the theoretical frameworks needed to turn passion into impactful, evidence-based action.</p>
        <h2>My Mission and Vision</h2>
        <p>My core belief is simple: "Education frees the individual, and health improves life." This principle guides all my endeavors. I am on a mission to dismantle the barriers that prevent individuals from accessing quality healthcare and education. My goal is to build healthier, more informed, and empowered communities through a combination of digital education, grassroots initiatives, and strategic advocacy.</p>
        <p>I am particularly focused on leveraging technology to reach underserved populations. In a world that is increasingly digital, I believe we have an unprecedented opportunity to disseminate knowledge and connect people with vital resources. Whether it's through a digital literacy program for youth or a social media campaign for health awareness, I am always exploring innovative ways to make a difference.</p>
        <h2>Leadership and Initiatives</h2>
        <p>My academic pursuits are complemented by hands-on experience in community organizing. I am the founder of several initiatives, including the 'Build Bandat Foundation,' a non-profit dedicated to long-term development in my home village. These projects have taught me the importance of collaboration, persistence, and the power of a shared vision.</p>
        <p>As an alumnus of the Aspire Institute's Leadership Development Program, I've had the privilege of connecting with a global network of young leaders who share my commitment to creating positive change. This experience has broadened my perspective and reinforced my belief in the power of collective action.</p>
        <p>Thank you for taking the time to learn more about my journey. I am always open to collaboration and new ideas. If my mission resonates with you, please feel free to connect with me.</p>
    `
};


// FIX: Exported socialLinks constant. It was being imported in Contact.tsx but was not defined.
export const socialLinks: SocialLink[] = [
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/shahjahanbaloch/',
    icon: LinkedInIcon,
  },
  {
    name: 'Twitter',
    url: 'https://twitter.com/shahjahanbaloch',
    icon: TwitterIcon,
  },
  {
    name: 'Instagram',
    url: 'https://www.instagram.com/shahjahanbaloch/',
    icon: InstagramIcon,
  },
  {
    name: 'Facebook',
    url: 'https://www.facebook.com/shahjahan.baloch.official/',
    icon: FacebookIcon,
  }
];

export const educationHistory: EducationItem[] = [
  {
    institution: 'Govt. Boys Degree College Awaran',
    degree: 'Intermediate in Pre-Medical',
    duration: '2024',
    description: 'Completed with exceptional performance, scoring 940/1100. Built a strong foundation in biological sciences, chemistry, and physics, which sparked my interest in human health and medicine.',
  },
  {
    institution: 'Islamia University of Bahawalpur',
    degree: 'Public Health (Bachelor\'s)',
    duration: '2025 - Present',
    description: 'Currently pursuing a Bachelor\'s degree focusing on epidemiology, health policy, and community health sciences to understand and improve population health outcomes.',
  },
  {
    institution: 'Aspire Institute',
    degree: 'Leadership Development Program (Alumni)',
    duration: '2-Month Online Course',
    description: 'Completed an intensive program focused on personal growth, leadership skills, and fostering a global network of young leaders.',
  }
];

export const experience: Experience[] = [
    {
        company: 'World Health Organization (WHO)',
        role: 'Data Collector',
        duration: '2024 (2 months)',
        description: 'Conducted field data collection for public health research in Balochistan, supporting WHO initiatives to improve healthcare access in underserved communities.'
    },
    {
        company: 'Nazir Health Complex',
        role: 'Social Media Manager & Content Editor',
        duration: '2 months',
        description: 'Managed all social media accounts and created visual content including posts, logos, and banners. Played a key role in helping establish this healthcare initiative from the ground up.'
    },
    {
        company: 'Community Engagement Projects',
        role: 'Project Coordinator',
        duration: 'Ongoing',
        description: 'Leading multiple grassroots initiatives including school sanitation projects and workshops addressing social issues. Continuously working to improve community health and education outcomes.'
    }
];

export const skills: Skill[] = [
  {
    name: 'Public Health Research',
    description: 'Analyzing health data and trends to inform evidence-based public health strategies and interventions.',
    icon: PublicHealthIcon,
  },
  {
    name: 'Community Outreach',
    description: 'Building relationships and engaging with communities to promote health education and awareness programs.',
    icon: CommunityOutreachIcon,
  },
  {
    name: 'Digital Marketing',
    description: 'Utilizing online platforms and social media to disseminate health information and manage digital campaigns.',
    icon: DigitalMarketingIcon,
  },
  {
    name: 'Project Management',
    description: 'Planning, executing, and overseeing community projects from conception to completion.',
    icon: ProjectManagementIcon,
  },
  {
    name: 'Content Creation',
    description: 'Developing engaging written and visual content for blogs, social media, and educational materials.',
    icon: ContentCreationIcon,
  },
  {
    name: 'Public Speaking',
    description: 'Effectively communicating complex health topics to diverse audiences in workshops and seminars.',
    icon: PublicSpeakingIcon,
  },
];

export const projects: Project[] = [
  {
    title: 'Build Bandat Foundation',
    acronym: 'BBF',
    description: 'A grassroots-level non-profit foundation working to bring sustainable change to life. Focused on long-term development projects in Bandat, covering education, healthcare, and economic empowerment at the community level.',
  },
  {
    title: 'Field Research Survey Tool',
    acronym: 'FRST',
    description: 'Designed and built a custom web-based survey tool to streamline data collection for my Public Health research in Awaran. The platform eliminates the need for paper forms, enables offline use, and stores responses digitally for easier analysis.',
    date: 'August 2025',
    imageUrl: '/field-research-tool.png',
    link: 'https://shahjahanbaloch09.github.io/Data1/#/'
  },
];

export const coursesAndCertifications: Certificate[] = [
  { id: 1, title: 'Community Health Worker Certification', institute: 'Coursera', date: 'May 2023', description: 'A comprehensive course covering the fundamentals of community health, outreach, and patient advocacy.', imageUrl: 'https://picsum.photos/seed/cert1/800/600' },
  { id: 2, title: 'Digital Education Leadership', institute: 'EdX', date: 'March 2023', description: 'Learned strategies for leveraging digital tools to create engaging and effective online learning experiences.', imageUrl: 'https://picsum.photos/seed/cert2/800/600' },
  { id: 3, title: 'Project Management Essentials', institute: 'PMI', date: 'January 2023', description: 'Acquired foundational project management skills, including planning, execution, and monitoring of project lifecycles.', imageUrl: 'https://picsum.photos/seed/cert3/800/600' },
  { id: 4, title: 'First Aid & CPR Training', institute: 'Red Cross', date: 'December 2022', description: 'Certified in providing immediate care for injuries and medical emergencies, including CPR and AED usage.', imageUrl: 'https://picsum.photos/seed/cert5/800/600' },
];

export const testimonials: Testimonial[] = [
  {
    quote: "Shah Jahan's dedication to community health is truly inspiring. His ability to connect with people and motivate them towards positive change is remarkable. He was a key player in our recent health awareness campaign.",
    name: 'Dr. Ayesha Khan',
    title: 'Senior Public Health Official',
    imageUrl: 'https://picsum.photos/seed/person1/100/100',
    linkedinUrl: '#',
  },
  {
    quote: "Working with Shah Jahan on community development projects has been a privilege. His passion for digital education and his innovative approach have empowered countless students in our region.",
    name: 'Fatima Ahmed',
    title: 'Community Development Coordinator',
    imageUrl: 'https://picsum.photos/seed/person2/100/100',
    linkedinUrl: '#',
  },
  {
    quote: "As a community leader, I've seen Shah Jahan's tireless efforts firsthand. He doesn't just manage projects; he builds relationships and fosters a true sense of collective responsibility. He is a great asset to any team.",
    name: 'Ali Raza',
    title: 'Community Elder, Bandat Village',
    imageUrl: 'https://picsum.photos/seed/person3/100/100',
    linkedinUrl: '#',
  },
];

export const workshops: Workshop[] = [
    {
        id: 1,
        title: 'Health Awareness Camp 2023',
        description: 'A successful health camp providing free check-ups and health education to over 200 community members.',
        date: 'November 15, 2023',
        location: 'Awaran, Balochistan',
        images: [
            'https://picsum.photos/seed/workshop1a/400/300',
            'https://picsum.photos/seed/workshop1b/400/300',
            'https://picsum.photos/seed/workshop1c/400/300',
            'https://picsum.photos/seed/workshop1d/400/300',
            'https://picsum.photos/seed/workshop1e/400/300',
        ]
    },
    {
        id: 2,
        title: 'Digital Literacy for Youth',
        description: 'A 3-day workshop empowering local youth with essential digital skills, including internet safety and online research.',
        date: 'July 22, 2023',
        location: 'Bandat Village',
        images: [
            'https://picsum.photos/seed/workshop2a/400/300',
            'https://picsum.photos/seed/workshop2b/400/300',
            'https://picsum.photos/seed/workshop2c/400/300',
        ]
    },
    {
        id: 3,
        title: 'First Aid Training Session',
        description: 'Partnered with local medics to provide basic first aid and CPR training to school teachers and community leaders.',
        date: 'April 05, 2024',
        location: 'Bahawalpur',
        images: [
            'https://picsum.photos/seed/workshop3a/400/300',
            'https://picsum.photos/seed/workshop3b/400/300',
            'https://picsum.photos/seed/workshop3c/400/300',
            'https://picsum.photos/seed/workshop3d/400/300',
        ]
    }
];


export const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: 'The Role of Community Engagement in Public Health',
    date: 'October 26, 2023',
    excerpt: 'Reflecting on my recent field experience and the pivotal role that local communities play in shaping effective health interventions.',
    imageUrl: 'https://picsum.photos/seed/blog1/400/300',
    content: `
      <p>My recent field experience brought me face-to-face with the raw, unfiltered realities of public health challenges. It's one thing to study epidemiology charts and health policies in a classroom, and another entirely to see how those policies succeed or fail on the ground. The single most significant takeaway for me was the undeniable power of community engagement.</p>
      <p>We often approach public health with a top-down model, designing interventions in boardrooms and expecting communities to adopt them. But true, sustainable change happens when the community is not just a recipient, but a partner. During our health camp in a remote village, our initial plan for a vaccination drive met with skepticism. It was only after we sat down with community elders, listened to their concerns, and involved local volunteers in the process that we saw a shift. They became the advocates, the educators, and the drivers of the initiative.</p>
      <p>This experience solidified my belief that our role as public health professionals is to be facilitators. We must empower communities with knowledge and resources, but trust in their wisdom to lead the way. They know their needs, their culture, and their challenges better than any outsider ever could. True progress isn't measured in the number of pamphlets distributed, but in the number of community members who take ownership of their collective health.</p>
    `,
  },
  {
    id: 2,
    title: 'Launching the Build Bandat Foundation: A Dream Realized',
    date: 'September 15, 2023',
    excerpt: 'The journey from a simple idea to a registered foundation has been incredible. Here is a look at our mission and what is next for BBF.',
    imageUrl: 'https://picsum.photos/seed/blog2/400/300',
    content: `
      <p>It began as a conversation, a shared frustration about the lack of resources in our community. That conversation grew into an idea, and today, that idea is a reality: the Build Bandat Foundation (BBF) is officially a registered non-profit organization. The journey has been one of late nights, endless paperwork, and unwavering determination from a small group of dedicated individuals.</p>
      <p>Our mission is simple but ambitious: to create sustainable development in Bandat through three core pillars: education, healthcare, and economic empowerment. We're not here to offer temporary fixes. We're here to build infrastructure, both physical and social, that will serve generations to come. This means building computer labs in schools, organizing regular health check-up camps, and providing vocational training for young adults.</p>
      <p>This is just the beginning. The road ahead is long, but our resolve is stronger than ever. The launch of BBF isn't just a milestone; it's a promise to our community that we are committed to building a brighter future, together.</p>
    `,
  },
  {
    id: 3,
    title: 'Digital Tools for a Healthier Tomorrow',
    date: 'August 01, 2023',
    excerpt: 'Exploring how technology and digital platforms can be leveraged to disseminate crucial health information in remote areas.',
    imageUrl: 'https://picsum.photos/seed/blog3/400/300',
    content: `
      <p>In an age where information is at our fingertips, a significant digital divide still exists, particularly when it comes to health literacy in remote regions. How can we bridge this gap? The answer lies in leveraging the technology that is already becoming ubiquitous: the mobile phone.</p>
      <p>Through initiatives like Vision for Tomorrow (VFT), we are exploring how simple, accessible digital tools can become powerful vehicles for health education. This includes creating WhatsApp-based health awareness groups where verified information about hygiene, nutrition, and disease prevention is shared in the local language. We're also developing short, animated videos that are easy to understand and share, even in low-bandwidth areas.</p>
      <p>The potential is immense. Technology allows us to bypass traditional barriers of distance and literacy, delivering vital health information directly into the hands of those who need it most. It's about more than just apps and websites; it's about creating a digitally connected ecosystem of care that empowers individuals to make informed decisions about their health.</p>
    `,
  }
];