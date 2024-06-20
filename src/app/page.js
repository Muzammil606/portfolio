import Image from "next/image";
import { RiFacebookLine, RiGithubLine, RiLinkedinLine } from "react-icons/ri";

export default function Home() {
  return (
    <main>
      <section className="relative w-screen h-screen flex md:items-center justify-center">
        <div className="mt-40 md:mt-0 text-center">
          <p className="md:text-xl mb-2 md:mb-4">👋, My name is <span className="font-semibold">Muzammil Ansari</span> & I'm a</p>
          <h1>FULLSTACK<br/><span className="font-outline">DEVELOPER</span></h1>
          <div className="md:flex items-center justify-between px-1">
            <p className="text-xl text-center md:text-start">based in Mumbai, India</p>
            <div className="flex items-center justify-center md:justify-end gap-3 text-xl">
              <a><RiLinkedinLine /></a>
              <a><RiGithubLine /></a>
              <a><RiFacebookLine /></a>
            </div>
          </div>
          <div className="w-full flex items-center justify-center">
            <Image
              className="absolute bottom-0"
              src="/me.png"
              alt="Muzammil Ansari"
              width={450}
              height={450}
            />
          </div>
        </div>
      </section>
    </main>
  );
}
