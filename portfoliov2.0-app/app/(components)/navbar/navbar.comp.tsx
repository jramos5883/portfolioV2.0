import { GiFlamingTrident } from "react-icons/gi";

export default function Navbar() {
  return (
    <div className="flex flex-row items-center justify-between h-16">
      <span className="px-4 text-5xl text-yellow">
        <GiFlamingTrident />
      </span>
      <div className="flex flex-row">
        <a href="#id_aboutMe">
          <p className="px-4 text-3xl text-yellow">
            01. <span className="text-3xl text-white">About Me</span>
          </p>
        </a>
        <a href="#id_projects">
          <p className="px-4 text-3xl text-yellow">
            02. <span className="text-3xl text-white">Projects</span>
          </p>
        </a>
        <a href="#id_contact">
          <p className="px-4 text-3xl text-yellow">
            03. <span className="text-3xl text-white">Contact Form</span>
          </p>
        </a>
      </div>
    </div>
  );
}
