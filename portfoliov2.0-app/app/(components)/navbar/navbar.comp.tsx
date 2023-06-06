export default function Navbar() {
  return (
    <div className="flex flex-row justify-between h-16 items-center">
      <h1 className="text-yellow px-4 text-3xl">Navbar</h1>
      <div className="flex flex-row">
        <p className="px-4 text-yellow">
          01. <span className="text-white">About Me</span>
        </p>
        <p className="px-4 text-yellow">
          02. <span className="text-white">Projects</span>
        </p>
        <p className="px-4 text-yellow">
          03. <span className="text-white">Message Me</span>
        </p>
      </div>
    </div>
  );
}
