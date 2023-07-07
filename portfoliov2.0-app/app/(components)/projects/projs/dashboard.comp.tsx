import Image from "next/image";

export default function Dashboard() {
  return (
    <div className="">
      <p className="text-center text-3xl text-yellow py-4">
        Poseidon&apos;s Dashboard
      </p>
      <div className="flex flex-row">
        <div className=" flex flex-col w-1/2">
          {" "}
          <Image
            className=""
            layout="responsive"
            height={500}
            width={500}
            src="/images/portfolioDashboard.png"
            alt="Dashboard Calendar"
          />{" "}
          <p className="text-white text-2xl">Technologies Used:</p>
          <ul>
            <li className="text-grey text-2xl">- React</li>
            <li className="text-grey text-2xl">- Next.js 13</li>
            <li className="text-grey text-2xl">- Firebase Firestore</li>
            <li className="text-grey text-2xl">- NextAuth.js</li>
            <li className="text-grey text-2xl">- Tailwind CSS</li>
          </ul>
        </div>
        <div className="w-1/2 px-4">
          <p className="text-white text-2xl">Project Summary:</p>
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
        </div>
      </div>
    </div>
  );
}
