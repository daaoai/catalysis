export interface FAQ {
  question: string;
  answer: string;
}

export const userContent: string[] = ["User 1", "User 2", "User 3"];

export const faqContent: FAQ[] = [
  {
    question: "How easy is it to build a Network using Catalysis?",
    answer:
      "Building a Network using Catalysis is fast and seamless. With Catalyst-SDK, you can have your Network up and running in just a few days, saving 80% of time and resources compared to building from scratch.",
  },
  {
    question: "How does Catalysis make Networks more resilient?",
    answer: "",
  },
  {
    question:
      "How does Catalysis compare to other shared security protocols (SSPs)?",
    answer: "",
  },
  {
    question: "Isn't ZK verifiability enough for my Network?",
    answer: "",
  },
];

export const faqPageContent = {
  heading: "FAQs",
  description:
    "Got questions about Catalysis, restaking, or how to get started? We’ve got answers - straight and simple.",
};
