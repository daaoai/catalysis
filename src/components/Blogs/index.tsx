import React from "react";
import Image from "next/image";
import { blogs, blogsSectionContent } from "../../content/Blog";

const BlogsSection: React.FC = () => {
  return (
    <section className="px-8 mx-auto max-w-[90rem]">
      <div className="flex flex-col  md:flex-row justify-between items-start md:items-end mb-14">
        <div>
          <h2 className="text-[40px] tracking-tight font-medium text-[#323131] mb-4 font-sans">
            {blogsSectionContent.heading}
          </h2>
          <p className="max-w-[37rem] dark:text-gray-300 font-generalsans font-normal text-base text-[#383737]">
            {blogsSectionContent.description}
          </p>
        </div>
        <button className="mt-6 md:mt-10 px-6 py-3 text-xs md:text-[20px] font-sans bg-black text-white dark:bg-white dark:text-black rounded-full font-medium transition">
          {blogsSectionContent.buttonText}
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogs.map((blog, idx) => (
          <div
            key={idx}
            className="rounded overflow-hidden flex flex-col h-full"
          >
            <div className="w-full aspect-[3/2] bg-white">
              <Image
                src={blog.img}
                alt={blog.title}
                width={400}
                height={300}
                className="w-full h-full object-cover"
              />
            </div>
            <div
              className="p-4 flex-1"
              style={{ backgroundColor: blog.bgColor }}
            >
              <p
                className="text-[28px] font-normal tracking-tight mb-2 font-walsheim"
                style={{ color: blog.textColor }}
              >
                {blog.title}
              </p>
              <p className="text-[16px] line-clamp-3 font-generalsans  text-[#383737] font-normal">
                {blog.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BlogsSection;
