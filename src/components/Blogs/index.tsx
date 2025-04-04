import React from "react";
import Image from "next/image";
import { blogs, blogsSectionContent } from "../../content/Blog";

const BlogsSection: React.FC = () => {
  return (
    <section className="px-8">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h2 className="text-4xl font-semibold mb-4 font-walsheim">
            {blogsSectionContent.heading}
          </h2>
          <p className="max-w-xl dark:text-gray-300 font-walsheim">
            {blogsSectionContent.description}
          </p>
        </div>
        <button className="dark:text-black hidden md:flex text-white dark:bg-white bg-black font-semibold px-5 py-2 rounded-full shadow">
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
              <h3
                className="text-[28px] mb-2 line-clamp-2 font-walsheim"
                style={{ color: blog.textColor }}
              >
                {blog.title}
              </h3>
              <p className="text-[16px] line-clamp-3 font-walsheim">
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
