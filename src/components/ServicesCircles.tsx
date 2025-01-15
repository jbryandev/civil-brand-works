"use client";

import { useState } from "react";

import { PatternBackground } from "./PatternBackground";

const SERVICES = [
  {
    title: "Digital Strategy",
    subtitle:
      "Crafting tailored strategies to drive your business forward in the industry",
    description:
      "We specialize in creating customized digital strategies that propel your business ahead in the competitive online environment. Our approach ensures that your digital presence is not only strong but also sustainable.",
  },
  {
    title: "Custom Websites",
    subtitle: "Visually Engaging, Market-Specific Websites",
    description:
      "Our custom web design and development services focus on delivering engaging websites targeted to your audience and market. We ensure that your online presence is not only aesthetically pleasing but also functionally robust and effective.",
  },
  {
    title: "Business Applications",
    subtitle: "Customized applications to streamline your business operations",
    description:
      "We develop custom applications that streamline your business operations and enhance your productivity. Our applications are designed to meet your unique requirements and help you achieve your business goals.",
  },
  {
    title: "SEO",
    subtitle: "Search engine optimization to boost your online visibility",
    description:
      "Our SEO services are designed to improve your online visibility and drive organic traffic to your website. We use proven strategies to optimize your website for search engines and help you reach your target audience.",
  },
];

const Circle = ({
  title,
  onHover,
}: {
  title: string;
  onHover: (description: string) => void;
}) => (
  <button
    className="group relative h-24 w-24 cursor-pointer overflow-hidden rounded-full border-2 border-slate-900 hover:bg-slate-900 md:h-32 md:w-32 lg:h-48 lg:w-48 xl:h-64 xl:w-64"
    onMouseEnter={() => onHover(title)}
    onMouseLeave={() => onHover("")}
  >
    <PatternBackground />
    <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-slate-50 text-center text-sm group-hover:bg-slate-900 group-hover:text-slate-50 md:text-base lg:text-xl xl:text-3xl">
      {title}
    </span>
  </button>
);

export default function ServicesCircles() {
  const [hoveredService, setHoveredService] = useState<{
    subtitle: string;
    description: string;
  } | null>(null);

  const handleHover = (title: string) => {
    const service = SERVICES.find((service) => service.title === title);
    setHoveredService(
      service
        ? { subtitle: service.subtitle, description: service.description }
        : null
    );
  };

  return (
    <div className="container flex flex-col items-center py-16">
      <div className="flex w-full flex-wrap justify-evenly gap-2">
        {SERVICES.map((service) => (
          <Circle
            key={service.title}
            title={service.title}
            onHover={handleHover}
          />
        ))}
      </div>
      <div className="z-10 mt-10 flex h-[170px] w-full justify-center px-4 text-slate-900 sm:h-[100px] sm:px-16 lg:w-[800px]">
        <div className="flex flex-col text-sm md:text-base">
          <h3 className="bg-slate-50 font-semibold">
            {hoveredService?.subtitle ? hoveredService?.subtitle : ""}
          </h3>
          <p className="bg-slate-50">{hoveredService?.description}</p>
        </div>
      </div>
    </div>
  );
}
