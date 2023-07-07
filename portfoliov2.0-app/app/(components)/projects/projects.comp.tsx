import Dashboard from "./projs/dashboard.comp";
import Portfolio from "./projs/portfolio.comp";
import PttM from "./projs/pttm.comp";
import Blog from "./projs/blog.comp";

export default function Projects() {
  return (
    <div className="m-20">
      <p className="text-yellow text-3xl">
        02. <span className="text-white text-3xl">Projects</span>
      </p>
      <Dashboard />
      <Portfolio />
      <PttM />
      <Blog />
    </div>
  );
}
