export interface Blog {
  title: string;
  desc: string;
  img: string;
  lightBg?: boolean;
  textColor: string;
  bgColor: string;
}

export const blogs: Blog[] = [
  {
    title: "Shared Security Abstraction",
    desc: "In the rapidly evolving landscape of blockchains, restaking or shared security has emerged as a pivotal concept.",
    img: "/sharedSecurity.svg",
    textColor: "#095993",
    bgColor: "#B5E0FF",
  },
  {
    title: "Catalysis: Enabling a Future with Thousands of AVSs",
    desc: "In the rapidly evolving world of decentralization, shared security (or restaking) has emerged as a powerful mechanism to bootstrap",
    img: "/blog.svg",
    textColor: "#8C1AA9",
    bgColor: "#F9E1FF",
  },
  {
    title: "Symbiotic x Catalysis: Expanding the Boundaries of...",
    desc: "Symbiotic is a permissionless shared security protocol that empowers decentralized networks to bootstrap economic security efficiently.",
    img: "/symbiotic.svg",
    lightBg: true,
    textColor: "#323131",
    bgColor: "#FFE1B5",
  },
];

export const blogsSectionContent = {
  heading: "Blogs",
  description:
    "Stay updated with the latest from the Catalysis ecosystem - deep dives, dev updates, partner spotlights, and everything shaping the future of shared security.",
  buttonText: "View All",
};
