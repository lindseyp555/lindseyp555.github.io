import Image from "next/image";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
            <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
              <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
                Lindsey Peterson
              </h1>
              <p className="max-w-md text-lg leading-8 text-zinc-600 dark:text-zinc-400">
                I'm a recent graduate from the University of Utah pursuing a career in computer science.
              </p>
            </div>
            <div className="flex flex-col gap-4 text-base font-medium sm:flex-row">
              <a
                className="flex h-12 w-full items-center justify-center rounded-full border border-solid border-black/[.08] px-5 transition-colors hover:border-transparent hover:bg-black/[.04] dark:border-white/[.145] dark:hover:bg-[#1a1a1a] md:w-[158px]"
                href="https://www.linkedin.com/in/lindsey-peterson-09a765265/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  // className="dark:invert"
                  src="images/linkedin.png"
                  alt="LinkedIn logo"
                  width={24}
                  height={24}
                />
                LinkedIn
              </a>
              <a
                className="flex h-12 w-full items-center justify-center rounded-full border border-solid border-black/[.08] px-5 transition-colors hover:border-transparent hover:bg-black/[.04] dark:border-white/[.145] dark:hover:bg-[#1a1a1a] md:w-[158px]"
                href="https://github.com/lindseyp555"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  // className="dark:invert"
                  src="images/github.png"
                  alt="GitHub logo"
                  width={24}
                  height={24}
                />
                GitHub
              </a>
            </div>
          </div>
          <Image
            // className="dark:invert"
            className="object-contain"
            src="images/Grad_picture.JPG"
            alt="graduation picture"
            width={500}
            height={500}
          />
        </div>
      </main >
    </div >
  );
}
