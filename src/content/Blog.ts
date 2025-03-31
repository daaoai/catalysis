export interface Blog {
  title: string;
  desc: string;
  img: string;
  lightBg?: boolean;
}

export const blogs: Blog[] = [
  {
    title: "Shared Security Abstraction",
    desc: "In the rapidly evolving landscape of blockchains, restaking or shared security has emerged as a pivotal concept.",
    img: "/blog.png",
  },
  {
    title: "Catalysis: Enabling a Future with Thousands of AVSs",
    desc: "In the rapidly evolving world of decentralization, shared security (or restaking) has emerged as a powerful mechanism to bootstrap",
    img: "/blog.png",
  },
  {
    title: "Symbiotic x Catalysis: Expanding the Boundaries of...",
    desc: "Symbiotic is a permissionless shared security protocol that empowers decentralized networks to bootstrap economic security efficiently.",
    img: "/blog.png",
    lightBg: true,
  },
];

export const blogsSectionContent = {
  heading: "Blogs",
  description:
    "Lorem ultriceipsum dolor sit amet consectetur. Mauris cursus sit nulla faucibus urna. Molestie elit magna rhoncus posuere amet etiam duis pharetra. Nascetur porttitor tellusultrices lacinia nunc vestibulum ultricies ante elementum quam.",
  buttonText: "View All",
};
