import Image from "next/image";
import cursor from "@/public/cursor.svg";

export default function IntroSection() {
  return (
    <div className="flex flex-col md:w-1/2 w-screen gap-[20px] p-[60px]">
      <div className="w-1/2 h-[1px] bg-gradient-to-r from-[#a8a8a8] rounded"></div>
      <div className="relative">
        <h1 className="text-4xl font-bold opacity-75 color-[#1E1E1E]">
          A Development
        </h1>
        <Image
          className="ml-[160px] mt-8 absolute inset-0 flex justify-center"
          src={cursor}
          alt="cursor"
        />
      </div>
      <div className="w-2/3 h-[1px] bg-gradient-to-l from-[#a8a8a8] rounded"></div>
      <div className="w-prose">
        <p className="text-xl color-[#1E1E1E">
          Hey I&apos;m Mark! This is a personal project/blog where I record
          thoughts and stories about various topics.
          <br />
          <br />
          Here&apos;s some of the things that I write about:
        </p>
      </div>
      <div className="flex items-center pl-[30px]">
        <ul className="list-image-none text-xl">
          <li className="underline decoration-brand-color">History</li>
          <li className="underline decoration-brand-color">Computer Science</li>
          <li className="underline decoration-brand-color">Machine Learning</li>
          <li className="underline decoration-brand-color">Psychology</li>
          <li className="underline decoration-brand-color">Architecture</li>
        </ul>
      </div>
    </div>
  );
}
