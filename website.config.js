export const personalInfo = {
  name: 'Junde Liu',
  profilePicture: '/profile.png', //optional
  role: 'PostDoc',
  university: 'University of Göttingen',
  universityWebsite: 'https://www.uni-goettingen.de/en/580823.html',
  socialMedia: [
    { name: 'Email', url: 'mailto:liujunde@iphy.ac.cn' },
    { name: 'ORCID', url: 'https://orcid.org/my-orcid?orcid=0000-0003-4872-7738' },
    { name: 'Google Scholar', url: 'https://scholar.google.com/citations?user=aX4Ju4cAAAAJ&hl=zh-CN' },
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
