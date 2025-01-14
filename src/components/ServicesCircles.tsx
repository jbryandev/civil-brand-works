"use client";

import { useState } from "react";

import { PatternBackground } from "./PatternBackground";

const SERVICES = [
  {
    title: "Digital Strategy",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempora, nemo suscipit, exercitationem debitis cupiditate animi reprehenderit provident totam nulla illo omnis corrupti ipsam recusandae aut, ab eligendi ipsa nesciunt asperiores?",
  },
  {
    title: "Design & Development",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora ex natus reprehenderit rem hic fugiat beatae soluta. Ducimus corrupti maiores mollitia enim blanditiis deserunt alias officiis officia quis, asperiores illo odit, quos iure itaque molestias velit nisi explicabo non minus! Minima molestias odio pariatur similique dicta mollitia perferendis! Quam, porro?",
  },
  {
    title: "Content Marketing",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis nobis consequuntur est, error fuga cumque sed dolor dolores enim eum facere temporibus vel tempora sequi perspiciatis quia at animi tempore. Eaque ipsum accusamus voluptate asperiores aliquam molestiae, atque obcaecati, delectus a possimus tenetur ipsa nam? Nesciunt, excepturi quis. Tempora, sunt?",
  },
  {
    title: "Social Media Management",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laborum id quas consectetur dolores animi, sunt cupiditate nostrum inventore. Sed nam repellat vel officiis praesentium fugit sit dolore ipsum quia? Cupiditate, iure nihil! Provident iure, quis amet odio ex commodi nobis autem sequi saepe veritatis dignissimos.",
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
  const [description, setDescription] = useState("");

  const handleHover = (title: string) => {
    const service = SERVICES.find((service) => service.title === title);
    setDescription(service ? service.description : "");
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
      <div className="mt-10 flex h-24 w-[600px] justify-center text-slate-900">
        {description}
      </div>
    </div>
  );
}
