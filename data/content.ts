
import { NavLink, EducationItem, Project, Certificate, Workshop, BlogPost, SocialLink, Skill, Testimonial } from '../types.ts';
import { LinkedInIcon, TwitterIcon, InstagramIcon, FacebookIcon } from '../components/icons/SocialIcons.tsx';
import { PublicHealthIcon, CommunityOutreachIcon, DigitalMarketingIcon, ProjectManagementIcon, ContentCreationIcon, PublicSpeakingIcon } from '../components/icons/SkillIcons.tsx';


export const navLinks: NavLink[] = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Education', href: '#education' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Certificates', href: '#certificates' },
  { name: 'Testimonials', href: '#testimonials'},
  { name: 'Blog', href: '#blog' },
  { name: 'Contact', href: '#contact' },
];

export const educationHistory: EducationItem[] = [
  {
    institution: 'Islamia University of Bahawalpur',
    degree: 'Public Health (Bachelor’s)',
    duration: '2025 - Present',
    description: 'Focusing on epidemiology, health policy, and community health sciences to understand and improve population health outcomes.',
  },
  {
    institution: 'Aspire Institute',
    degree: 'Leadership Development Program (Alumni)',
    duration: '2-Month Online Course',
    description: 'Completed an intensive program focused on personal growth, leadership skills, and fostering a global network of young leaders.',
  },
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
    title: 'Vision for Tomorrow',
    acronym: 'VFT',
    description: 'An initiative dedicated to empowering youth through digital literacy and career counseling, bridging the information gap for students in underserved areas.',
  },
  {
    title: 'Vision for Bandata',
    acronym: 'VFB',
    description: 'A community-focused project aimed at improving local infrastructure, promoting sustainable practices, and enhancing quality of life in Bandat village.',
  },
  {
    title: 'Build Bandat Foundation',
    acronym: 'BBF',
    description: 'A non-profit foundation focused on long-term development projects in Bandat, covering education, healthcare, and economic empowerment.',
  },
];

export const coursesAndCertifications: Certificate[] = [
  { id: 1, title: 'Community Health Worker Certification', institute: 'Coursera', date: 'May 2023', description: 'A comprehensive course covering the fundamentals of community health, outreach, and patient advocacy.', imageUrl: 'https://picsum.photos/seed/cert1/400/300' },
  { id: 2, title: 'Digital Education Leadership', institute: 'EdX', date: 'March 2023', description: 'Learned strategies for leveraging digital tools to create engaging and effective online learning experiences.', imageUrl: 'https://picsum.photos/seed/cert2/400/300' },
  { id: 3, title: 'Project Management Essentials', institute: 'PMI', date: 'January 2023', description: 'Acquired foundational project management skills, including planning, execution, and monitoring of project lifecycles.', imageUrl: 'https://picsum.photos/seed/cert3/400/300' },
  { id: 4, title: 'First Aid & CPR Training', institute: 'Red Cross', date: 'December 2022', description: 'Certified in providing immediate care for injuries and medical emergencies, including CPR and AED usage.', imageUrl: 'https://picsum.photos/seed/cert5/400/300' },
];

export const testimonials: Testimonial[] = [
  {
    quote: "Shah Jahan's dedication to community health is truly inspiring. His ability to connect with people and motivate them towards positive change is remarkable. He was a key player in our recent health awareness campaign.",
    name: 'Dr. Ayesha Khan',
    title: 'Senior Public Health Official',
  },
  {
    quote: "Working with Shah Jahan on the 'Vision for Tomorrow' project has been a privilege. His passion for digital education and his innovative approach have empowered countless students in our community.",
    name: 'Fatima Ahmed',
    title: 'Co-founder, Vision for Tomorrow',
  },
  {
    quote: "As a community leader, I've seen Shah Jahan's tireless efforts firsthand. He doesn't just manage projects; he builds relationships and fosters a true sense of collective responsibility. He is a great asset to any team.",
    name: 'Ali Raza',
    title: 'Community Elder, Bandat Village',
  },
];

export const workshops: Workshop[] = [
    {
        id: 1,
        title: 'Health Awareness Camp 2023',
        date: 'June 15-17, 2023',
        location: 'Bandat Village, Balochistan',
        description: 'Organized a comprehensive 3-day health awareness camp focusing on preventive healthcare, nutrition education, and basic medical checkups. We reached over 200 community members, providing free health screenings and distributing educational materials in the local language.',
        impact: '200+ people served, 150 health screenings conducted',
        images: [
            'https://picsum.photos/seed/workshop1a/400/300',
            'https://picsum.photos/seed/workshop1b/400/300',
            'https://picsum.photos/seed/workshop1c/400/300',
            'https://picsum.photos/seed/workshop1d/400/300',
        ]
    },
    {
        id: 2,
        title: 'Digital Literacy Workshop for Youth 2024',
        date: 'March 20-22, 2024',
        location: 'Awaran Education Center, Balochistan',
        description: 'Conducted an intensive digital literacy program for young people aged 16-25, covering basic computer skills, internet safety, online learning platforms, and digital career opportunities. The workshop included hands-on training and mentorship sessions.',
        impact: '45 youth trained, 30+ received follow-up mentoring',
        images: [
            'https://picsum.photos/seed/workshop2a/400/300',
            'https://picsum.photos/seed/workshop2b/400/300',
            'https://picsum.photos/seed/workshop2c/400/300',
            'https://picsum.photos/seed/workshop2d/400/300',
        ]
    },
    {
        id: 3,
        title: 'Community First Aid Training Program',
        date: 'September 10, 2024',
        location: 'Multiple Villages, Awaran District',
        description: 'Delivered comprehensive first aid training to community volunteers and local health workers. Covered emergency response, CPR, wound care, and emergency preparedness. Participants received certification and first aid kits.',
        impact: '60 volunteers certified, 12 villages covered',
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
    excerpt: 'The journey from a simple idea to a registered foundation has been incredible. Here’s a look at our mission and what’s next for BBF.',
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
      <p>The potential is immense. Technology allows us to bypass traditional barriers of distance and literacy, delivering vital health information directly into the hands of those who need it most. It’s about more than just apps and websites; it’s about creating a digitally connected ecosystem of care that empowers individuals to make informed decisions about their health.</p>
    `,
  },
];

export const socialLinks: SocialLink[] = [
  { name: 'LinkedIn', url: 'https://www.linkedin.com/', icon: LinkedInIcon },
  { name: 'Twitter/X', url: 'https://twitter.com/', icon: TwitterIcon },
  { name: 'Instagram', url: 'https://www.instagram.com/', icon: InstagramIcon },
  { name: 'Facebook', url: 'https://www.facebook.com/', icon: FacebookIcon },
];
