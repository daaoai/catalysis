"use client";
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { userContent, faqContent, faqPageContent } from "../../content/FAQ";

const FAQContentection: React.FC = () => {
  const [selectedUser, setSelectedUser] = useState(0);
  const [openQuestion, setOpenQuestion] = useState<number | null>(0);

  return (
    <div className="px-8 grid grid-cols-1 md:grid-cols-2 gap-8 bg-white">
      <div>
        <h1 className="text-[40px] font-medium mb-6 font-sans">
          {faqPageContent.heading}
        </h1>
        <p className="dark:text-gray-300 text-[#323131] font-medium max-w-md font-walsheim">
          {faqPageContent.description}
        </p>
      </div>

      <div>
        <div className="flex dark:bg-faqToggleDarkBg bg-faqToggleLightBg rounded-full p-1 w-fit mb-12 md:mb-20">
          {userContent.map((user: string, idx: number) => (
            <button
              key={idx}
              onClick={() => setSelectedUser(idx)}
              className={`px-5 py-2 rounded-full font-generalsans transition-all duration-200 text-sm  font-normal ${
                selectedUser === idx
                  ? "dark:bg-zinc-900 dark:text-white bg-white text-[#3A3A3A]"
                  : "dark:text-faqNonSelectedDark text-black-20"
              }`}
            >
              {user}
            </button>
          ))}
        </div>

        <div className="flex flex-col gap-10">
          {faqContent.map((faq, index: number) => (
            <div key={index}>
              <button
                className="w-full text-left flex justify-between items-start  dark:text-faqQuestionDark gap-4"
                onClick={() =>
                  setOpenQuestion(openQuestion === index ? null : index)
                }
              >
                <p className="font-generalsans text-[#323131] text-[20px] font-normal">
                  {faq.question}
                </p>
                <div>
                  <ChevronDown
                    className={`h-6 w-8 transform transition-transform text-[16px] duration-300 ${
                      openQuestion === index ? "rotate-180" : ""
                    }`}
                  />
                </div>
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openQuestion === index ? "max-h-[500px]" : "max-h-0"
                }`}
              >
                {openQuestion === index && faq.answer && (
                  <p className="mt-2 dark:text-faqAnswerDark text-[#323131] max-w-lg font-generalsans text-base">
                    {faq.answer}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQContentection;
