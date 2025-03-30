"use client";
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { users, faqs, faqSectionContent } from "../../content/FAQ";

const FAQSection: React.FC = () => {
  const [selectedUser, setSelectedUser] = useState(0);
  const [openQuestion, setOpenQuestion] = useState<number | null>(0);

  return (
    <div className=" px-8 grid grid-cols-1 md:grid-cols-2 gap-8">
      <div>
        <h1 className="text-4xl font-semibold mb-6">
          {faqSectionContent.heading}
        </h1>
        <p className="dark:text-gray-300 text-black-10 max-w-md">
          {faqSectionContent.description}
        </p>
      </div>

      <div>
        <div className="flex dark:bg-[#2E2E2D] bg-[rgba(181,224,255,0.30)] rounded-full p-1 w-fit mb-20">
          {users.map((user: string, idx: number) => (
            <button
              key={idx}
              onClick={() => setSelectedUser(idx)}
              className={`px-5 py-2 rounded-full transition-all duration-200 text-sm font-medium ${
                selectedUser === idx
                  ? "dark:bg-zinc-900 dark:text-white bg-white text-black-10"
                  : "dark:text-[#A6A6A6] text-black-20"
              }`}
            >
              {user}
            </button>
          ))}
        </div>

        <div className="space-y-16">
          {faqs.map((faq, index: number) => (
            <div key={index}>
              <button
                className="w-full text-left flex justify-between items-center text-[24px] font-medium dark:text-[#FDFDFD]"
                onClick={() =>
                  setOpenQuestion(openQuestion === index ? null : index)
                }
              >
                {faq.question}
                <ChevronDown
                  className={`h-6 w-6 transform transition-transform text-[16px] duration-300 ${
                    openQuestion === index ? "rotate-180" : ""
                  }`}
                />
              </button>
              {openQuestion === index && faq.answer && (
                <p className="mt-2 dark:text-[#A6A6A6] text-black-10 text-sm max-w-lg">
                  {faq.answer}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQSection;
