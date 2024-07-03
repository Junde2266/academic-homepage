export const personalInfo = {
  name: 'Junde Liu',
  profilePicture: '/profile.jpg', //optional
  role: 'Graduate',
  university: 'Institute of Physics, CAS',
  universityWebsite: 'https://ex7.iphy.ac.cn',
  socialMedia: [
    { name: 'Email', url: 'https://linkedin.com' },
    { name: 'Twitter', url: 'https://twitter.com/anxndsgn' },
    {
      name: 'GitHub',
      url: 'https://github.com/anxndsgn/academic-homepage-template',
    },
    { name: 'LinkedIn', url: 'https://linkedin.com' },
    { name: 'ORCID', url: 'https://orcid' },
    { name: 'Google Scholar', url: 'https://scholar.google.com' },
  ],
};

export const websiteInfo = {
  title: personalInfo.name,
  description: 'HCI researcher',
  // teaserImage: "/teaser.jpg",
};

export const navigations = [
  { name: 'Projects', route: '/projects' },
  { name: 'Publications', route: '/publications' },
  // { name: "News", route: "/news" },
  // { name: 'About', route: '/about' },
  { name: 'CV', route: '/cv.pdf' },
];

export const homepageSection = {
  AboutSection: true,
  NewsSection: true,
  // SelectedPublicationsSection: true,
  // ProjectSection: true,
};

export const fontStyle = 'sans'; // "sans" | "serif" | "mono"
