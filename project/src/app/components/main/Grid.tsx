import { cn } from "@/utils/cn";
import React from "react";
import { BentoGrid, BentoGridItem } from "../ui/bento-grid";
import {
  IconClipboardCopy,
  IconFileBroken,
  IconPencil,
  IconSignature,
  IconTableColumn,
} from "@tabler/icons-react";

export function BentoGridSecondDemo() {
  return (
    <BentoGrid className="max-w-7xl m-5 mx-auto md:auto-rows-[20rem]">
      {items.map((item, i) => (
        <BentoGridItem
          key={i}
          title={item.title}
          description={item.description}
          header={item.header}
          className={item.className}
          icon={item.icon}
        />
      ))}
    </BentoGrid>
  );
}
const Skeleton = () => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl   dark:bg-dot-white/[0.2] bg-dot-black/[0.2] [mask-image:radial-gradient(ellipse_at_center,white,transparent)]  border border-transparent dark:border-white/[0.2] bg-neutral-100 dark:bg-black"></div>
);
const items = [
  {
    title: "Write what you like",
    description: "Explore your writing skills and share it to the world.",
    header: <div className="max-h-[190px] overflow-hidden"><img className="mx-auto" src="https://via.placeholder.com/500x200" alt="" /></div>,
    className: "md:col-span-2",
    icon: <IconPencil className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Express Yourself",
    description: "Share your thoughts, ideas, and passions with the world. Your voice matters.",
    header: <div className="max-h-[190px] overflow-hidden"><img className="mx-auto" src="https://via.placeholder.com/200" alt="" /></div>,
    className: "md:col-span-1",
    icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Inspire and Be Inspired",
    description: "Be a source of inspiration. Share your journey and find inspiration in others.",
    header: <div className="max-h-[190px] overflow-hidden"><img className="mx-auto" src="https://via.placeholder.com/200" alt="" /></div>,
    className: "md:col-span-1",
    icon: <IconSignature className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Discover New Perspectives",
    description:
    "Expand your horizons. Explore a wealth of thoughts, opinions, and viewpoints.",
    header: <div className="max-h-[190px] overflow-hidden"><img className="mx-auto" src="https://via.placeholder.com/500x200" alt="" /></div>,
    className: "md:col-span-2",
    icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
  },
];
