import Image from "next/image";
import Link from "next/link";

export default function PttM() {
  return (
    <div className="mb-20">
      <p className="text-center text-3xl text-yellow py-4">Poke to the Moon</p>
      <div className="flex flex-row">
        <div className=" flex flex-col w-1/2">
          <Image
            className="border-yellow-400 border-4 rounded-lg"
            layout="responsive"
            height={500}
            width={500}
            src="/images/portfolioPttM.png"
            alt="Dashboard Calendar"
          />
          <div className="flex flex-row justify-evenly">
            <div className="2xl:hidden mt-8">
              <p className="text-white text-2xl pb-4">Technologies Used:</p>
              <ul>
                <li className="text-grey text-2xl">- React</li>
                <li className="text-grey text-2xl">- Next.js 13</li>
                <li className="text-grey text-2xl">- Google Embeded Map API</li>
                <li className="text-grey text-2xl">- Tailwind CSS</li>
                <li className="text-grey text-2xl">- Vercel</li>
              </ul>
            </div>
            <div className="flex items-center justify-center 2xl:hidden">
              <Link
                href="https://pttmv4.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-yellow border-yellow-400 p-2 border-4 my-8 rounded-lg hover:bg-yellow-700"
              >
                Live Demo
              </Link>
            </div>
          </div>
        </div>
        <div className="w-1/2 ml-16">
          <p className="text-white text-2xl pb-4">Project Summary:</p>
          <ul>
            <li className="text-grey text-2xl">
              - Spearheaded collaboration with restaurant owners, meticulously
              shaping the digital representation of their business to perfectly
              align with their vision and goals.
            </li>
            <li className="text-grey text-2xl">
              - Employed responsive design principles using Tailwind CSS,
              ensuring optimal webpage presentation across various devices for a
              seamless user experience.
            </li>
            <li className="text-grey text-2xl">
              - Utilized the Google Maps Embedded API, offering an intuitive,
              user-friendly tool for customers to effortlessly locate the
              restaurant.
            </li>
            <li className="text-grey text-2xl">
              - Integrated social media platforms with custom interactive icons,
              increasing customer engagement and strengthening the
              restaurant&apos;s online presence.
            </li>
          </ul>
          <div className="sm:hidden 2xl:block">
            <div className="flex flex-row">
              {" "}
              <div className="">
                <p className="text-white text-2xl py-4">Technologies Used:</p>
                <ul>
                  <li className="text-grey text-2xl">- React</li>
                  <li className="text-grey text-2xl">- Next.js 13</li>
                  <li className="text-grey text-2xl">
                    - Google Embeded Map API
                  </li>
                  <li className="text-grey text-2xl">- Tailwind CSS</li>
                  <li className="text-grey text-2xl">- Vercel</li>
                </ul>
              </div>
              <div className="m-20">
                <Link
                  href="https://pttmv4.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-yellow border-yellow-400 p-2 border-4 my-12 rounded-lg hover:bg-yellow-700"
                >
                  Live Demo
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
