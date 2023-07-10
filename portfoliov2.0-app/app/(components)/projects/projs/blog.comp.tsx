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
              - Used Firebase Auth to handle personal admin sign in to post
              blogs.
            </li>
            <li className="text-grey text-2xl">
              - Utilized React and Typescript to design and build the layout and
              funcitonality of the blog website.
            </li>
            <li className="text-grey text-2xl">
              - Deployed Firebase&apos;s serverless backend to allow for data,
              file, and image storage for the blog website.
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
