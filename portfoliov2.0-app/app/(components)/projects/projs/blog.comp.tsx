import Image from "next/image";
import Link from "next/link";

export default function Blog() {
  return (
    <div className="mb-20">
      <p className="text-center text-3xl text-yellow py-4">Blog Website</p>
      <div className="flex flex-row">
        <div className=" flex flex-col w-1/2">
          <Image
            className="border-yellow-400 border-4 rounded-lg"
            layout="responsive"
            height={500}
            width={500}
            src="/images/portfolioBlog.png"
            alt="Dashboard Calendar"
          />
          <div className="flex flex-row justify-evenly">
            <div className="2xl:hidden mt-8">
              <p className="text-white text-2xl pb-4">Technologies Used:</p>
              <ul>
                <li className="text-grey text-2xl">- React</li>
                <li className="text-grey text-2xl">- TypeScript</li>
                <li className="text-grey text-2xl">- Firebase Firestore</li>
                <li className="text-grey text-2xl">- Firebase Storage</li>
              </ul>
            </div>
            <div className="flex items-center justify-center 2xl:hidden">
              <Link
                href="https://blog.johnramos.tech"
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
              - Brainstormed, designed, built, and deployed a fully functioning
              personal dashboard app created with orginization, productivity,
              and efficency in mind.
            </li>
            <li className="text-grey text-2xl">
              - Used NextAuth.js and Google OAuth to handle user sign in, manage
              authentication, and establish protected routes.
            </li>
            <li className="text-grey text-2xl">
              - Deploy Firebase&apos;s serverless backend to allow for data,
              file, and image storage for the dashboard.
            </li>
            <li className="text-grey text-2xl">
              - Created a Dota 2 Pro Match Tracker that displays recent pro Dota
              2 matches and is able to search for specefic pro teams.
            </li>
          </ul>
          <div className="sm:hidden 2xl:block">
            <div className="flex flex-row">
              {" "}
              <div className="">
                <p className="text-white text-2xl py-4">Technologies Used:</p>
                <ul>
                  <li className="text-grey text-2xl">- React</li>
                  <li className="text-grey text-2xl">- TypeScript</li>
                  <li className="text-grey text-2xl">- Firebase Firestore</li>
                  <li className="text-grey text-2xl">- Firebase Storage</li>
                </ul>
              </div>
              <div className="m-20">
                <Link
                  href="https://blog.johnramos.tech"
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
