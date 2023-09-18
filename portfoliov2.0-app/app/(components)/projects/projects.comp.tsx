import CozyCupid from "./projs/cozycupid.comp";
import Dashboard from "./projs/dashboard.comp";
import PttM from "./projs/pttm.comp";
import Blog from "./projs/blog.comp";
// import Portfolio from "./projs/portfolio.comp";

export default function Projects() {
  return (
    <div className="m-20">
      <div id="id_projects" />
      <p className="text-yellow text-3xl">
        02. <span className="text-white text-3xl">Projects</span>
      </p>
      <div className="flex flex-col items-center">
        <CozyCupid />
        <Dashboard />
        <PttM />
        <Blog />
        {/* <Portfolio /> */}
      </div>
    </div>
  );
}
