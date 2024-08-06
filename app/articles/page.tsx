import Image from "next/image";

export default function Page() {
    return (
      <div className="flex flex-col justify-center gap-[20px] px-[calc(12vw)]">
        <div className="pt-20">
          <div className="flex flex-col md:flex-row h-max-content gap-10 justify-between">
            <div className="pr-10">
              <h1 className="text-6xl pb-10 font-bold opacity-75 color-[#1E1E1E]">Articles.</h1>
              <p className="text-xl opacity-75 color-brand-dark pb-6">
                <b className="font-semibold">Full length pieces with more of a coherent theme or message. </b>
                These are usually about things I've read or things I'm interested in. More abstract.
              </p>
              <svg className="fill-brand-dark" xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path d="m15 4.946-6-2-7 2.333v16.108l7-2.333 6 2 7-2.333V2.613zm-5 .442 4 1.333v11.891l-4-1.333zM4 6.721l4-1.333v11.891l-4 1.334zm16 10.558-4 1.333V6.721l4-1.334z"/></svg>
              <div className="flex gap-10 pt-10">
                <button className="border-2 py-2 px-4 rounded-full transition duration-2 hover:bg-[#bccce6]">Pyschology</button>
                <button className="border-2 py-2 px-4 rounded-full transition duration-2 hover:bg-[#dfd1e6]">Computer Science</button>
                <button className="border-2 py-2 px-4 rounded-full transition duration-2 hover:bg-[#e6d1d6]">History</button>
                <button className="border-2 py-2 px-4 rounded-full transition duration-2 hover:bg-[#e6d7d1]">Architecture</button>
                <button className="border-2 py-2 px-4 rounded-full transition duration-2 hover:bg-[#d1e3e6]">Politics</button>
              </div>
            </div>
            <div>
              <Image 
                src="/alien_building.jpg"
                width={400}
                height={600}
                alt="Cool alien-looking building" 
                className="rounded-md"
              />
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center p-10">
          <div className="bg-slate-200 h-[5px] w-4/5 rounded"></div>
        </div>
        <div>
          <h1 className="text-4xl pb-10 font-bold opacity-75 color-[#1E1E1E]">Latest</h1>
        </div>
      </div>
    )
  }