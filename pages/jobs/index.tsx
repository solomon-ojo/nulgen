import { JobBoardHero } from "@/components/job-board/JobBoardHero";
import { Footer } from "@/components/landing-page/footer";
import JobBoardLayout from "@/layouts/jobboard";
import React from "react";

export default function JobBoard() {
  const jobs = [
    {
      title: "Frontend Developer",
      company: "Tech Innovators",
      location: "Remote",
      type: "Full-Time",
      description:
        "We are looking for a skilled Frontend Developer to join our team. You will work with React, Next.js, and other modern tools.",
      postedDate: "2 days ago",
    },
    {
      title: "Backend Developer",
      company: "Code Wizards",
      location: "San Francisco, CA",
      type: "Part-Time",
      description:
        "Join our backend team to build scalable APIs using Node.js and Laravel. Cloud experience is a plus.",
      postedDate: "1 week ago",
    },
    {
      title: "UI/UX Designer",
      company: "Creative Minds",
      location: "Berlin, Germany",
      type: "Contract",
      description:
        "Seeking a creative UI/UX designer to improve the user experience across multiple platforms.",
      postedDate: "3 days ago",
    },
  ];

  return (
    <JobBoardLayout>
      <section className="h-full w-full">
        <div className="flex-1 flex flex-col items-center gap-0 overflow-auto scrollbar-hide">
          <div className=" w-full h-full pb-10">
            <JobBoardHero />
          </div>
        </div>
        <Footer bgColor="bg-[#2a2a2f]" />
      </section>
    </JobBoardLayout>
  );
}
