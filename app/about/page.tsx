import Image from "next/image"
import Link from "next/link"

export default function Page() {
    return (
      <div className="flex flex-col justify-center max-w-[1200px] px-[calc(8vw)] mx-auto text-black">
        <div className="flex flex-col py-20">
          <h1 className="text-6xl pb-10 font-bold opacity-75 color-brand-dark">About.</h1>
          <p className="text-lg color-brand-dark">
          Hey I&apos;m Mark! This is a personal project/blog where I record thoughts and stories 
          about various topics. You already knew that, but something you didn&apos;t know, the name of
          this project. It&apos;s a combination of <strong className="opacity-100 font-semibold text-brand-color">Sentient</strong> and <strong className="font-semibold">Centennial</strong>. Sentience: I think is a very intriguing topic,
          mysterious but also deeply personal. Centennial: Relates to time, history, experience,
          and celebration. It blends a lot of relevant themes and I thought it sounded cool. Now you know.
          <br />
          <br />
          <strong className="font-semibold">Life things:</strong>
          <br />
          <br />
          Currently, I&apos;m studying computer science at Cal Poly SLO. I&apos;ve always loved learning
          about technical topics, but &quot;the other stuff&quot; is equally as engaging. History
          and psychology are what I would call the engineering of the non-engineering world, so they are my favorites.
          <br />
          <br />
          In the field of computer science I&apos;m really interested in machine learning. But more generally,
          I enjoy the struggle to learn how things work, and the act of creation and innovation through digital mediums.
          <br />
          <br />
          Apart from that, I stay pretty active. I love basketball, volleyball, swimming, and  going to the gym.
          I also really love cities, space, and the human spirit.
          <br />
          <br />
          <strong className="font-semibold">Some random fun facts:</strong>
          </p>
          <ul className="p-4">
            <li className="text-lg color-brand-dark before:content-['-'] before:bg-brand-color/75 before:px-[8px] before:mx-1 before:rounded py-2">
              Favorite sound: Construction or tires on a wet road
            </li>
            <li className="text-lg color-brand-dark before:content-['-'] before:bg-brand-color/75 before:px-[8px] before:mx-1 before:rounded py-2">
              Favorite art genre: Baroque or High Renaissance
            </li>
            <li className="text-lg color-brand-dark before:content-['-'] before:bg-brand-color/75 before:px-[8px] before:mx-1 before:rounded py-2">
              Favorite trinket: The clock
            </li>
            <li className="text-lg color-brand-dark before:content-['-'] before:bg-brand-color/75 before:px-[8px] before:mx-1 before:rounded py-2">
              Favorite numer: 9
            </li>
          </ul>
          <p className="pb-10 font-semibold text-brand-dark text-lg">Some very cool building photos:</p>
          <div className="flex flex-wrap gap-10 items-center justify-center">
            <Image 
                  src="/articles/alien_building.JPG"
                  width={300}
                  height={600}
                  alt="Alien building" 
                  className="rounded-md"
                />
            <Image 
                src="/about/habitat_building.JPG"
                width={300}
                height={600}
                alt="Habitat building" 
                className="rounded-md"
              />
            <Image 
                src="/about/trellis_building.JPG"
                width={300}
                height={600}
                alt="Trellis building" 
                className="rounded-md"
              />
            <Image 
                src="/about/ornate_building.JPG"
                width={300}
                height={600}
                alt="Ornate building" 
                className="rounded-md"
              />
            <Image 
                src="/about/pod_building.JPG"
                width={300}
                height={600}
                alt="Pod building" 
                className="rounded-md"
              />
          </div>
          <p className="text-center py-5 text-brand-dark text-lg">(These are all from a recent trip to NYC)</p>
          <p className="pt-4 text-lg color-brand-dark">
            <strong className="font-semibold">And that's it!</strong>
            <br />
            <br />
            These are my other things:
          </p>
          <div className="pt-2 flex gap-2">
              <a className="w-min" target="_blank" href="https://www.linkedin.com/in/mark-mcguire011/" rel="noopener noreferrer">
                <svg xmlns="http://www.w3.org/2000/svg" version="1.1"  width="24" height="24" viewBox="0 0 24 24">
                  <path className="opacity-65" fill="brand-dark" d="M21,21H17V14.25C17,13.19 15.81,12.31 14.75,12.31C13.69,12.31 13,13.19 13,14.25V21H9V9H13V11C13.66,9.93 15.36,9.24 16.5,9.24C19,9.24 21,11.28 21,13.75V21M7,21H3V9H7V21M5,3A2,2 0 0,1 7,5A2,2 0 0,1 5,7A2,2 0 0,1 3,5A2,2 0 0,1 5,3Z" />
                </svg>
              </a>
              <a className="w-min" target="_blank" href="https://github.com/markmcguire011" rel="noopener noreferrer">
                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="24" height="24" viewBox="0 0 30 30">
                    <path className="opacity-65" fill="brand-dark" d="M15,3C8.373,3,3,8.373,3,15c0,5.623,3.872,10.328,9.092,11.63C12.036,26.468,12,26.28,12,26.047v-2.051 c-0.487,0-1.303,0-1.508,0c-0.821,0-1.551-0.353-1.905-1.009c-0.393-0.729-0.461-1.844-1.435-2.526 c-0.289-0.227-0.069-0.486,0.264-0.451c0.615,0.174,1.125,0.596,1.605,1.222c0.478,0.627,0.703,0.769,1.596,0.769 c0.433,0,1.081-0.025,1.691-0.121c0.328-0.833,0.895-1.6,1.588-1.962c-3.996-0.411-5.903-2.399-5.903-5.098 c0-1.162,0.495-2.286,1.336-3.233C9.053,10.647,8.706,8.73,9.435,8c1.798,0,2.885,1.166,3.146,1.481C13.477,9.174,14.461,9,15.495,9 c1.036,0,2.024,0.174,2.922,0.483C18.675,9.17,19.763,8,21.565,8c0.732,0.731,0.381,2.656,0.102,3.594 c0.836,0.945,1.328,2.066,1.328,3.226c0,2.697-1.904,4.684-5.894,5.097C18.199,20.49,19,22.1,19,23.313v2.734 c0,0.104-0.023,0.179-0.035,0.268C23.641,24.676,27,20.236,27,15C27,8.373,21.627,3,15,3z"></path>
                </svg>
              </a>
            </div>
        </div>
      </div>
    )
  }