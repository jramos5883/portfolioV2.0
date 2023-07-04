import Image from "next/image";

export default function AboutMe() {
  return (
    <div className="m-20 flex justify-between">
      <div className="w-2/3">
        <p className="text-yellow text-3xl">
          01. <span className="text-white text-3xl">About Me</span>
        </p>
        <p className="text-grey text-2xl py-2 indent">
          Hi, I&apos;m John - a lifelong learner with a passion for science and
          technology. My early career as an EMT, Paramedic, and Firefighter
          Paramedic was driven by my love of science and the human body. But as
          I continued to explore the world of tech and programming, I found
          myself captivated by the endless possibilities for innovation and
          problem-solving. While I enjoyed the fast paced and hands-on work of
          emergency medicine, my true passion for tech was sparked by my
          introduction to coding. Now, as a software engineer, I bring a unique
          blend of analytical thinking and scientific curiosity to every project
          I work on.
        </p>
        <p className="text-grey text-2xl py-2 indent">
          As a self-taught developer, I have embraced the challenges and rewards
          of learning code through trial and error and hands-on experience. With
          a strong focus on front-end development, I am constantly pushing
          myself to learn new skills and explore new technologies. Currently I
          am working on mastering React.js while also refining my knowledge of
          backend development. My goal is to become a full-stack developer and
          bring my expertise to a dynamic team that values innovation and
          creativity.
        </p>
        <p className="text-grey text-2xl py-2 indent">
          As I continue to grow and develop my skills as a software engineer, I
          am excited to bring my diverse background and strong work ethic to the
          tech industry. With my unique combination of medical expertise and
          technical skills, I am confident that I would be a valuable asset to
          any buisness looking for a passionate, knowlegable, and adaptable team
          member.
        </p>
        <div className="py-8">
          <a
            className="text-yellow border-yellow-400 p-2 mr-4 border-4 rounded-lg"
            href="https://www.linkedin.com/in/jrprodev/"
          >
            Linked&apos;in <i className="fa-brands fa-linkedin fa-2xl"></i>
          </a>
          <a
            className="text-yellow border-yellow-400 p-2 mr-4 border-4 rounded-lg"
            href="https://github.com/jramos5883"
          >
            GitHub <i className="fa-brands fa-github fa-2xl"></i>
          </a>
        </div>

        {/* Need to switch from font awesome to react icons */}

        <div className="text-center">
          <p className="text-yellow text-3xl text-center">Skills</p>
          <div className="grid grid-cols-5 gap-x-36 gap-y-4">
            <div className="text-center">
              <i className="icon fa-brands fa-8x fa-html5"></i>
              <p className="text-yellow text-2xl">HTML</p>
            </div>
            <div className="text-center">
              <i className="icon fa-brands fa-8x fa-css3-alt"></i>
              <p className="text-yellow text-2xl">CSS</p>
            </div>
            <div className="text-center">
              <i className="icon fa-brands fa-8x fa-square-js"></i>
              <p className="text-yellow text-2xl">Javascript</p>
            </div>
            <div className="text-center">
              <i className="icon fa-brands fa-8x fa-react"></i>
              <p className="text-yellow text-2xl">React</p>
            </div>
            <div className="text-center">
              <i className="icon fa-brands fa-8x fa-square-js"></i>
              <p className="text-yellow text-2xl">TypeScript</p>
            </div>
            <div className="text-center">
              <i className="icon fa-brands fa-8x fa-neos"></i>
              <p className="text-yellow text-2xl">Next 13.4</p>
            </div>
            <div className="text-center">
              <i className="icon fa-brands fa-8x fa-node"></i>
              <p className="text-yellow text-2xl">Node.js</p>
            </div>
            <div className="text-center">
              <i className="icon fa-brands fa-8x fa-bootstrap"></i>
              <p className="text-yellow text-2xl">Bootstrap</p>
            </div>
            <div className="text-center">
              <i className="icon fa-solid fa-8x fa-wind"></i>
              <p className="text-yellow text-2xl">Tailwind</p>
            </div>
            <div className="text-center">
              <i className="icon fa-brands fa-8x fa-python"></i>
              <p className="text-yellow text-2xl">Python</p>
            </div>
            <div className="text-center">
              <i className="icon fa-brands fa-8x fa-linux"></i>
              <p className="text-yellow text-2xl">Linux</p>
            </div>
            <div className="text-center">
              <i className="icon fa-brands fa-8x fa-github"></i>
              <p className="text-yellow text-2xl">GitHub</p>
            </div>
            <div className="text-center">
              <i className="icon fa-brands fa-8x fa-gripfire"></i>
              <p className="text-yellow text-2xl">Firebase</p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-1/3 pt-12">
        <Image
          className="profile-pic"
          height={500}
          width={500}
          src="/images/headshot.jpg"
          alt="Picture of a happy software engineer!"
        />
      </div>
    </div>
  );
}
