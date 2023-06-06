export default function Navbar() {
  return (
    <div className="flex flex-row bg-green-300 justify-between h-16 items-center">
      <h1 className="px-4 text-3xl">Navbar</h1>
      <div className="flex flex-row">
        <p className="px-4">01. About Me</p>
        <p className="px-4">02. Projects</p>
        <p className="px-4">03. Message Me</p>
      </div>
    </div>
  );
}
