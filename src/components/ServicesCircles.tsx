"use client";

import { useState } from "react";

import { PatternBackground } from "./PatternBackground";

const SERVICES = [
  {
    title: "Digital Strategy",
    subtitle:
      "Crafting tailored strategies to drive your business forward in the digital landscape",
    description:
      "We specialize in creating customized digital strategies that propel your business ahead in the competitive online environment. Our approach ensures that your digital presence is not only strong but also sustainable.",
  },
  {
    title: "Design & Development",
    subtitle: "Visually Engaging, Industry-Specific Web Design",
    description:
      "Our design and development services focus on delivering visually captivating and industry-specific websites. We ensure that your online presence is not only aesthetically pleasing but also functionally robust.",
  },
  {
    title: "Content Marketing",
    subtitle: "Engaging Content for the AEC Industry",
    description:
      "We produce compelling content tailored for the Architecture, Engineering, and Construction (AEC) industry. Our content marketing strategies are designed to engage your target audience and drive meaningful interactions.",
  },
  {
    title: "Social Media Management",
    subtitle: "Engaging with your audience on social media",
    description:
      "Our social media management services help you connect with your audience effectively. We manage your social media presence to ensure consistent engagement and growth, fostering a strong community around your brand.",
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
    className="group relative h-64 w-64 cursor-pointer overflow-hidden rounded-full border-2 border-slate-900 hover:bg-slate-900"
    onMouseEnter={() => onHover(title)}
    onMouseLeave={() => onHover("")}
  >
    <PatternBackground />
    <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-slate-50 text-center text-3xl group-hover:bg-slate-900 group-hover:text-slate-50">
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
    <div className="container flex flex-col items-center p-10">
      <div className="flex justify-center space-x-16">
        {SERVICES.map((service) => (
          <Circle
            key={service.title}
            title={service.title}
            onHover={handleHover}
          />
        ))}
      </div>
      <div className="z-10 mt-10 flex h-24 w-[650px] justify-center text-slate-900">
        <div className="flex flex-col">
          <h3 className="bg-slate-50 font-semibold">
            {hoveredService?.subtitle ? hoveredService?.subtitle : ""}
          </h3>
          <p className="bg-slate-50">{hoveredService?.description}</p>
        </div>
      </div>
    </div>
  );
}
