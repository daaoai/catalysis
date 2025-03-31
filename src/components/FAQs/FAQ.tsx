"use client";
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { userContent, faqContent, faqPageContent } from "../../content/FAQ";

const FAQContentection: React.FC = () => {
  const [selectedUser, setSelectedUser] = useState(0);
  const [openQuestion, setOpenQuestion] = useState<number | null>(0);

  return (
    <div className="px-8 grid grid-cols-1 md:grid-cols-2 gap-8">
      <div>
        <h1 className="text-4xl font-semibold mb-6">
          {faqPageContent.heading}
        </h1>
        <p className="dark:text-gray-300 text-black-10 max-w-md">
          {faqPageContent.description}
        </p>
      </div>

      <div>
        <div className="flex dark:bg-faqToggleDarkBg bg-faqToggleLightBg rounded-full p-1 w-fit mb-20">
          {userContent.map((user: string, idx: number) => (
            <button
              key={idx}
              onClick={() => setSelectedUser(idx)}
              className={`px-5 py-2 rounded-full transition-all duration-200 text-sm font-medium ${
                selectedUser === idx
                  ? "dark:bg-zinc-900 dark:text-white bg-white text-black-10"
                  : "dark:text-faqNonSelectedDark text-black-20"
              }`}
            >
              {user}
            </button>
          ))}
        </div>

        <div className="space-y-16">
          {faqContent.map((faq, index: number) => (
            <div key={index}>
              <button
                className="w-full text-left flex justify-between items-center text-[24px] font-medium dark:text-faqQuestionDark"
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
                <p className="mt-2 dark:text-faqAnswerDark text-black-10 text-sm max-w-lg">
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

export default FAQContentection;
