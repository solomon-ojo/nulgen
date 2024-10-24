import { OnboardSelectionCard } from "@/components/onboard/OnboardSelectionCard";
import { siteConfig } from "@/config/site";
import AuthLayout from "@/layouts/auth";
import { useRouter } from "next/router";
import { BsArrowLeft } from "react-icons/bs";

const Flow2 = () => {
  //
  const router = useRouter();

  return (
    <AuthLayout>
      <div className="max-w-[750px] mt-[35px] flex-1 w-full">
        {/* Details */}
        <div className="w-full flex items-center px-5 bg-[#EDF1FD] h-max py-5 rounded-md border-l-2 border-[#2552D0]">
          <p className="text-[13px] text-[#262d3d] leading-[20px]">
            Find and apply for Internship positions
          </p>
        </div>

        {/* Control */}
        <div className="flex mt-8 flex-col gap-2">
          <div className="flex items-center gap-3">
            <div
              onClick={() => router.back()}
              role="presentation"
              className="h-8 cursor-pointer w-8 border rounded-full flex items-center justify-center border-[#C5C6CA]"
            >
              <BsArrowLeft
                size={15}
                className="text-[#455065] group-hover:text-white"
              />
            </div>
            <p className="text-[#90949D] font-semibold text-[14px] font-ProximaNova">
              STEP 2
            </p>
          </div>
          <h1 className="text-[18px] md:text-[24px] font-ProximaNova font-semibold text-black">
            Which of these best describes you?
          </h1>
        </div>

        {/* Selections */}
        <div className="mt-10 flex flex-col gap-3">
          <OnboardSelectionCard
            path={siteConfig.path.paths.highSchool}
            title="High school student"
            subtitle="Begin your journey with foundational skills and hands-on learning experiences."
          />
          <OnboardSelectionCard
            path={siteConfig.path.paths.undergraduate}
            title="Undergraduate"
            subtitle="Gain practical experience and prepare for a successful professional career."
          />
        </div>
      </div>
    </AuthLayout>
  );
};

export default Flow2;