import { JobPostTypes, LatestType } from "./types";

export const WhyObjects = [
  {
    id: 0,
    logo: "/asset/why.svg",
    bgImg: "/asset/why-1.jpeg",
    path: "/",
  },
  {
    id: 1,
    logo: "/asset/why-1.svg",
    bgImg: "/asset/why-2.jpeg",
    path: "/",
  },
  {
    id: 2,
    logo: "/asset/why-2.svg",
    bgImg: "/asset/why-3.jpeg",
    path: "/",
  },
  {
    id: 3,
    logo: "/asset/why-3.svg",
    bgImg: "/asset/why-4.jpeg",
    path: "/",
  },
  {
    id: 4,
    logo: "/asset/why-4.svg",
    bgImg: "/asset/why-5.jpeg",
    path: "/",
  },
  {
    id: 5,
    logo: "/asset/why-5.svg",
    bgImg: "/asset/why-6.jpeg",
    path: "/",
  },
];

export const testimonials = [
  {
    heading: "I have been working with Toptal...",
    testimony:
      "I have been working with Toptal engineers for several years now. They have all been exceptionally talented, very professional, highly productive, great team players, good communicators, and willing to go above and beyond...",
    author: "Ian Stokes-Rees",
    title: "Partner",
    company: "/asset/svg/comp3.svg",
    rating: 5,
  },
  {
    heading: "Toptal is my go-to source",
    testimony:
      "Toptal is my go-to source to find high-quality talent I can’t find elsewhere. I’ve been very impressed with the breadth and depth of talent they have been able to deliver.",
    author: "Tess Caputo",
    title: "Chief Operations Officer",
    company: "/asset/svg/comp6.svg",
    rating: 5,
  },
  {
    heading: "Creating an app for game",
    testimony:
      "With the pressure on and millions watching the Cleveland Cavaliers during the NBA Playoffs, Toptal delivered the talent and expertise needed to launch a brand-new fan engagement platform.",
    author: "Conor Kenney",
    title: "VP, Product and Technology",
    company: "/asset/svg/comp4.svg",
    rating: 5,
  },
];

export const Latest: LatestType[][] = [
  [
    {
      id: 0,
      title:
        "Exploring the Post-crash Cryptocurrency Market: Blockchain, Regulations, and Beyond",
      author: "Jeffrey Mazer",
      description:
        "The 2022 crash shook the cryptocurrency market to its core, but investors are still buying digital coins. How does crypto work, and what does the future hold for it?",
      category: "FINANCE",
      subcategory: "FINANCE PROCESSES",
      time: "17 MINUTE READ",
      image: "/asset/latest1.jpeg",
      bgImage: "/asset/latest1.png",
    },
  ],
  [
    {
      id: 1,
      title:
        "Architecting Effective Data Labeling Systems for Machine Learning Pipelines",
      author: "Reza Fazeli",
      category: "ENGINEERING",
      subcategory: "DATA SCIENCE AND DEVELOPMENT",
      image: "/asset/latest2.jpeg",
      bgImage: "/asset/latest2.png",
    },
    {
      id: 2,
      title: "IT Integration in Mergers and Acquisitions: Structuring Synergy",
      author: "John S. Doss",
      category: "FINANCE",
      subcategory: "REVENUE AND GROWTH",
      image: "/asset/latest3.jpeg",
      bgImage: "/asset/latest3.png",
    },
    {
      id: 3,
      title:
        "Boost Ad Performance on Facebook and Instagram With Advanced Audience Targeting",
      author: "Jake Madoff",
      category: "MARKETING",
      subcategory: "SOCIAL MEDIA",
      image: "/asset/latest4.jpeg",
      bgImage: "/asset/latest4.png",
    },
    {
      id: 4,
      title: "Effective Facebook Ads: 5 Creative Tips to Drive Growth",
      author: "Jake Madoff",
      category: "MARKETING",
      subcategory: "SOCIAL MEDIA",
      image: "/asset/latest4.jpeg",
      bgImage: "/asset/latest5.png",
    },
  ],
];

export const TalentsObject = [
  {
    id: 0,
    talent: "talent_developers", // Translation key
    description: "description_developers", // Translation key
    icon_dark: "/asset/icons/tools-icon1.svg",
    icon_white: "/asset/icons/tools-icon1-white.svg",
    path: "/",
  },
  {
    id: 1,
    talent: "talent_marketing_experts", // Translation key
    description: "description_marketing_experts", // Translation key
    icon_dark: "/asset/icons/tools-icon2.svg",
    icon_white: "/asset/icons/tools-icon2-white.svg",
    path: "/",
  },
  {
    id: 2,
    talent: "talent_designers", // Translation key
    description: "description_designers", // Translation key
    icon_dark: "/asset/icons/tools-icon1.svg",
    icon_white: "/asset/icons/tools-icon1-white.svg",
    path: "/",
  },
  {
    id: 3,
    talent: "talent_engineers", // Translation key
    description: "description_engineers", // Translation key
    icon_dark: "/asset/icons/tools-icon2.svg",
    icon_white: "/asset/icons/tools-icon2-white.svg",
    path: "/",
  },
  {
    id: 4,
    talent: "talent_product_managers", // Translation key
    description: "description_product_managers", // Translation key
    icon_dark: "/asset/icons/tools-icon1.svg",
    icon_white: "/asset/icons/tools-icon1-white.svg",
    path: "/",
  },
  {
    id: 5,
    talent: "talent_content_creators", // Translation key
    description: "description_content_creators", // Translation key
    icon_dark: "/asset/icons/tools-icon2.svg",
    icon_white: "/asset/icons/tools-icon2-white.svg",
    path: "/",
  },
];

export const jobBoardLocations = [
  { id: 1, name: "Zurich, Switzerland" },
  { id: 2, name: "Vienna, Austria" },
  { id: 3, name: "Luxembourg City, Luxembourg" },
  { id: 4, name: "Brussels, Belgium" },
  { id: 5, name: "Amsterdam, Netherlands" },
  { id: 6, name: "Copenhagen, Denmark" },
  { id: 7, name: "Prague, Czech Republic" },
  { id: 8, name: "Warsaw, Poland" },
  { id: 9, name: "Paris, France" },
  { id: 10, name: "Strasbourg, France" },
];

// Logos array for company icons
export const jobBoardHerologos = [
  { src: "/asset/job/comp1.svg", width: 100 },
  { src: "/asset/job/comp2.svg", width: 100 },
  { src: "/asset/job/comp7.svg", width: 70 },
  { src: "/asset/job/comp4.svg", width: 100 },
];

export const jobCard: JobPostTypes[] = [
  {
    id: "000001-compliance-manager-consumer-protection",
    position: "Compliance Manager, Consumer Protection",
    company: "Coinbase",
    location: "Ireland; Remote",
    posted: "Today",
    more: {
      location: "Remote",
      category: "Blockchain",
      level: "Senior",
      type: "Full Time",
    },
    categories: [
      "Blockchain and Crypto",
      "Finance",
      "Lending and Investments",
      "Software",
    ],
    employees: "51 - 200 employees",
    companyLogo: "/path-to-coinbase-logo.png",
    action: {
      label: "Read more",
      link: "#",
    },
  },
  {
    id: "000002-frontend-developer",
    position: "Frontend Developer",
    company: "Google",
    location: "California, USA; Remote",
    posted: "1 day ago",
    more: {
      location: "Remote",
      category: "Software Development",
      level: "Mid-level",
      type: "Full Time",
    },
    categories: ["Software", "Frontend Development", "JavaScript", "React"],
    employees: "10,000+ employees",
    companyLogo: "/path-to-google-logo.png",
    action: {
      label: "Read more",
      link: "#",
    },
  },
  {
    id: "000003-data-scientist",
    position: "Data Scientist",
    company: "Microsoft",
    location: "Seattle, USA",
    posted: "2 days ago",
    more: {
      location: "On-site",
      category: "Data Science",
      level: "Senior",
      type: "Full Time",
    },
    categories: ["AI", "Data Science", "Machine Learning"],
    employees: "10,000+ employees",
    companyLogo: "/path-to-microsoft-logo.png",
    action: {
      label: "Read more",
      link: "#",
    },
  },
  {
    id: "000004-devops-engineer",
    position: "DevOps Engineer",
    company: "Amazon",
    location: "London, UK",
    posted: "3 days ago",
    more: {
      location: "On-site",
      category: "Cloud and DevOps",
      level: "Mid-level",
      type: "Full Time",
    },
    categories: ["Cloud", "DevOps", "AWS", "Automation"],
    employees: "10,000+ employees",
    companyLogo: "/path-to-amazon-logo.png",
    action: {
      label: "Read more",
      link: "#",
    },
  },
  {
    id: "000005-backend-developer",
    position: "Backend Developer",
    company: "Netflix",
    location: "Los Angeles, USA",
    posted: "Today",
    more: {
      location: "On-site",
      category: "Backend Development",
      level: "Mid-level",
      type: "Full Time",
    },
    categories: ["Software", "Backend Development", "Node.js", "Microservices"],
    employees: "5,000 - 10,000 employees",
    companyLogo: "/path-to-netflix-logo.png",
    action: {
      label: "Read more",
      link: "#",
    },
  },
  {
    id: "000006-product-manager",
    position: "Product Manager",
    company: "Spotify",
    location: "Stockholm, Sweden",
    posted: "4 days ago",
    more: {
      location: "On-site",
      category: "Product Management",
      level: "Senior",
      type: "Full Time",
    },
    categories: ["Product Management", "Agile", "Tech"],
    employees: "1,000 - 5,000 employees",
    companyLogo: "/path-to-spotify-logo.png",
    action: {
      label: "Read more",
      link: "#",
    },
  },
  {
    id: "000007-ux-designer",
    position: "UX Designer",
    company: "Adobe",
    location: "San Francisco, USA",
    posted: "5 days ago",
    more: {
      location: "On-site",
      category: "Design",
      level: "Mid-level",
      type: "Full Time",
    },
    categories: ["Design", "UX", "UI", "Software"],
    employees: "10,000+ employees",
    companyLogo: "/path-to-adobe-logo.png",
    action: {
      label: "Read more",
      link: "#",
    },
  },
  {
    id: "000008-blockchain-engineer",
    position: "Blockchain Engineer",
    company: "Ripple",
    location: "Singapore",
    posted: "6 days ago",
    more: {
      location: "On-site",
      category: "Blockchain",
      level: "Mid-level",
      type: "Full Time",
    },
    categories: ["Blockchain", "Crypto", "Software", "Finance"],
    employees: "201 - 500 employees",
    companyLogo: "/path-to-ripple-logo.png",
    action: {
      label: "Read more",
      link: "#",
    },
  },
  {
    id: "000009-fullstack-developer",
    position: "Fullstack Developer",
    company: "Meta",
    location: "Remote",
    posted: "1 week ago",
    more: {
      location: "Remote",
      category: "Fullstack Development",
      level: "Mid-level",
      type: "Full Time",
    },
    categories: ["Fullstack", "Software", "React", "Node.js"],
    employees: "10,000+ employees",
    companyLogo: "/path-to-meta-logo.png",
    action: {
      label: "Read more",
      link: "#",
    },
  },
  {
    id: "000010-cybersecurity-analyst",
    position: "Cybersecurity Analyst",
    company: "IBM",
    location: "New York, USA",
    posted: "2 weeks ago",
    more: {
      location: "On-site",
      category: "Cybersecurity",
      level: "Mid-level",
      type: "Full Time",
    },
    categories: ["Security", "Cybersecurity", "Software"],
    employees: "10,000+ employees",
    companyLogo: "/path-to-ibm-logo.png",
    action: {
      label: "Read more",
      link: "#",
    },
  },
  {
    id: "000011-ai-research-scientist",
    position: "AI Research Scientist",
    company: "OpenAI",
    location: "San Francisco, USA; Remote",
    posted: "2 weeks ago",
    more: {
      location: "Remote",
      category: "AI Research",
      level: "Senior",
      type: "Full Time",
    },
    categories: ["AI", "Research", "Machine Learning", "Deep Learning"],
    employees: "51 - 200 employees",
    companyLogo: "/path-to-openai-logo.png",
    action: {
      label: "Read more",
      link: "#",
    },
  },
];
