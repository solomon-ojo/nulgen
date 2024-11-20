import { title } from "@/components/primitives";
import { RatingComp } from "@/components/rating";
import { Button } from "@nextui-org/button";
import Image from "next/image";
import { IoArrowForwardSharp } from "react-icons/io5";

interface Types {
  data: any;
}

export const DynamicHeroComp = ({ data }: Types) => {
  return (
    <div className="py-12 h-[85svh] md:h-max flex flex-col items-center justify-end relative">
      <Image
        layout="fill"
        src={data.icon}
        alt="hero-bg-img"
        quality={40}
        objectFit="cover"
        priority
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#171953] via-[#171953]/100 to-transparent md:bg-gradient-to-r md:from-[#171953] md:via-[#171953] md:to-transparent" />

      {/* Content */}
      <div className="z-30 max-w-[1250px] px-5 xl:px-0 w-full flex flex-col justify-center">
        <div className="flex flex-col gap-2">
          <p className="text-white text-[34px] font-medium">{data.title}</p>
          <p className="text-[14px] text-white opacity-95">
            Nanodegree Program
          </p>
          {/* Rating */}
          <div className="flex items-center gap-2">
            <RatingComp starSize="25px" rating={4} color="#BDEA05" />
            <p className="text-white text-[20px] font-bold">(1338)</p>
          </div>
        </div>

        <p className="text-white py-5 text-[18px] md:max-w-[500px]">
          {data.subtitle}
        </p>

        <div className="flex flex-col md:flex-row items-center gap-4">
          <Button className="rounded-[5px] h-[55px] text-[17px] font-medium bg-[#BDEA05] text-black w-full md:w-[220px]">
            Enroll Now <IoArrowForwardSharp color="black" size={22} />
          </Button>
          <Button className="rounded-[5px] h-[55px] text-[17px] bg-transparent border-[3px] border-[#00C5A1] text-[#00C5A1] w-full md:w-[220px]">
            Download Syllabus
          </Button>
        </div>
      </div>
    </div>
  );
};