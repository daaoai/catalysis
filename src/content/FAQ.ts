export interface FAQ {
  question: string;
  answer: string;
}

export const userContent: string[] = ["User 1", "User 2", "User 3"];

export const faqContent: FAQ[][] = [
  // FAQs for User 1
  [
    {
      question: "How easy is it to build a Network using Catalysis?",
      answer:
        "Building a Network using Catalysis is fast and seamless. With Catalyst-SDK, you can have your Network up and running in just a few days, saving 80% of time and resources compared to building from scratch.",
    },
    {
      question: "How does Catalysis make Networks more resilient?",
      answer:
        "Catalysis ensures resilience by distributing your Network’s security across multiple shared security protocols (SSPs). This minimizes the impact of any single protocol failure. Example: If your Network is secured by EigenLayer, Symbiotic, Kernel, and SatLayer, and Kernel faces a security breach or a major liquidity migration, your Network remains secure because it still has economic backing from EigenLayer, Symbiotic and SatLayer.",
    },
    {
      question:
        "How does Catalysis compare to other shared security protocols (SSPs)?",
      answer:
        "Catalysis is NOT a shared security protocol - it is a Security Abstraction Layer that connects major SSPs like EigenLayer, Symbiotic and SatlayerWith Catalysis, Networks can seamlessly integrate with multiple SSPs instead of being tied to just one. This results in:Greater flexibility → Choose where to source security dynamically.Higher resilience → Avoid dependency on a single SSP.Optimized security costs → Compete for the best economic security pricing.",
    },
    {
      question: "Isn't ZK verifiability enough for my Network?",
      answer:
        "No, ZK verification is not enough as it cannot solve for all kinds of faults. ZK is a valid security model only under the assumption of objective faults that are proactively attributable.",
    },
  ],
  // FAQs for User 2
  [
    {
      question:
        "What are the prerequisites for a Node Operator to join the Catalysis Network?",
      answer:
        "There are no prerequisites. If you’re already running a node for a network/AVS on any restaking protocol (EigenLayer, Jito, SatLayer, etc.), you’re automatically part of the Catalysis Network.",
    },
    {
      question:
        "What are the main responsibilities of a Node Operator in the Catalysis Abstraction layer?",
      answer:
        "You need to run a couple of commands to register your node with the Catalysis Network. And then you just run your node as you normally would. Except, now you'll be running the Catalysis-Powered AVS node software.\nRegister your node with the Catalysis Network using a few simple commands, and then continue operating it as usual. Catalysis seamlessly integrates AVS security, so you only need to run the AVS node software once, regardless of how many restaking protocols the AVS spans. No additional infrastructure overhead.",
    },
    {
      question:
        "Say an AVS exists on Eigenlayer (Ethereum) + Satlayer (Babylon). As a Node Operator, do we need to partner with Eigenlayer and Satlayer to be able to participate?",
      answer:
        "No, you don’t need to partner with any restaking protocol directly. However, you do need to partner with LRTs/Vault curators to get delegations on Eigenlayer and Satlayer. Catalysis abstracts these integrations, allowing you to run AVSs across multiple restaking protocols without individual agreements.",
    },
    {
      question:
        "Does a Node Operator participate at two levels - both the shared security protocol (SSP) layer and the abstraction layer?",
      answer:
        "No, you only participate at one level: the Catalysis Abstraction Layer. You run one node per AVS. And Catalysis seamlessly manages security delegation across multiple SSPs.",
    },
    {
      question:
        "If a Node Operator wants to run an AVS on a new Shared Security Protocol (SSP), do they need stake in that SSP?",
      answer:
        "Yes, node operators must have economic security delegation on the SSP to participate. For example, if you want to run an AVS on Symbiotic, you need delegated security from Symbiotic vaults.",
    },
    {
      question: "How are Rewards distributed to Node Operators?",
      answer:
        "Rewards are distributed directly by the SSPs. If you’re running a Catalysis-Powered AVS (say $100M) secured by EigenLayer ($50M) + Symbiotic ($50M), you’ll receive separate payouts from both EigenLayer and Symbiotic based on your stake and participation.",
    },
    {
      question:
        "Do we need to partner with LRTs to run networks on a Shared Security Protocol (SSP)?",
      answer:
        "No, you don’t need to partner with LRTs directly. Catalysis partners with top LRTs and vault curators across SSPs, allowing you to seamlessly run Networks without separate LRT agreements.\nHowever, if you already have LRT partnerships, it can streamline delegation and integration, making the process even smoother.",
    },
  ],
  [
    {
      question: "How easy is it to build a Network using Catalysis?",
      answer:
        "Building a Network using Catalysis is fast and seamless. With Catalyst-SDK, you can have your Network up and running in just a few days, saving 80% of time and resources compared to building from scratch.",
    },
    {
      question: "How does Catalysis make Networks more resilient?",
      answer:
        "Catalysis ensures resilience by distributing your Network’s security across multiple shared security protocols (SSPs). This minimizes the impact of any single protocol failure. Example: If your Network is secured by EigenLayer, Symbiotic, Kernel, and SatLayer, and Kernel faces a security breach or a major liquidity migration, your Network remains secure because it still has economic backing from EigenLayer, Symbiotic and SatLayer.",
    },
    {
      question:
        "How does Catalysis compare to other shared security protocols (SSPs)?",
      answer:
        "Catalysis is NOT a shared security protocol - it is a Security Abstraction Layer that connects major SSPs like EigenLayer, Symbiotic and SatlayerWith Catalysis, Networks can seamlessly integrate with multiple SSPs instead of being tied to just one. This results in:Greater flexibility → Choose where to source security dynamically.Higher resilience → Avoid dependency on a single SSP.Optimized security costs → Compete for the best economic security pricing.",
    },
    {
      question: "Isn't ZK verifiability enough for my Network?",
      answer:
        "No, ZK verification is not enough as it cannot solve for all kinds of faults. ZK is a valid security model only under the assumption of objective faults that are proactively attributable.",
    },
  ],
];

export const faqPageContent = {
  heading: "FAQs",
  description:
    "Got questions about Catalysis, restaking, or how to get started? We’ve got answers - straight and simple.",
};
