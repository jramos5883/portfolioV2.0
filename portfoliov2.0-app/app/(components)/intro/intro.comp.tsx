import { montFont } from "@/app/fonts";

export default function Intro() {
  return (
    <div className="m-20">
      <p className="text-yellow text-3xl py-2">Hi, my name is</p>
      <p className={`${montFont.className} text-white text-6xl font-bold py-2`}>
        John Ramos.
      </p>
      <p className={`${montFont.className} text-grey text-6xl font-bold py-2`}>
        I build things for the web.
      </p>
      <p className="text-grey max-w-lg text-2xl indent pb-8">
        I am a Los Angeles based junior software engineer looking to break into
        the tech industry. Currently looking to take on new projects and
        challenges and continue to improve my coding skills and knowledge.
      </p>
      <button className="text-yellow border-yellow-400 p-2 mr-4 border-4 rounded-lg hover:bg-yellow-700">
        <a href="#id_contact">
          Get In Touch <i className="fa-regular fa-envelope fa-2xl"></i>
        </a>
      </button>
      <a
        className="text-yellow border-yellow-400 p-2 border-4 rounded-lg hover:bg-yellow-700"
        href="/pdf/JohnRamosTechResume.pdf"
        target="_blank"
      >
        Resume <i className="fa-regular fa-file fa-2xl"></i>
      </a>
    </div>
  );
}
