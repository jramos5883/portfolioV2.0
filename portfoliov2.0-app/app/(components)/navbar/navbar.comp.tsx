import { GiFlamingTrident } from "react-icons/gi";

export default function Navbar() {
  return (
    <div className="flex flex-row justify-between h-16 items-center">
      <span className="text-yellow px-4 text-5xl">
        <GiFlamingTrident />
      </span>
      <div className="flex flex-row">
        <p className="px-4 text-yellow text-3xl">
          01. <span className="text-white text-3xl">About Me</span>
        </p>
        <p className="px-4 text-yellow text-3xl">
          02. <span className="text-white text-3xl">Projects</span>
        </p>
        <p className="px-4 text-yellow text-3xl">
          03. <span className="text-white text-3xl">Contact Form</span>
        </p>
      </div>
    </div>
  );
}
