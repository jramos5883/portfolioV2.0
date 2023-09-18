import Image from "next/image";
import Link from "next/link";

export default function CozyCupid() {
  return (
    <div className="my-20">
      <p className="text-center text-3xl text-yellow py-4">CozyCupid</p>
      <div className="flex flex-row">
        <div className=" flex flex-col w-1/2">
          <Image
            className="border-yellow-400 border-4 rounded-lg"
            layout="responsive"
            height={500}
            width={500}
            src="/images/CozyCupidWebsite.png"
            alt="Dashboard Calendar"
          />
          <div className="flex flex-row justify-evenly">
            <div className="2xl:hidden mt-8">
              <p className="text-white text-2xl pb-4">Technologies Used:</p>
              <ul>
                <li className="text-grey text-2xl">- React</li>
                <li className="text-grey text-2xl">- Next.js 13.4</li>
                <li className="text-grey text-2xl">- FormSubmit</li>
                <li className="text-grey text-2xl">- Tailwind CSS</li>
                <li className="text-grey text-2xl">- Vercel</li>
              </ul>
            </div>
            <div className="flex items-center justify-center 2xl:hidden">
              <Link
                href="https://www.cozycupid.com/"
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
              - Lead meetings with clients and contributed to creating the brand
              of the company's product.
            </li>
            <li className="text-grey text-2xl">
              - Utilized FormSubmit to create a contact form that sends emails
              directnly to the clients invoice.
            </li>
            <li className="text-grey text-2xl">
              - Collaborated with clients to build a responsive website that
              fulfilled all of the buisness needs of the company.
            </li>
          </ul>
          <div className="sm:hidden 2xl:block">
            <div className="flex flex-row">
              {" "}
              <div className="">
                <p className="text-white text-2xl py-4">Technologies Used:</p>
                <ul>
                  <li className="text-grey text-2xl">- React</li>
                  <li className="text-grey text-2xl">- Next.js 13.4</li>
                  <li className="text-grey text-2xl">- FormSubmit</li>
                  <li className="text-grey text-2xl">- Tailwind CSS</li>
                  <li className="text-grey text-2xl">- Vercel</li>
                </ul>
              </div>
              <div className="m-20">
                <Link
                  href="https://www.cozycupid.com/"
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
