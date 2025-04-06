import Image from "next/image";
import images from "@/constants/images";
import RandomQoute from "./RandomQoute";
import { Icon } from "@iconify/react";

export const Splash = () => {
  const quotes = [
    "Unleash your creativity, one frame at a time.",
    "Your story, your vibe, your way.",
    "Lights, camera, VidVibe!",
    "Bringing your ideas to life, effortlessly.",
    "Creating magic in motion.",
    "VidVibe—where videos meet imagination.",
    "Edit. Share. Inspire.",
    "The perfect vibe starts here.",
    "Turning moments into masterpieces.",
    "Capture. Create. Connect.",
  ];
  return (
    <div
      className={
        "w-screen h-screen flex items-center justify-center bg-primary flex-col gap-10"
      }
    >
      <div className="flex items-center justify-center gap-3">
        <Image src={images.icon} alt={"Splash"} width={100} height={100} />
        <h2 className="text-special text-5xl text-white">VidVibe</h2>
      </div>
      <RandomQoute
        arrayOfLines={quotes}
        addClasses="text-white font-medium w-full p-2 max-w-56"
      >
        <Icon
          icon="svg-spinners:ring-resize"
          width="24"
          height="24"
          className="mr-2"
        />
      </RandomQoute>
    </div>
  );
};
